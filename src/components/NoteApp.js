import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import AddPage from '../pages/AddPage';
import HomePage from '../pages/HomePage'
import Navigation from './Navigation';
import DetailPage from '../pages/DetailPage';
import ArchivedPage from '../pages/ArchivePage';
import Page404 from '../pages/Page404';
import RegisterPage from '../pages/RegisterPage';
import { getUserLogged, putAccessToken } from '../utils/network-data'
import LoginPage from '../pages/LoginPage';
import LogoutButton from './LogoutButton';
import { ThemeProvider } from '../contexts/ThemeContext';
import ToggleTheme from './ToggleTheme';
import { LocaleProvider } from '../contexts/LocaleContext';
import ToggleLocale from './ToggleLocale';




class NoteApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authedUser: null,
      initializing: true,
      theme: localStorage.getItem('theme') || 'light',
        toggleTheme: () => {
          this.setState((prevState) => {
            const newTheme = prevState.theme === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme', newTheme);
            return {
              theme: newTheme
            }
        })
      },
      locale: localStorage.getItem('locale') || 'id',
        toggleLocale: () => {
          this.setState((prevState) => {
            const newLocale = prevState.locale === 'id' ? 'en' : 'id';
            localStorage.setItem('locale', newLocale);
            return {
              locale: newLocale
            }
        })
      }
    }

    this.onLoginSuccess = this.onLoginSuccess.bind(this)
    this.onLogout = this.onLogout.bind(this);
  }

  async componentDidMount() {
    document.documentElement.setAttribute('data-theme', this.state.theme)
    const { data } = await getUserLogged();

    this.setState(() => {
      return {
        authedUser: data,
        initializing: false
      }
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if( prevState.theme !== this.state.theme ) {
      document.documentElement.setAttribute('data-theme', this.state.theme)
    }
  }

  async onLoginSuccess({ accessToken }){
    putAccessToken(accessToken);
    const { data } = await getUserLogged();

    this.setState(() => {
      return {
        authedUser: data
      }
    })
  }

  onLogout() {
    this.setState(() => {
      return {
        authedUser: null
      }
    })

    putAccessToken('')
  }



  render() {
    if (this.state.initializing){
      return null;
    }

    if(this.state.authedUser === null){
      return (
        <ThemeProvider value={this.state}>
          <LocaleProvider value={this.state} >
            <header>
              <h1><Link to="/">{this.state.locale === 'id' ? 'Aplikasi Catatan' : 'Notes App'}</Link></h1>
              <ToggleLocale />
              <ToggleTheme />
            </header>
            <main>
              <Routes>
                <Route path='/*' element={<LoginPage loginSuccess={this.onLoginSuccess} />} />
                <Route path='/register' element={<RegisterPage />} />
              </Routes>
            </main>
          </LocaleProvider>
        </ThemeProvider>
      )
    }

    return (
      <ThemeProvider value={this.state}>
        <LocaleProvider value={this.state} >
          <header>
            <h1><Link to="/">{this.state.locale === 'id' ? 'Aplikasi Catatan' : 'Notes App'}</Link></h1>
            <Navigation />
            <ToggleLocale />
            <ToggleTheme />
            <LogoutButton logout={this.onLogout} name={this.state.authedUser.name} />
          </header>
          <main>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/new' element={<AddPage />}/>
              <Route path='/notes/:id' element={<DetailPage />}/>
              <Route path='/archives' element={<ArchivedPage />} />
              <Route path='*' element={<Page404 />} />
            </Routes>
          </main>
        </LocaleProvider>
      </ThemeProvider>
    )
  }
}

export default NoteApp;
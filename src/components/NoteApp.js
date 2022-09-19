import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import AddPage from '../pages/AddPage';
import HomePage from '../pages/HomePage'
import Navigation from './Navigation';
import DetailPage from '../pages/DetailPage';
import ArchivedPage from '../pages/ArchivePage';


function NoteApp() {
  return (
    <>
      <header>
        <h1><Link to="/">Aplikasi Catatan</Link></h1>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/new' element={<AddPage />}/>
          <Route path='/notes/:id' element={<DetailPage />}/>
          <Route path='/archives' element={<ArchivedPage />} />
        </Routes>
      </main>
    </>
  )
}

export default NoteApp;
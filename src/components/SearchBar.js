import React from 'react'
import PropTypes from 'prop-types'
import { LocaleConsumer } from '../contexts/LocaleContext'

function SearchBar({ keyword, keywordChange}) {
  return (
    <LocaleConsumer>
      {
        ({ locale }) => {
          return (
            <div className='search-bar'>
              <input
                type='text'
                placeholder={locale === 'id' ? 'Cari Berdasarkan Judul ...' : 'Search by Title ...'}
                value={keyword}
                onChange={(event) => keywordChange(event.target.value)}
              />
            </div>
          )
        }
      }
      
    </LocaleConsumer>
  )
}

SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired
}

export default SearchBar
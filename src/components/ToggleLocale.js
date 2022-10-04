import React from 'react'
import { LocaleConsumer } from '../contexts/LocaleContext';
import { MdGTranslate } from 'react-icons/md'



function ToggleLocale() {
  return (
    <LocaleConsumer>
      {({ locale, toggleLocale }) => {
        return <button onClick={toggleLocale} className="toggle-locale"><MdGTranslate /></button>
      }}
    </LocaleConsumer>
  )
}

export default ToggleLocale
import React from 'react';
import { Link } from 'react-router-dom';
import { LocaleConsumer } from '../contexts/LocaleContext';


function Navigation() {
  return (
    <LocaleConsumer>
      {
        ({ locale }) => {
          return (
            <div className='navigation'>
              <ul>
                <li><Link to="/archives">{ locale === 'id' ? 'Terarsip' : 'Archived'}</Link></li>
              </ul>
            </div>
          )
        }
      }
    </LocaleConsumer>
    
  )
}

export default Navigation
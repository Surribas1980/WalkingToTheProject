import React from 'react';
import {Link} from 'react-scroll';

function NavBar() {
  return (
    <nav className='justifyContentCenter'>
      <ul className="nav-items divFlex">
        <li className="nav-item">
        <Link activeClass="active"
                    
                    to="seccion-1"
                    spy={true}
                   
                    smooth={true}
                    duration={500}
                    offset={-50}>
        Section 1
        </Link>  
        </li>
        <li className="nav-item">
          <Link activeClass="active"
                    
                    to="seccion-2"
                    spy={true}
                    
                    smooth={true}
                    duration={500}
                    offset={-50}>
          Section 2
          </Link> 
        </li>
        <li className="nav-item">
          <Link activeClass="active"
                   
                    to="seccion-3"
                    spy={true}
                   
                    smooth={true}
                    duration={500}
                    offset={-50}>
          Section 3
          </Link>
          </li>
        
      </ul>
    </nav>
  );
}

export default NavBar;

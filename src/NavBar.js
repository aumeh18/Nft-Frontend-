
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

import logo from './logo.svg';



function NavBar(props){
  const [state, setState] = useState({})

  useEffect(
    function() {
        setState(
            {
                // Use spread syntax to copy a new blank object
                ...{}, 
                // Overwrite with new key-value pair, where the key 
                // is the current path
                [props.path]: 'active'
            }
        )
    },
    [props.path]
)






    return (
      
      <div className="container">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4">
      <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
          <img src={logo} alt="logo" width="34" /> 
          <span className="fs-4" style={{"color":"white"}}>NAMS</span>
      </Link>

      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><Link to="/" className={`nav-link ${state['/']}`}>Home</Link></li>
        <li><Link to="/Faq" className={`nav-link ${state['/faq']}`}>FAQs</Link></li>
        <li><Link to="/About" className={`nav-link ${state['/about']}`}>About</Link></li>
        <li><Link to="/Contact" className={`nav-link ${state['/contact']}`}>Contact</Link></li>
      </ul>

      <div className="col-md-3 text-end">
    <Link to="/login"><button type="button" className={`btn btn-outline-warning me-2 ${state['/login']}`}>Login</button></Link>
      <Link to="/signup"><button type="button" className={`btn btn-outline-warning ${state['/sign-up']}`}>Sign-up</button></Link>
      </div>
    </header>
  </div>



    )
}
export default NavBar;
import React from 'react';
import PropTypes from 'prop-types';
import {
  Link
} from "react-router-dom";
export default function NavBar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className='container-fluid' style={{backgroundColor : props.mode === 'dark' ? 'black' : 'white'}} >
          <a className='navbar-brand' href='/'>
            {props.title}
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <Link className='nav-link active' aria-current='page' to='/'>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/about'>
                  About Us
                </Link>
              </li>
            </ul>
            <form className='d-flex'>
            <div className="form-check form-switch" style={{backgroundColor : props.mode === 'dark' ? 'black' : 'white',color : props.mode === 'dark' ? 'white' : 'black'}}>
  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick = {props.toogleMode}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
            </form>
          </div>
        </div>
      </nav>

    </>
  );
}

NavBar.propTypes = {
    title: PropTypes.string
  };

  NavBar.defaultProps = {
    title: 'Enter Title'
};
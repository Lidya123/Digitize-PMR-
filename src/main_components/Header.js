import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'

function Header () {
    return (
        <nav className="navbar navbar-light bg-light">
    
        <form className="form-inline ml-auto">
            <p className="nav-item dropdown btn btn-secondary m-2">
            <a className="nav-link dropdown-toggle " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Access
            </a>
            
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                <Link className='dropdown-item' to='/viewRecord'>View Record</Link>
                <Link className='dropdown-item' to='/prescript'>Prescript</Link>
            </div>
            </p>
            <Link to='/' className="btn btn-secondary mr-sm-2 m-2">Home</Link>
        </form>
        </nav>
    );
}

export default Header;
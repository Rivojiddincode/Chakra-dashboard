import React from 'react'
import "./Header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/img/svg/Shape.svg'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
    return (
        <header className='header'>
            <div className="logo">
                <img className='logo-img' src={logo} alt="logo" />
                <p className='logo-text'>PURITY UI DASHBOARD</p>
                <div className="page-name">
                    <p className='p-page-name'>Pages  /  <span className='span_page-name'>Dashboard</span></p>
                    <h4 className='h4'>Dashboard</h4>
                </div>
            </div>
            <div className="betwen">
                <div className="search">
                    <FontAwesomeIcon icon={faSearch} className="signIn-icon-user" />
                    <input className='input' type="text" placeholder='Type here...' />
                </div>

                <div className="signIn">
                    <FontAwesomeIcon icon={faUser} className="signIn-icon-user" />
                    <NavLink to="/signin" className={({ isActive }) => (isActive ? "active" : "")}>
                        Sign In
                    </NavLink>
                    <FontAwesomeIcon icon={faCog} className='signIn-icon-cog' />
                    <FontAwesomeIcon icon={faBell} className='signIn-icon-Bell' />
                </div>
            </div>
        </header>
    )
}

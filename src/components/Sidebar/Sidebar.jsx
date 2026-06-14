import React from 'react'
import "./Sidebar.css"
import Home from '../../assets/img/svg/home.svg'
import Chart from '../../assets/img/svg/chart.svg'
import Card from '../../assets/img/svg/card.svg'
import Set from '../../assets/img/svg/set.svg'
import User from '../../assets/img/svg/user.svg'
import Cop from '../../assets/img/svg/cop.svg'
import Raket from '../../assets/img/svg/raket.svg'
import Soroq from '../../assets/img/svg/soroq.svg'
import { NavLink } from 'react-router-dom'
export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className='sidebar-line'></div>
            <div className="navigation">
                <div className="icon-cont"><img className='icon-img' src={Home} alt="logo" ></img>
                </div>
                <NavLink to="/dashboard" className={({ isActive }) => (isActive ? "actives" : "")}>
                    Dashboard
                </NavLink>
            </div>
            {/* 2 */}
            <div className="navigation">
                <div className="icon-cont"><img className='icon-img' src={Chart} alt="logo" ></img>
                </div>
                <NavLink to="/tables" className={({ isActive }) => (isActive ? "actives" : "")}>
                    Tables
                </NavLink>
            </div>
            {/* 3 */}
            <div className="navigation">
                <div className="icon-cont"><img className='icon-img' src={Card} alt="logo" ></img>
                </div>
                <NavLink to="/billing" className={({ isActive }) => (isActive ? "actives" : "")}>
                    Billing
                </NavLink>
            </div>
            {/* 4 */}
            <div className="navigation">
                <div className="icon-cont"><img className='icon-img' src={Set} alt="logo" ></img>
                </div>
                <NavLink to="/profile" className={({ isActive }) => (isActive ? "actives" : "")}>
                    RTL
                </NavLink>
            </div>
            <p className='acc'>ACCOUNT PAGES</p>
            {/* 5 */}
            <div className="navigation">
                <div className="icon-cont"><img className='icon-img' src={User} alt="logo" ></img>
                </div>
                <NavLink to="/rtl" className={({ isActive }) => (isActive ? "actives" : "")}>
                    Profile
                </NavLink>
            </div>
            {/* 6 */}
            <div className="navigation">
                <div className="icon-cont"><img className='icon-img' src={Cop} alt="logo" ></img>
                </div>
                <NavLink to="/signin" className={({ isActive }) => (isActive ? "actives" : "")}>
                    Sign In
                </NavLink>
            </div>
            {/* 7 */}
            <div className="navigation">
                <div className="icon-cont"><img className='icon1-img' src={Raket} alt="logo" ></img>
                </div>
                <NavLink to="/signup" className={({ isActive }) => (isActive ? "actives" : "")}>
                    Sign Up
                </NavLink>
            </div>
            <div className="help">
                <img className='help-icon'    src={Soroq} alt="soroq" />
                <p className='help-text'>Need help?</p>
                <span className='help-text2'>Please check our docs</span>
                <button className='help-bnt'>Height Structure</button>
            </div>

        </div>
    )

}
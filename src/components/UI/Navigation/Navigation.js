import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navigation.css';

const navigation = () => (
    <header>
        <div className="container">
            <div className="header-content">
                <div className="logo">
                    <NavLink className="logo--link" activeClassName="logo--link" exact to='/'>
                        Logo
                    </NavLink>
                </div>
                <nav className="menu">
                    <NavLink className="nav--link" exact to='/'>Tasks</NavLink>
                    <NavLink className="nav--link" to='/addTask'>Add Task</NavLink>
                    <NavLink className="nav--link" to='/login'>Authorization</NavLink>
                </nav>
            </div>
        </div>
    </header>
);

export default navigation;
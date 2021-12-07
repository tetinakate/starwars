import React from "react";
import { Link, NavLink } from "react-router-dom";
import './header.css';

export const Header = () => {
        return(
            <div className='header d-flex'>
                <h3>
                    <Link to="/">Star DB</Link>
                </h3>
                <nav className='d-flex'>
                    <li><NavLink to="/characters/">Characters</NavLink></li>
                    <li><NavLink to="/planets/">Planets</NavLink></li>
                    <li><NavLink to="/starships/">Starships</NavLink></li>
                </nav>
            </div>
        )
}
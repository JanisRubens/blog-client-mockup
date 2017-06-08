import { Link } from 'react-router'
import React from 'react';

const Footer = (props) => (
    <footer className="site-footer">
        <nav className="mui-appbar">
            <ul className="mui-list--inline">
                <li><Link className="mui--appbar-height mui--appbar-line-height" to={'/'}>Home</Link></li>
                <li><Link className="mui--appbar-height mui--appbar-line-height" to={'/gallery'}>Gallery</Link></li>
                <li><span className="mui--appbar-height mui--appbar-line-height">Made by Janis 'JaRu' Rubens. Don't have rights to even poor my own tea.</span></li>
            </ul>
        </nav>
    </footer>
)

export default Footer

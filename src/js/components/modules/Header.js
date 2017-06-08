import { Link } from 'react-router'
import Logo from 'components/modules/Logo'
import React from 'react';

const Header = (props) => (
    <header className="site-header --seperator-line">
        <nav className="site-navigation">
            <section className="site-navigation-section --text-right">
                <Link className="text-link" to={'/'}>Home</Link>
                <Link className="text-link" to={'/blog'}>Blog</Link>
            </section>
            <section className="site-navigation-section">
                <Link to={'/'}><Logo/></Link>
            </section>
            <section className="site-navigation-section --text-left">
                <Link className="text-link" to={'/about'}>About</Link>
                <Link className="text-link" to={'/contact'}>Contact</Link>
            </section>
        </nav>
    </header>
)

export default Header
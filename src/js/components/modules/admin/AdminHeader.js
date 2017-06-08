import { Link } from 'react-router'
import Logo from 'components/modules/Logo'
import React from 'react';

const AdminHeader = ({path}) => (
    <header className="site-header --seperator-line">
        <nav className="site-navigation">
            <section className="site-navigation-section --text-right">
                <Link className="text-link" to={`/${path}/`}>Dashboard</Link>
                <Link className="text-link" to={`/${path}/users`}>Users</Link>
                <Link className="text-link" to={`/${path}/posts`}>Posts</Link>
                <Link className="text-link" to={`/${path}/analitics`}>Analitics</Link>
            </section>
        </nav>
    </header>
)

export default AdminHeader
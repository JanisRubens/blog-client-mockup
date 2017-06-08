import Footer from '../modules/Footer';
import Header from '../modules/Header';
import PropTypes from 'prop-types';
import React from 'react';

const App = ({ children }) => (
    <div className="outer-container">
        <Header/>
        <div className="page-wrap">
            <div className="inner-container">
                { children}
            </div>
        </div>
        <Footer/>
    </div>
);

App.propTypes = {
    children: PropTypes.node
}

export default App;

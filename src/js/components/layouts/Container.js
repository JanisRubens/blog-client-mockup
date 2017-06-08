import PropTypes from 'prop-types';
import React from 'react';

const Container = ({ children }) => (
    <div className="container">
        { children }
    </div>
)

Container.propTypes = {
    children: PropTypes.node
}

export default Container

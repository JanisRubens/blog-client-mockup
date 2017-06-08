import PropTypes from 'prop-types';
import React from 'react';

const Panel = ({ children, className }) => (
    <div className={'panel ' + className }>
        { children }
    </div>
)

Panel.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
}

export default Panel

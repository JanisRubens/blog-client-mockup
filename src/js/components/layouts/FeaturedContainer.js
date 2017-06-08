import PropTypes from 'prop-types';
import React from 'react';

const FeaturedContainer = ({ children }) => (
    <div className="featured-container">
        { children }
    </div>
)

FeaturedContainer.propTypes = {
    children: PropTypes.node
}

export default FeaturedContainer

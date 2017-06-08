import PropTypes from 'prop-types';
import React from 'react';

const PopularPosts = ({ children }) => (
    <div className="popular-posts">
        { children }
    </div>
)

PopularPosts.propTypes = {
    children: PropTypes.node
}

export default PopularPosts
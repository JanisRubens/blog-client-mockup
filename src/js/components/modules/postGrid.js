import Card from 'components/layouts/card';
import Panel from '../layouts/Panel';
import PostThumb from 'components/modules/PostThumb';
import PropTypes from 'prop-types';
import React from 'react';

const PostGrid = ({posts}) => (
      <div>
          { posts.map( (post, i) => {
              return (
                <Card key={post._id}>
                  <PostThumb {...post}/>
                </Card>
              )
          })}
        </div>

);

//Normaly you should use shapeOf( when declaring object, but i dont know the shape yet)
PostGrid.propTypes = {
    posts: PropTypes.array
}

export default PostGrid;

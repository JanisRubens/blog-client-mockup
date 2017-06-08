import React from 'react';

const Article = ({ post }) => (
  <article>
    <h2>{post.title}</h2>
    <img src={post.src}/>
    <p>{post.content}</p>
    <p>{post.author}</p>
  </article>
);

export default Article;

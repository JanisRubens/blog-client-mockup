import { Link } from 'react-router';
import React from 'react';

const Post = ({uniq_url, title, src, content}) => (
    <Link to={`/post/${uniq_url}`}>
    <article>
      <h2>{title}</h2>
      <img src={src}/>
      <p>{content}</p>
      <p></p>
    </article>
    </Link>
);

export default Post;

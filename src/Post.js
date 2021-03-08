import React from "react";
import PropTypes from 'prop-types';
function Post({ id, title ,deletePosts}) {
  return (
    <div className="Post">
         <button className="Post__delete" onClick={()=>deletePosts(id)} >X</button>
      <div className="Post__title">{title}</div>
      <img
            className="Post__image"
            src={`https://source.unsplash.com/random?sig=${id}`}
            />
    </div>
  );
}
Post.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  deletePosts: PropTypes.func.isRequired
};

export default Post;
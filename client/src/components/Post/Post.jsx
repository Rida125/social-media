import React, { useState } from "react";
import "./Post.css";
import Comment from "../../img/comment.png";
import Share from "../../img/share.png";
import Heart from "../../img/like.png";
import NotLike from "../../img/notlike.png";
import { useSelector } from "react-redux";
import { likePost } from "../../api/PostRequest";
import { Link } from "react-router-dom";

const Post = ({ data }) => {
  const { user } = useSelector((state) => state.authReducer.authData);

  const [liked, setLiked] = useState(data.likes.includes(user._id));
  const [likes, setLikes] = useState(data.likes.length);

  const handleLike = () => {
    likePost(data._id, user._id);
    setLiked((prev) => !prev);
    liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1);
  };
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="Post">
      <div className="card-pic">
        <img
          src={
            user.coverPicture
              ? serverPublic + data.profile
              : serverPublic + "defaultProfile.jpg"
          }
          alt=""
        />
        <span>
          {data.name}
        </span>
      </div>
      <img
        src={data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : ""}
        alt=""
      />
      <span> {data.desc}</span>
      <div className="postReact">
        <img
          src={liked ? Heart : NotLike}
          alt=""
          style={{ cursor: "pointer" }}
          onClick={handleLike}
        />
        <Link to="../chat">
          <img src={Comment} alt="" />
        </Link>
        <img src={Share} alt="" />
      </div>
      <span style={{ color: "var(--gray)", fontSize: "12px" }}>
        {likes} likes
      </span>
      <div className="detail">
        
      </div>
      {/* add Comment */}
      <div className="add-comment">
        <span className="material-symbols-outlined">mood</span>
        <input type="text" placeholder="Add a comment" />
        <button className="comment">Post</button>
      </div>
    </div>
  );
};

export default Post;

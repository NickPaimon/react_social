import React from "react";
import s from "./Post.module.css";
import ava from '../../../../assets/images/ava.svg';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src={ava} alt="avatar" />
      <div className={s.post_text}>
          <p className={s.name}>Name</p>
          <div className={s.message}>{props.message}</div>
          <div className={s.likes}>
              <span>Like</span> {props.likes}
          </div>
      </div>
    </div>
  );
};

export default Post;

import s from "./MyPosts.module.css";
import React from "react";
import Post from "../Posts/Post"


const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <texstaria>jjjj</texstaria>
                <button>add post</button>
            </div>
            <div className={s.posts}>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
            </div>

        </div>


    )
};
export default MyPosts
import s from "./MyPosts.module.css";
import React from "react";
import Post from "../Posts/Post"


const MyPosts = (props) => {

    return (
        <div>
            My posts
            <div>
                <texstaria>jjjj</texstaria>
                <button>add post</button>
            </div>
            <div className={s.posts}>
          <Post messages = 'hello' likeCount='50'/>
          <Post messages = 'yoo' likeCount='20'/>

            </div>

        </div>


    )
};
export default MyPosts
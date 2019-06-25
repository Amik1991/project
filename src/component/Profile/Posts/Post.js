import s from "./Posts.module.css";
import React from "react";


const Post = (props) => {

    return (


        <div className={s.item}>
            <img src='https://i.ytimg.com/vi/Y5GLCBjHR8U/maxresdefault.jpg'/>
            {props.messages}

            <div><span>like</span>{props.likeCount} </div>


        </div>


    )
};
export default Post
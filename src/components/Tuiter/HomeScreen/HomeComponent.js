import posts from './posts.json'
import PostItem from "./PostItem";
import React from "react";

const PostList = () => {
    return(
        <ul class="list-group">
            {
                posts.map(post => {
                    return(
                        <PostItem post={post}/>
                    );
                })
            }
        </ul>
    );
}

export default PostList;
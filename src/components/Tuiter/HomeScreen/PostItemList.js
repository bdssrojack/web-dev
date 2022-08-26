import PostItem from "./PostItem";
import React from "react";
import {useSelector} from "react-redux";

const PostList = () => {
    const posts = useSelector(state => state.tuits);
    return(
            <ul className="list-group">
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
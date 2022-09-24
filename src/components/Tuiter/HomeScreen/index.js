import React from "react";
import PostList from "./PostItemList";
import WhatsHappening from "./whats-happening";
import TuitList from "../REST_API/TuitList";

const HomeScreen = () => {
    return (
        <>
            <WhatsHappening/>
            <TuitList/>
            <PostList/>
        </>
    );
};

export default HomeScreen;
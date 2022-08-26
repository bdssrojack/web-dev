import React from "react";
import PostList from "./PostItemList";
import WhatsHappening from "./whats-happening";

const HomeScreen = () => {
    return (
        <>
            <WhatsHappening/>
            <PostList/>
        </>
    );
};

export default HomeScreen;
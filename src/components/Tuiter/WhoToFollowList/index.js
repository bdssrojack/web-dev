import React from "react";
import whos from "./who.json";
import WhoToFollowListItem from "./WhoToFollowListItem";

const whoToFollowList = () => {
    return (
        <ul className="list-group">
            <li className="list-group-item">Who to follow</li>
            {
            whos.map(who => {
                return (<WhoToFollowListItem who={who}/>);
            })
        }
        </ul>
    );
}

export default whoToFollowList;
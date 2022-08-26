import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import {useSelector} from "react-redux";

const WhoToFollowList = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const whos = useSelector((state) => state.who);

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

export default WhoToFollowList;
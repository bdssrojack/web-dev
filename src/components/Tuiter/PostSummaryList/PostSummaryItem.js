import React from "react";

const postSummaryItem = ({
                             post = {
                                 "topic": "Web Development",
                                 "userName": "ReactJS",
                                 "time": "2h",
                                 "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications orSPAs",
                                 "image": "../../../images/react-blue.png"
                             }

                         }) => {
    let topic = post.topic;
    let username = post.userName;
    let time = post.time;
    let image = post.image;
    let title = post.title;

    return (
        <li className="list-group-item">
        <div className="row">
        <div className="col-10">
            <p className="text-muted m-0">{topic}</p>
            <span className="fw-bold">{username}</span>
            <i className="fa fa-circle"></i>
            <span className="text-muted"> - {time}</span>
            <br/>
            <span className="fw-bold">{title}</span>
        </div>
        <div className="col-2 text-center">
            <img src={image} className="rounded " width={"70px"} height={"70px"}/>
        </div>
        </div>      
        </li>
);
}
export default postSummaryItem;
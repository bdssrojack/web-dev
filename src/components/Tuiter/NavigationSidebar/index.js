import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";


const NavigationSidebar = ({active = ''}) => {
    let label = useSelector(state => state.navi);
    const dispatch = useDispatch();

    return (
        <>
            <ul className="list-group">
                {/*<a className="list-group-item" href="">*/}
                {/*    <i className={`fab fa-twitter`}></i>*/}
                {/*</a>*/}
                <Link to="#"
                      className="list-group-item">
                    <i className="fab fa-twitter"></i>
                </Link>


                {/*<a  className={`list-group-item ${active === 'home' ? 'active' : ''}`} href="../HomeScreen/home.html">*/}
                {/*    <div className="row">*/}
                {/*        <i className="fas fa-home col-2"></i>*/}
                {/*        <span className="d-none d-xl-block col-8">Home</span>*/}
                {/*    </div>*/}
                {/*</a>*/}
                <Link to="/tuiter/home"
                      className={`list-group-item ${label === 'home' ? 'active' : ''}`}
                      onClick={() => dispatch({type: 'update-navi-label', label: 'home'})}>
                    <i className="fa fa-home"></i>
                    <span className="d-none d-xl-inline"> Home</span>
                </Link>

                <Link to="/tuiter/explore"
                      className={`list-group-item ${label === 'explore' ? 'active' : ''}`}
                      onClick={() => dispatch({type: 'update-navi-label', label: 'explore'})}>
                    <i className="fa fa-hashtag"></i>
                    <span className="d-none d-xl-inline"> Explore</span>
                </Link>

                <Link to="#"
                      className={`list-group-item ${label === 'notif' ? 'active' : ''}`}
                      onClick={() => dispatch({type: 'update-navi-label', label: 'notif'})}>
                    <i className="fa fa-bell"></i>
                    <span className="d-none d-xl-inline"> Notification</span>
                </Link>

                <Link to="#"
                      className={`list-group-item ${label === 'message' ? 'active' : ''}`}
                      onClick={() => dispatch({type: 'update-navi-label', label: 'message'})}>
                    <i className="fa fa-envelope"></i>
                    <span className="d-none d-xl-inline"> Message</span>
                </Link>

                <Link to="#"
                      className={`list-group-item ${label === 'bookmarks' ? 'active' : ''}`}
                      onClick={() => dispatch({type: 'update-navi-label', label: 'bookmarks'})}>
                    <i className="fa fa-bookmark"></i>
                    <span className="d-none d-xl-inline"> Bookmark</span>
                </Link>

                <Link to="#"
                      className={`list-group-item ${label === 'lists' ? 'active' : ''}`}
                      onClick={() => dispatch({type: 'update-navi-label', label: 'lists'})}>
                    <i className="fa fa-list"></i>
                    <span className="d-none d-xl-inline"> Lists</span>
                </Link>

                <Link to="/tuiter/profile"
                      className={`list-group-item ${label === 'profile' ? 'active' : ''}`}
                      onClick={() => dispatch({type: 'update-navi-label', label: 'profile'})}>
                    <i className="fa fa-user"></i>
                    <span className="d-none d-xl-inline"> Profile</span>
                </Link>

                <Link to="#"
                      className={`list-group-item ${label === 'more' ? 'active' : ''}`}
                      onClick={() => dispatch({type: 'update-navi-label', label: 'more'})}>
                    <i className="fas fa-ellipsis-h"></i>
                    <span className="d-none d-xl-inline"> More</span>
                </Link>
            </ul>
            <div className="d-grid mt-2">
                <a href="" className="btn btn-primary btn-block rounded-pill">Tweet</a>
            </div>
        </>
);

}
export default NavigationSidebar;
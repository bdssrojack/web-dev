import React from "react";
import {Link} from "react-router-dom";

const NavigationSidebar = ({active = 'explore'}) => {
    return (
        <>
            <ul className="list-group">
                {/*<a className="list-group-item" href="">*/}
                {/*    <i className={`fab fa-twitter`}></i>*/}
                {/*</a>*/}
                <Link to="/"
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
                      className={`list-group-item ${active === 'home' ? 'active' : ''}`}>
                    <i className="fa fa-home"></i>
                    <span className="d-none d-xl-inline"> Home</span>
                </Link>


                {/*<a className={`list-group-item ${active === 'explore' ? 'active' : ''}`}*/}
                {/*   href="../ExploreScreen/explore.html">*/}
                {/*    <div className="row">*/}
                {/*        <i className="fas fa-hashtag col-2"></i>*/}
                {/*        <span className="d-none d-xl-block col-8">Explore</span>*/}
                {/*    </div>*/}
                {/*</a>*/}
                <Link to="/tuiter/explore"
                      className={`list-group-item ${active === 'explore' ? 'active' : ''}`}>
                    <i className="fa fa-hashtag"></i>
                    <span className="d-none d-xl-inline"> Explore</span>
                </Link>

                <a className={`list-group-item ${active === 'notif' ? 'active' : ''}`} href="#">
                    <div className="row">
                        <i className="fas fa-bell col-2"></i>
                        <span className="d-none d-xl-block col-8">Notifications</span>
                    </div>
                </a>
                <a className={`list-group-item ${active === 'message' ? 'active' : ''}`} href="#">
                    <div className="row">
                        <i className="fas fa-envelope col-2"></i>
                        <span className="d-none d-xl-block col-8">Message</span>
                    </div>
                </a>
                <a className={`list-group-item ${active === 'bookmarks' ? 'active' : ''}`} href="#">
                    <div className="row">
                        <i className="fas fa-bookmark col-2"></i>
                        <span className="d-none d-xl-block col-8">Bookmarks</span>
                    </div>
                </a>
                <a className={`list-group-item ${active === 'lists' ? 'active' : ''}`} href="#">
                    <div className="row">
                        <i className="fas fa-list col-2"></i>
                        <span className="d-none d-xl-block col-8">Lists</span>
                    </div>
                </a>
                <a className={`list-group-item ${active === 'profile' ? 'active' : ''}`} href="#">
                    <div className="row">
                        <i className="fas fa-user col-2"></i>
                        <span className="d-none d-xl-block col-8">Profile</span>
                    </div>
                </a>
                <a className={`list-group-item ${active === 'more' ? 'active' : ''}`} href="#">
                    <div className="row">
                        <i className="fas fa-ellipsis-h col-2"></i>
                        <span className="d-none d-xl-block col-8">More</span>
                    </div>
                </a>
            </ul>
            <div className="d-grid mt-2">
                <a href="" className="btn btn-primary btn-block rounded-pill">Tweet</a>
            </div>
        </>
);

}
export default NavigationSidebar;
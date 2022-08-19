import React from "react";
import PostSummaryList from "../PostSummaryList";

const ExploreComponent = ({
                            tab='foryou'
                          }) => {
    return (
        <>
            <div className="row">
                <div className="col-10">
                    <input className="form-control rounded-pill "
                           placeholder="&#128270;   Search Tuiter"/>
                </div>
                <div className="col-2">
                    <a href="" title="explore settings">
                        <i className="fa fa-cog fa-2x"></i>
                    </a>
                </div>
            </div>

            <br/>

            <ul className="nav mb-2 nav-tabs">
                <li className="nav-item"><a className={`nav-link ${tab === 'foryou' ? 'active' : ""}`} href="#">For You</a></li>
                <li className="nav-item"><a className={`nav-link ${tab === 'trending' ? 'active' : ""}`} href="#">Trending</a></li>
                <li className="nav-item"><a className={`nav-link ${tab === 'covid19' ? 'active' : ""}`} href="#">Covid-19</a></li>
                <li className="nav-item"><a className={`nav-link ${tab === 'news' ? 'active' : ""}`} href="#">News</a></li>
                <li className="nav-item"><a className={`nav-link ${tab === 'sports' ? 'active' : ""}`} href="#">Sports</a></li>
                <li className="nav-item"><a className={`nav-link ${tab === 'entertainment' ? 'active' : ""}`} href="#">Entertainment</a></li>
            </ul>


            <div className="card text-white">
                <img src="../../images/falcon.png" className="card-img" alt={"image"}/>
                <div className="card-img-overlay position-absolute">
                    <h2>Falcon Heavy</h2>
                </div>
            </div>

            <PostSummaryList/>

        </>
    );
}

export default ExploreComponent;

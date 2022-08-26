import React from "react";
import NavigationSidebar from "./NavigationSidebar";
import WhoToFollowList from "./WhoToFollowList";
import {Outlet} from "react-router-dom";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";
import profileReducer from "./reducers/profile-reducer";
import naviBarReducer from "./reducers/navibar-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";

const reducers = combineReducers({
    who: whoReducer,
    tuits: tuitsReducer,
    prof: profileReducer,
    navi: naviBarReducer});
const store = createStore(reducers);

const Tuiter = () => {
    // const urlParams = new URL(window.location.href);
    // const pathName = urlParams?.pathname.match('[^/]+(?!.*/)')[0];
    // console.log("PathName: ", pathName);

    return (
        <Provider store={store}>
            <div className={"row mt-2"}>
                <div className="col-2 col-lg-1 col-xl-2">
                    <NavigationSidebar/>
                </div>
                <div className="col-10 col-lg-7 col-xl-6">
                    <Outlet/>{/*render any of the components defined under the Tuiter route defined in App.js*/}
                </div>
                <div className="d-none d-lg-block col-lg-4 col-xl-4">
                    <WhoToFollowList/>
                </div>
            </div>
        </Provider>
    );
};

export default Tuiter;
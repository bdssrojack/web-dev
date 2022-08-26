import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css';

import HelloWorld from "./components/HelloWorld.js";
import Labs from "./components/Labs";
import Tuiter from "./components/Tuiter";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomeScreen from "./components/Tuiter/HomeScreen";
import ExploreComponent from "./components/Tuiter/ExploreScreen/ExploreComponent";
import ProfileComponent from "./components/Tuiter/ProfileScreen"
import EditProfileComponent from "./components/Tuiter/ProfileScreen/editProfileComponent";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/">
                        <Route index element={<HelloWorld/>}></Route>
                        <Route path="/hello" exact={true} element={<HelloWorld/>}>
                        </Route>
                        <Route path="/labs" exact={true} element={<Labs/>}>
                        </Route>
                        <Route path="tuiter"
                               element={<Tuiter/>}>
                            <Route index path={"home"}
                                   element={<HomeScreen/>}/>
                            <Route path="explore"
                                   element={<ExploreComponent/>}/>
                            <Route path={"profile"}
                                   element={<ProfileComponent/>}/>
                            <Route path={"editProfile"}
                                   element={<EditProfileComponent/>}/>
                        </Route>
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;

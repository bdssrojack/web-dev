import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css'
// import 'font-awesome/css/font-awesome.min.css';

import HelloWorld from "./components/HelloWorld.js";
import Labs from "./components/Labs";
import Tuiter from "./components/Tuiter";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomeScreen from "./components/Tuiter/HomeScreen";
import ExploreScreen from "./components/Tuiter/ExploreScreen";

function App() {
  return (
      <BrowserRouter>
          <div className="container">
                  <Routes>
                      <Route path="/" element={<HelloWorld/>}></Route>
                      <Route path="/hello" exact={true} element={<HelloWorld/>}>
                      </Route>
                      <Route path="/labs" exact={true} element={<Labs/>}>
                      </Route>
                      <Route path="/tuiter" exact={true} element={<Tuiter/>}>
                      </Route>
                      <Route path={"/tuiter/home"} element={<HomeScreen/>}></Route>
                      <Route path={"/tuiter/explore"} element={<ExploreScreen/>}></Route>
                  </Routes>
          </div>
  </BrowserRouter>
  );
}

export default App;

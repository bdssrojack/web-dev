import React from "react";
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";
import hello from "./reducers/hello";
import HelloReduxExampleComponent from "./hello-redux-example-component";
import todos from "./reducers/todos-reducer";//reducer的名字一定要和consumer里的匹配，import的名字可以和export的不一样
import Todos from "./todos-component";

const reducers = combineReducers({hello, todos}); //也可以写成map的形式：{hello: helloReducer, todos: todoReducer(export本来的名字)}
//但无论哪种写法都要在相应component中的useSelector里选择正确的name field
const store = createStore(reducers);

const ReduxExamples = () => {
    return(
        <Provider store={store}>
            <div>
                <h2>Redux Examples</h2>
                <Todos/>
                <HelloReduxExampleComponent/>
            </div>
        </Provider>

    );
};

export default ReduxExamples;
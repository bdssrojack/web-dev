import React from "react";
import {Link} from "react-router-dom";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput/ConditionalOutput";
import TodoList from "./Todo/TodoList";
import ReduxExamples from "./redux-examples";

const Labs = () => {
    return (
        <>
            <h1>Labs</h1>
            <Link to="/hello">
                Hello
            </Link> |
            <Link to="/tuiter">
                Tuiter
            </Link>
            <div>
                <h1>Labs</h1>
                <ReduxExamples/>
                <TodoList/>
                <ConditionalOutput/>
                <Styles/>
                <Classes/>
            </div>
        </>

    )
};

export default Labs;
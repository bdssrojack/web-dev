import React from "react";
import {Link} from "react-router-dom"

const HelloWorld = () => {
    return(
        <>
            <h1>Hello World!</h1>
            <Link to={"/labs"}>Labs</Link>|<Link to={"/tuiter/home"}>Tuiter</Link>
        </>
    )
};

export default HelloWorld;
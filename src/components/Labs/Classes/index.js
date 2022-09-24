import React from "react";
import './index.css'

const Classes = () => {
    const color = 'wd-bg-green';
    const dangerous = true;

    return(
        <div>
            <h2>Classes</h2>
            <div className={`${dangerous ? `wd-bg-red` : color}
                            wd-fg-black wd-padding-10px`}>
                Dangerous background
            </div>
        </div>
    )
}
export default Classes;
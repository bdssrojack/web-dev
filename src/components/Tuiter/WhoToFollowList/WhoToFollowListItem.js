import React from "react";

const WhoToFollowListItem = ({
                                who={
                                    avatarIcon: '../../../images/nasa.png',
                                    userName: 'NASA',
                                    handle: 'NASA',
                                }
                             }) => {
    return(
        <>
            <li className="list-group-item">
                <div className="row">
                    <div className="col-2">
                        <img src={who.avatarIcon} width={"48"} className={"rounded-circle float-start"} alt={"avatar"}/>
                    </div>
                    <div className="col-6">
                        {who.userName}
                        <br/>
                            <span>@{who.handle}</span>
                    </div>
                    <div className="col-3">
                        <button className="btn btn-primary btn-block rounded-pill">Follow</button>
                    </div>
                </div>
            </li>
        </>

    );
}

export default WhoToFollowListItem;
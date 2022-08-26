import React from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const ProfileComponent = () => {
    const myProfile = useSelector(state => state.prof);
    //const firstname = myProfile(store.getState());
    //console.log("MyProfile name: " + myProfile.firstName);
    return(
        <>
            <img src={myProfile.bannerPicture} width={'100%'} height={"200px"}/>
            <img src={myProfile.profilePicture} className={'rounded-circle'} width={"100px"}/>
            <Link to={"/tuiter/editProfile"}>
                <button className={'btn btn-primary'}>Edit Profile</button>
            </Link>
            <h5>{myProfile.firstName + " " + myProfile.lastName}</h5>
            <span>@{myProfile.handle}</span>
            <p>{myProfile.bio}</p>
            <div className={'row'}>
                <div className={'col'}>{myProfile.location}</div>
                <div className={'col'}>Born {myProfile.dateOfBirth}</div>
                <div className={'col'}>Joined {myProfile.dateJoined}</div>
            </div>
            <div className={'row'}>
                <div className={'col'}>{myProfile.followingCount} Following</div>
                <div className={'col'}>{myProfile.followersCount} Followers</div>
            </div>
        </>
    )


}

export default ProfileComponent;
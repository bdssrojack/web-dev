import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

const EditProfileComponent = () => {
    const myProfile = useSelector(state => state.prof);

    const dispatch = useDispatch();

    let[firstName, setFirstName] = useState(myProfile.firstName);
    let[lastName, setLastName] = useState(myProfile.lastName);
    let[bio, setBio] = useState(myProfile.bio);
    let[location, setLocation] = useState(myProfile.location);
    let[website, setWebsite] = useState(myProfile.website);
    let[dateOfBirth, setDateOfBirth] = useState(myProfile.dateOfBirth);

    const saveEdit = () => {
        dispatch({type: 'profile-edited',
            firstName: firstName, lastName: lastName,
            bio: bio, location: location, website: website,
            DOB: dateOfBirth});
    }


    return(
        <>
            <div className={'row'}>
                <div className={'col'}>
                    <Link to={'/tuiter/profile'}>
                        <i className={'fa fa-close fa-2x'}></i>
                    </Link>
                </div>
                <div className={'col'}><h5>Edit Profile</h5></div>
                <div className={'col'}>
                    <Link to={'/tuiter/profile'}>
                        <button className={'btn-primary'} onClick={saveEdit}>Save</button>
                    </Link>
                </div>
            </div>
            <div>
                <img src={myProfile.bannerPicture} width={'100%'} height={"200px"}/>
                <img src={myProfile.profilePicture} className={'rounded-circle'} width={"100px"}/>
            </div>
            <div className={'row'}>
                <div className={'form-group col'}>
                    <label htmlFor={"firstNameEditor"}>First Name</label>
                    <textarea value={firstName}
                              onChange={(event) => setFirstName(event.target.value)}
                              className={"form-control"}
                              id={'firstNameEditor'}></textarea>
                </div>
                <div className={'form-group col'}>
                    <label htmlFor={"lastNameEditor"}>Last Name</label>
                    <textarea value={lastName}
                              onChange={(event) => setLastName(event.target.value)}
                              className={"form-control"}
                              id={'lastNameEditor'}></textarea>
                </div>
            </div>
            <div className={'form-group col'}>
                <label htmlFor={"bioEditor"}>Bio</label>
                <textarea value={bio}
                          onChange={(event) => setBio(event.target.value)}
                          className={"form-control"}
                          id={'bioEditor'}></textarea>
            </div>
            <div className={'row'}>
                <div className={'form-group col'}>
                    <label htmlFor={"locationEditor"}>Location</label>
                    <textarea value={location}
                              onChange={(event) => setLocation(event.target.value)}
                              className={"form-control"}
                              id={'locationEditor'}></textarea>
                </div>
                <div className={'form-group col'}>
                    <label htmlFor={"DOBEditor"}>Date of Birth</label>
                    <textarea value={dateOfBirth}
                              onChange={(event) => setDateOfBirth(event.target.value)}
                              className={"form-control"}
                              id={'DOBEditor'}></textarea>
                </div>
            </div>
            <div className={'form-group col'}>
                <label htmlFor={"websiteEditor"}>Website</label>
                <textarea value={website}
                          onChange={(event) => setWebsite(event.target.value)}
                          className={"form-control"}
                          id={'websiteEditor'}></textarea>
            </div>

        </>
    )
}

export default EditProfileComponent;
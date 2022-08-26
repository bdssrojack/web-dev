import profileData from "../data/profile-data";

const profileReducer = (state = profileData, action) => {
    switch (action.type){
        case 'profile-edited' :
            state.firstName = action.firstName;
            state.lastName = action.lastName;
            state.bio = action.bio;
            state.location = action.location;
            state.website = action.website;
            state.dateOfBirth = action.DOB;
            return state;
        default:
            return state;
    }
}

export default profileReducer;
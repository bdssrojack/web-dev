// import tuits from "../data/posts.json"
import {DELETE_TUIT, FIND_ALL_TUITS, CREATE_TUIT, UPDATE_TUIT} from "../../../actions/tuits_actions";

const tuitsReducer = (state = [], action) => {
    switch (action.type) {
        case FIND_ALL_TUITS:
            return action.tuits;
        case DELETE_TUIT:
            return state.filter(tuit => tuit._id !== action.tuit._id);
        case CREATE_TUIT:
            return [
                ...state,
                action.newTuit
            ];
        case UPDATE_TUIT:
            return state.map(
                tuit => tuit._id === action.tuit._id ? action.tuit : tuit
            );
        case 'create-tuit':
            const newTuit = {
                _id: (new Date()).getTime() + '',
                avatar: "../../../images/falcon.png",
                userName: "Elon Musk",
                handle: "elonmusk",
                time: (new Date()).getDate() + "",
                title: "",
                image: "",
                essayTitle: "",
                essayContent: action.tuit,
                comment: 0, retweet: 0, like: 0, liked: false
            }
            console.log(newTuit._id + newTuit.liked);
            return [newTuit, //append new tuit at beginning of array of tuit
                ...state, //copy old tuits
            ];
        case 'delete-tuit':
            return state.filter(
                post => post._id !== action.post._id);
        case 'like-tuit':
            return state.map(tuit => {
                if (tuit._id === action.tuit._id) {
                    if (tuit.liked === true) {
                        tuit.liked = false;
                        tuit.like--;
                    } else {
                        tuit.liked = true;
                        tuit.like++;
                    }
                    console.log(tuit.like);
                    console.log(tuit.liked);
                    return tuit;
                }else{
                    return tuit;
                }

            });
        default:
            return state;
    }
}

export default tuitsReducer;
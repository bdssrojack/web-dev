import tuits from "../data/posts.json"

const tuitsReducer = (state = tuits, action) => {
    switch (action.type) {
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
            return tuits
    }
}

export default tuitsReducer;
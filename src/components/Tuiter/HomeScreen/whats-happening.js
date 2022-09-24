import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {createTuit} from "../../../actions/tuits_actions";

const WhatsHappening = () => {
    // let [whatsHappening, setWhatsHappening] = useState('');
    const [newTuit, setNewTuit] = useState({tuit: 'New tuit'});
    const dispatch = useDispatch();

    const tuitClickHandler = () => {
        console.log(newTuit.tuit);
        // dispatch({type: 'create-tuit', tuit: whatsHappening});
        createTuit(dispatch, newTuit);
    }

    return (
        <>
            {/*<textarea value={whatsHappening} onChange={(event) =>*/}
            {/*setWhatsHappening(event.target.value)}>*/}
            {/*</textarea>*/}
            <textarea className="form-control w-75"
                      onChange={(e) =>
                          setNewTuit({...newTuit,
                              tuit: e.target.value})}></textarea>
            <button onClick={tuitClickHandler}>Tuit</button>
        </>
    )
}

export default WhatsHappening;
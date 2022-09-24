import {useEffect} from "react";
import {useDispatch} from "react-redux";
import { FIND_ALL_TUITS} from "../../../actions/tuits_actions";
import * as service from "../../../services/tuits-service";

const TuitList = () => {
    const dispatch = useDispatch();
    // useEffect(async () => findAllTuits(dispatch), []);
    useEffect(() => {
        async function findAllTuits(dispatch) {
            const tuits = await service.findAllTuits();
            dispatch({
                type: FIND_ALL_TUITS,
                tuits
            })
        }
        findAllTuits(dispatch);
    })
    // return;
}
export default TuitList;
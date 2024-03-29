import {useDispatch} from "react-redux";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    const likeTuit = () => {
        dispatch({type: 'like-tuit', tuit});
    };

    return (
        <>
            <span onClick={likeTuit}>
                {
                    tuit.liked &&
                    <i className="fas fa-heart me-1" style={{color: 'red'}}></i>}
                {
                    !tuit.liked &&
                    <i className="far fa-heart me-1"></i>
                }
                {tuit.like}
            </span>

        </>
    )
}

export default TuitStats;
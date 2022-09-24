import React from "react";
import {useDispatch} from "react-redux";
// import TuitStats from "./tuit-stats";
import {deleteTuit, updateTuit} from "../../../actions/tuits_actions";

const PostItem = ({
                      post = {
                          avatar: "../../images/falcon.png",
                          userName: "Elon Musk",
                          handle: "elonmusk",
                          time: "23h",
                          title: "Amazing show about @Inspiration4x mission!",
                          image: "../../images/spaceman.png",
                          essayTitle: "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
                          essayContent: "From training to launch to landing,this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space. &#128279; netflix.com",
                          comment: 0, retweet: 0, likes: 0, liked: false
                      }
                  }) => {
    let avatar = post.avatar;
    let username = post.userName;
    let handle = post.handle;
    let time = post.time;
    let title = post.title;
    let image = post.image;
    let essayTitle = post.essayTitle;
    // let essayContent = post.essayContent;
    let essayContent = post.tuit;
    // let comment = post.comment;
    // let retweet = post.retweet;
    // let like = post.likes;
    //let liked = post.liked;
    //const _id = post._id;

    const dispatch = useDispatch();
    // const deleteTuit = (post) => {
    //     dispatch({type: 'delete-tuit', post});
    //     console.log("deleting post: "+post.essayContent);
    // };

    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-1">
                    <img src={avatar} className="rounded-circle" height={"50px"} width={"50px"} alt={"avatar"}/>
                </div>
                <div className="col-11">
                    <i onClick={() => deleteTuit(dispatch, post)}
                       className="fas fa-remove fa-pull-right"></i>

                    <span className="fw-bold">{username}</span>
                    <img src="../../images/verified.png" height={"15px"} width={"15px"} alt={"verified"}/>
                    <span className="text-muted">@{handle} - {time}</span><br/>
                    <span>{title}</span>
                    <div className="card">
                        <img src={image} className="card-img-top" alt={"cardImage"}/>
                        <div className="card-body">
                            <h6 className="card-title">{essayTitle}</h6>
                            <p className="card-text">{essayContent}</p>
                        </div>
                    </div>

                    <div className="row">
                        {/*<div className="col-3">*/}
                        {/*    <span className="text-muted">&#128172; {comment}</span>*/}
                        {/*</div>*/}
                        {/*<div className="col-3">*/}
                        {/*    <span className="text-muted">&#8634; {retweet}</span>*/}
                        {/*</div>*/}
                        {/*<div className="col-3">*/}
                        {/*    <span className="text-muted">&#9825; {like}</span>*/}
                        {/*</div>*/}
                        {/*<div className="col-3">*/}
                        {/*    <span className="text-muted">&#8682;</span>*/}
                        {/*</div>*/}
                        {/*<TuitStats tuit={post}></TuitStats>*/}
                        Likes: {post.likes}
                        <i onClick={() => updateTuit(dispatch, {
                            ...post,
                            likes: post.likes + 1
                        })} className="far fa-thumbs-up ms-2"></i>
                    </div>

                </div>
            </div>
        </li>
    )
}

export default PostItem;
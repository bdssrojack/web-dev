import postSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.js";

const PostSummaryList = () => {
return(`
    <ul class="list-group">
        ${
            posts.map(post => {
                return(postSummaryItem(post));
            }).join('')
        }
    </ul>
`);
}

export default PostSummaryList;
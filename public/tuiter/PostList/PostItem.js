const PostItem = (post) => {
    let avatar = post.avatar;
    let username = post.userName;
    let handle = post.handle;
    let time = post.time;
    let title = post.title;
    let image = post.image;
    let essayTitle = post.essayTitle;
    let essayContent = post.essayContent;
    let comment = post.comment;
    let retweet = post.retweet;
    let like = post.like;

    return(`
        <li class="list-group-item">
            <div class="row">
                <div class="col-1">
                    <img src=${avatar} class="rounded-circle" style="width: 50px; height: 50px">
</div>
                <div class="col-11">
                    <span class="fw-bold">${username}</span>
                    <img src="../../images/verified.png" style="height: 15px; width: 15px">
                    <span class="text-muted">@${handle} - ${time}</span><br>
                    <span>${title}</span>
                    <div class="card">
                        <img src=${image} class="card-img-top">
                        <div class="card-body">
                            <h6 class="card-title">${essayTitle}</h6>
                            <p class="card-text">${essayContent}</p>
</div>
                    
</div>
                    
                    <div class="row">
                        <div class="col-3">
                            <span class="text-muted">&#128172; ${comment}</span>
</div>
                        <div class="col-3">
                            <span class="text-muted">&#8634; ${retweet}</span>
</div>
                        <div class="col-3">
                            <span class="text-muted">&#9825; ${like}</span>
</div>
                        <div class="col-3">
                            <span class="text-muted">&#8682;</span>
</div>
</div>
                    
</div>
</div>
</li>
    `)
}

export default PostItem;
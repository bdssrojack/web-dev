const postSummaryItem = (post) => {
    let topic = post.topic;
    let username = post.userName;
    let time = post.time;
    let image = post.image;
    let title = post.title;

    return(`
        <li class="list-group-item">
        <div class="row">
        <div class="col-10">
            <p class="text-muted m-0">${topic}</p>
            <span class="fw-bold">${username}</span>
            <i class="fa fa-circle"></i>
            <span class="text-muted"> - ${time}</span>
            <br>
            <span class="fw-bold">${title}</span>
        </div>
        <div class="col-2">
            <img src=${image} class="rounded" style="height: 70px; width: 70px">
        </div>
        </div>      
        </li>`);
}
export default postSummaryItem;
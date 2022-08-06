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
            <span class="text-muted">${topic}</span><br>
            <span class="fw-bold">${username}  <i class="fa fa-circle"></i></span>
            <span class="text-muted"> - ${time}</span><br>
            <span class="fw-bold">${title}</span>
        </div>
        <div class="col-2">
            <img src=${image} class="rounded" style="height: 70px; width: 70px">
        </div>
</div>
        
            
        </li>
    `);
}
export default postSummaryItem;
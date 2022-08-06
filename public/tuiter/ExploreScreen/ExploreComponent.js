import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
    return (`
<div class="row">
<!-- search field and cog -->
    <div class="col-10">
        <input class="input-control rounded-pill"
               placeholder="    Search Tuiter">
    </div>
    <div class="col-2">
        <a href="explore-settings.html" title="explore settings" >
            <i class="fa fa-cog fa-2x"></i>
        </a>
    </div>
</div>


<ul class="nav mb-2 nav-tabs">
<!-- tabs -->
    <li class="nav-item"><a class="nav-link active" href="#">For You</a></li>
    <li class="nav-item"><a class="nav-link " href="#">Trending</a></li>
    <li class="nav-item"><a class="nav-link " href="#">Covid-19</a></li>
    <li class="nav-item"><a class="nav-link " href="#">News</a></li>
    <li class="nav-item"><a class="nav-link " href="#">Sports</a></li>
    <li class="nav-item"><a class="nav-link " href="#">Entertainment</a></li>
</ul>


<!-- image with overlaid text -->
<div class="container">
    <img src="../../images/falcon.png" class="img-fluid" >
    <span class="overlay-text">Falcon Heavy<span>
</div>


${PostSummaryList()}
`);
}

export default ExploreComponent;

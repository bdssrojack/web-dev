import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
    return (`
<div class="row">
<!-- search field and cog -->
    <div class="col-10">
        <input class="form-control rounded-pill "
               placeholder="&#128270;   Search Tuiter">
    </div>
    <div class="col-2">
        <a href="explore-settings.html" title="explore settings" >
            <i class="fa fa-cog fa-2x"></i>
        </a>
    </div>
</div>

<br>
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
<div class="card text-white">
    <img src="../../images/falcon.png" class="card-img">
    <div class="card-img-overlay position-absolute" style="top: 400px">
<!--        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>-->
        <h2>Falcon Heavy</h2>
</div>
</div>


${PostSummaryList()}
`);
}

export default ExploreComponent;

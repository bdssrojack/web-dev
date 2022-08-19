const NavigationSidebar = (active) => {

    return (`
    <ul class="list-group">
        <a class="list-group-item" href="">
            <i class="fab fa-twitter"></i>
        </a>
        <a class="list-group-item ${active === 'home' ? 'active' : ''}" href="../HomeScreen/home.html">
            <div class="row">
                <i class="fas fa-home col-2"></i>
                <span class="d-none d-xl-block col-8">Home</span>
            </div>
        </a>
        <a class="list-group-item ${active === 'explore' ? 'active' : ''}" href="../ExploreScreen/explore.html">
            <div class="row">
                <i class="fas fa-hashtag col-2"></i>
                <span class="d-none d-xl-block col-8">Explore</span>
            </div>
        </a>
        <a class="list-group-item ${active === 'notif' ? 'active' : ''}" href="#">
            <div class="row">
                <i class="fas fa-bell col-2"></i>
                <span class="d-none d-xl-block col-8">Notifications</span>
            </div>
        </a>
        <a class="list-group-item ${active === 'messages' ? 'active' : ''}" href="#">
            <div class="row">
                <i class="fas fa-envelope col-2"></i>
                <span class="d-none d-xl-block col-8">Message</span>
            </div>
        </a>
        <a class="list-group-item ${active === 'bookmarks' ? 'active' : ''}" href="#">
            <div class="row">
                <i class="fas fa-bookmark col-2"></i>
                <span class="d-none d-xl-block col-8">Bookmarks</span>
            </div>
        </a>
        <a class="list-group-item ${active === 'lists' ? 'active' : ''}" href="#">
            <div class="row">
                <i class="fas fa-list col-2"></i>
                <span class="d-none d-xl-block col-8">Lists</span>
            </div>
        </a>
        <a class="list-group-item ${active === 'profile' ? 'active' : ''}" href="#">
            <div class="row">
                <i class="fas fa-user col-2"></i>
                <span class="d-none d-xl-block col-8">Profile</span>
            </div>
        </a>
        <a class="list-group-item ${active === 'more' ? 'active' : ''}" href="#">
            <div class="row">
                <i class="fas fa-ellipsis-h col-2"></i>
                <span class="d-none d-xl-block col-8">More</span>
            </div>
        </a>
    </ul>
    <div class="d-grid mt-2">
        <a href="" class="btn btn-primary btn-block rounded-pill">Tweet</a>
    </div>
`);

}
export default NavigationSidebar;
const NavigationSidebar = (active) => {
    let home = active === 'home' ? "<a class=\"list-group-item active\" href=\"../HomeScreen/home.html\">\n" +
        "<div class=\"row\">\n" +
        "<i class=\"fas fa-home col-2\"></i>\n" +
        "<span class=\"d-none d-xl-block col-8\">Home</span>\n" +
        "</div>\n" +
        "</a>" : "<a class=\"list-group-item\" href=\"../HomeScreen/home.html\">\n<div class=\"row\">\n <i class=\"fas fa-home col-2\"></i>\n<span class=\"d-none d-xl-block col-8\">Home</span>\n</div>\n</a>";

    let explore = active === 'explore' ? "<a class=\"list-group-item active\" href=\"../ExploreScreen/explore.html\">\n<div class=\"row\">\n<i class=\"fas fa-hashtag col-2\"></i>\n<span class=\"d-none d-xl-block col-8\">Explore</span>\n </div>\n</a>"
        : "<a class=\"list-group-item\" href=\"../ExploreScreen/explore.html\">\n                    <div class=\"row\">\n                        <i class=\"fas fa-hashtag col-2\"></i>\n                        <span class=\"d-none d-xl-block col-8\">Explore</span>\n                    </div>\n        </a>";

    let notif = active === 'notification' ? "<a class=\"list-group-item active\" href=\"\">\n                    <div class=\"row\">\n                        <i class=\"fas fa-bell col-2\"></i>\n                        <span class=\"d-none d-xl-block col-8\">Notifications</span>\n                    </div>\n                </a>"
        : "<a class=\"list-group-item\" href=\"\">\n                    <div class=\"row\">\n                        <i class=\"fas fa-bell col-2\"></i>\n                        <span class=\"d-none d-xl-block col-8\">Notifications</span>\n                    </div>\n                </a>";

    let message = active === 'messages' ? "<a class=\"list-group-item active\" href=\"\">\n                    <div class=\"row\">\n                        <i class=\"fas fa-envelope col-2\"></i>\n                        <span class=\"d-none d-xl-block col-8\">Messages</span>\n                    </div>\n                </a>"
        : "<a class=\"list-group-item\" href=\"\">\n                    <div class=\"row\">\n                        <i class=\"fas fa-envelope col-2\"></i>\n                        <span class=\"d-none d-xl-block col-8\">Messages</span>\n                    </div>\n                </a>";

    let bookmarks = active === 'bookmarks' ? "<a class=\"list-group-item active\" href=\"\">\n                    <div class=\"row\">\n                        <i class=\"fas fa-bookmark col-2\"></i>\n                        <span class=\"d-none d-xl-block col-8\">BookMarks</span>\n                    </div>\n                </a>"
        : "<a class=\"list-group-item\" href=\"\">\n                    <div class=\"row\">\n                        <i class=\"fas fa-bookmark col-2\"></i>\n                        <span class=\"d-none d-xl-block col-8\">BookMarks</span>\n                    </div>\n                </a>";

    let lists = active === 'lists' ? "<a class=\"list-group-item active\" href=\"\">\n                    <div class=\"row\">\n                        <i class=\"fas fa-list col-2\"></i>\n                        <span class=\"d-none d-xl-block col-8\">Lists</span>\n                    </div>\n                </a>"
        : "<a class=\"list-group-item\" href=\"\">\n                    <div class=\"row\">\n                        <i class=\"fas fa-list col-2\"></i>\n                        <span class=\"d-none d-xl-block col-8\">Lists</span>\n                    </div>\n                </a>";

    let profile = active === 'profile' ? "<a class=\"list-group-item active\" href=\"\">\n                    <div class=\"row\">\n                        <i class=\"fas fa-user col-2\"></i>\n                        <span class=\"d-none d-xl-block col-8\">Profile</span>\n                    </div>\n                </a>"
        : "<a class=\"list-group-item\" href=\"\">\n                    <div class=\"row\">\n                        <i class=\"fas fa-user col-2\"></i>\n                        <span class=\"d-none d-xl-block col-8\">Profile</span>\n                    </div>\n                </a>";

    let more = active === 'more' ? "<a class=\"list-group-item active\" href=\"\">\n                    <div class=\"row\">\n                        <i class=\"fas fa-ellipsis-h col-2\"></i>\n                        <span class=\"d-none d-xl-block col-8\">More</span>\n                    </div>\n                </a>"
        : "<a class=\"list-group-item\" href=\"\">\n                    <div class=\"row\">\n                        <i class=\"fas fa-ellipsis-h col-2\"></i>\n                        <span class=\"d-none d-xl-block col-8\">More</span>\n                    </div>\n                </a>";

    return (`
    <ul class="list-group">
        <a class="list-group-item" href="">
            <i class="fab fa-twitter"></i>
        </a>
   
         ${home}
         ${explore}
         ${notif}
         ${message}
         ${bookmarks}
         ${lists}
         ${profile}
         ${more}
<!-- continue the rest of the list -->
    </ul>
    <div class="d-grid mt-2">
        <a href="" class="btn btn-primary btn-block rounded-pill">Tweet</a>
    </div>
`);

}
export default NavigationSidebar;
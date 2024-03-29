import NavigationSidebar from "../NavigationSidebar";
import PostSummaryList from "../PostSummaryList";
import PostList from "../PostList";

const init = () => {
    $('#wd-home').append(`
        <div class="row mt-2">
            <div class="col-2 col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-2">
                ${NavigationSidebar('home')}
            </div>
            
            <div class="col-6 col-xxl-7 col-xl-6 col-lg-7 col-md-10 col-sm-10">
            ${PostList()}
            </div>
            
            <div class="col4 col-xxl-3 col-xl-4 col-lg-4 d-none d-lg-block">
            ${PostSummaryList()}
            </div>
        </div>
    `)
}
$(init);
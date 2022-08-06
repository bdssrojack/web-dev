const WhoToFollowListItem = (who) => {
    return(`
        <li class="list-group-item">
            <div class="row">
                <div class="col-2">
                    <img src=${who.avatarIcon} style="border-radius: 50%; width: 40px; height: 40px">
                </div>
                <div class="col-6">
                     ${who.userName}
                     <br>
                      <span>@${who.handle}</span>
                </div>
                <div class="col-3">
                    <button class="btn btn-primary btn-block rounded-pill">Follow</button>
                </div>
            </div>
        </li>
    `);
}

export default WhoToFollowListItem;
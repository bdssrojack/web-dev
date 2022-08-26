const initialBar = '';

const naviBarReducer = (state = initialBar, action) => {
    switch (action.type){
        case 'update-navi-label':
            state = action.label;
            return state;
        default:
            return state
    }
}

export default naviBarReducer;
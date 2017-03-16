export default function(state = {title: "Loading"}, action) {
    switch(action.type) {
        case 'BOOK_SELECTED':
        return action.payload;
    }
    return state;
}

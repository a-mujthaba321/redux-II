
export function selectBook(book){
    //this is an action creator. it needs to return an action
    //an action should have a type property

    return {
        type: 'SELECT_BOOK',
        payload: book

    };
}
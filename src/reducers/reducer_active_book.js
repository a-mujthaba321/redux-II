//state argument is not application state
//only the state this reducer is reposnible for
export default function (state=null, action) {

    switch(action.type){
        case('SELECT_BOOK'):
            return action.payload;
        default:
             return state;
    }
} 
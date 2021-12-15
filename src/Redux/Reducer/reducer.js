function reducer (state = [], action) {
    switch (action.type) {
        case 'ADD_BOOK':
            // return [...state, {...action.payload}];
            return action.payload;
        case 'SUBMIT_BOOK': 
            return [...state, {...action.payload}];   
           default:
               return state 
    }
       
}

export default reducer;
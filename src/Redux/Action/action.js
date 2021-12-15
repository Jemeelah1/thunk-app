let addBookAction = (payload) => {
    return{
        type: 'ADD_BOOK',
        payload
    }
}
let deleteBookAction = (payload) => {
    return{
        type: 'DELETE_BOOK',
        payload
    }
}
// function loadBooks () {
//     return function (dispatch) {
//         return fetch('https://fakestoreapi.com/products')
//             .then(response => response.json())
//             .then(data => console.log(data))
//         .catch(e => console.error(e, 'load books failed'));
//     }
// }
function addOnButtonAction (payload) {
    return {
        type: 'SUBMIT_BOOK',
        payload
    }
}
export {addBookAction, 
    deleteBookAction,
    addOnButtonAction
    // loadBooks
};

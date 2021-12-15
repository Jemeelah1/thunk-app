import { createStore, applyMiddleware,compose } from "redux";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from 'redux-thunk';
import reducerFunc from "../Reducer";

const configStore = (initialState) => {
    const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return createStore(reducerFunc,
        initialState,
        composeEnhancer(applyMiddleware(thunk,reduxImmutableStateInvariant()) )
        );
}

export default configStore;
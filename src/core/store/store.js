import {
    createStore,
    applyMiddleware,
    compose,
     combineReducers
} from 'redux';

import thunk from 'redux-thunk';
import {
    initialState
} from './../state/state.js'

const reducers = (state = initialState, action) => {
      if (action.type == 'spinner') {

        return {
            ...state,
            spinner:action.spinner
        }

    }
    else if (action.type == 'mode') {

        return {
            ...state,
            mode:action.mode
        }

    }
    
    else if (action.type == 'loadingPage') {

        return {
            ...state,
            loadingPage:action.loadingPage
        }

    }
    
    else if (action.type == 'nav') {

        return {
            ...state,
            nav:action.nav
        }

    }
    else if (action.type == 'message') {

        return {
            ...state,
            message:action.message
        }

    }
    else if (action.type == 'world') {

        return {
            ...state,
            world:action.world
        }

    } 
    
    else {
        return state
    }

}


const root=combineReducers({
    reducers:reducers,
});
export default createStore(root, compose(applyMiddleware(thunk)))
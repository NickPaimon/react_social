import {setAuthThunk} from "./auth-reducer";

const SET_APP = 'SET_APP';

let initialState = {
    initialized: false,
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_APP:
            return {
                ...state,
                initialized: true
            };
        default:
            return state
    }
};

const initializedSuccess = () => ({type: SET_APP});

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(setAuthThunk());
    Promise.all([promise]).then(() => {
        dispatch(initializedSuccess());
    })
};

export default appReducer;
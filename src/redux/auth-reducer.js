import {authMe} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const SHOW_WRONG_EMAIL_OR_PASSWORD = 'SHOW_WRONG_EMAIL_OR_PASSWORD';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
    correctPassword: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            };
        case SHOW_WRONG_EMAIL_OR_PASSWORD: {
            return {
                ...state,
                correctPassword: true
            }
        }

        default:
            return state;
    }
};

const setAuthUserData = (userId, email, login, isAuth, correctPassword) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth, correctPassword}
});
const showWrongEmailOrPassword = () => ({type: SHOW_WRONG_EMAIL_OR_PASSWORD});

export const setAuthThunk = () => async (dispatch) => {
    let response = await authMe.me();
    if (response.resultCode === 0) {
        let {id, email, login} = response.data;
        dispatch(setAuthUserData(id, email, login, true));

    }
};
export const loginThunkCreator = (values) => async (dispatch) => {
    let response = await authMe.login(values);
    if (response.resultCode === 0) {
        dispatch(setAuthThunk());
    } else {
        dispatch(showWrongEmailOrPassword());
    }
};
export const logout = () => async (dispatch) => {
    let response = await authMe.logout();

    if (response.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false, null));
    }
};

export default authReducer;



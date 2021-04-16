import {authMe, securityAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const SHOW_WRONG_EMAIL_OR_PASSWORD = 'SHOW_WRONG_EMAIL_OR_PASSWORD';
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS';

const initialState = {
    userId: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
    correctPassword: null, // should be inCorrect =)
    captchaUrl: null, // captcha is not required
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
            };
        }

        case GET_CAPTCHA_URL_SUCCESS: {
            return {
                ...state,
                captchaUrl: action.payload,
            };
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

const getCaptchaUrlSuccess = (captchaUrl) => ({
    type: GET_CAPTCHA_URL_SUCCESS,
    payload: (captchaUrl)
});


export const setAuthThunk = () => async (dispatch) => {
    const response = await authMe.me();
    if (response.resultCode === 0) {
        let {id, email, login} = response.data;
        //success, set auth data
        dispatch(setAuthUserData(id, email, login, true));

    }
};
export const loginThunkCreator = (values) => async (dispatch) => {
    const response = await authMe.login(values);
    if (response.resultCode === 0) {
        //success, set auth data
        dispatch(setAuthThunk());
    } else {
        if (response.resultCode === 10) {
            //Incorrect anti-bot symbols
            dispatch(getCaptchaUrl());
        }
        // show wrong email or pass
        dispatch(showWrongEmailOrPassword());
    }
};
export const logout = () => async (dispatch) => {
    const response = await authMe.logout();
    if (response.resultCode === 0) {
        // set auth data to null
        dispatch(setAuthUserData(null, null, null, false, null));
    }
};

export const getCaptchaUrl = () => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl();
    // get captcha url from server
    const captchaUrl = response.data.url;
    // set captcha url to state
    dispatch(getCaptchaUrlSuccess(captchaUrl));
};

export default authReducer;



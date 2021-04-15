import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const ADD_NEW_POST_TEXT = 'ADD-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likes: 1},
        {id: 2, message: 'It\'s my first post', likes: 3},
        {id: 3, message: 'It\'s my first post', likes: 3}
    ],
    newPostText: '',
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id: 5, message: state.newPostText, likes: 0}],
                newPostText: ''
            };

        case ADD_NEW_POST_TEXT :
            return {
                ...state,
                newPostText: action.newText
            };

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };

        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            };

        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            };

        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
              profile: {...state.profile, photos: action.photos}
            };

        default :
            return state;
    }
};

export let addPostActionCreator = () => ({type: ADD_POST});
export let addNewPostTextActionCreator = (text) => ({type: ADD_NEW_POST_TEXT, newText: text});
export let setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export let setUserStatus = (status) => ({type: SET_USER_STATUS, status});
export let deletePost = (postId) => ({type: DELETE_POST, postId});
export let savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})

export let getUserProfile = (userId) => async (dispatch) => {
    let response = await profileAPI.getUserProfile(userId);
    dispatch(setUserProfile(response.data));
};
export let getUserStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getUserStatus(userId);
    dispatch(setUserStatus(response.data));
};
export let updateUserStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0)
        dispatch(setUserStatus(status));
};
export let savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.uploadPhoto(file);
    if(response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
};

export let saveProfileData = (profileData) => async (dispatch, getState)  => {
    const userId = getState().auth.userId;
    let response = await profileAPI.saveProfile(profileData);
    if(response.data.resultCode === 0) {
        dispatch(getUserProfile(userId))
    }
};


export default profileReducer;
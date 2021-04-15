import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";



let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likes: 1},
                {id: 2, message: 'It\'s my first post', likes: 3},
                {id: 2, message: 'It\'s my first post', likes: 3}
            ],
            newPostText: 'new'
        },
        messagesPage: {
            messages: [
                {id: 1, message: 'Hi!'},
                {id: 2, message: 'Whats up?'},
                {id: 3, message: 'How is your it camasutra'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo yo '},
                {id: 6, message: 'pishov naher kozel!'}
            ],
            dialogs: [{id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Victor'},
                {id: 6, name: 'Valera'}
            ],
            newMessageText: 'mess'
        }
    },
    _callSubscriber() {
        console.log('hi !!!');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._callSubscriber(this._state);
    }

};



export default store;

















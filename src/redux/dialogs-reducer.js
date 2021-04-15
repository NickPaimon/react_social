const ADD_MESSAGE = 'ADD-MESSAGE';
const ADD_NEW_MESSAGE_TEXT = 'ADD-NEW-MESSAGE-TEXT';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return  {
                ...state,
                newMessageText: '',
                messages: [...state.messages, {id: 5, message: state.newMessageText}]
            };
        case ADD_NEW_MESSAGE_TEXT:
            return  {
                ...state,
                newMessageText: action.newText
            };
        default:
            return state;
    }
};


export let addMessageActionCreator = () => ({type: ADD_MESSAGE});
export let addNewMessageTextActionCreator = (newText) => ({type: ADD_NEW_MESSAGE_TEXT, newText: newText});

export default dialogsReducer;
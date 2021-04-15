import profileReducer, {addNewPostTextActionCreator, addPostActionCreator, deletePost} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likes: 1},
        {id: 2, message: 'It\'s my first post', likes: 3},
        {id: 3, message: 'It\'s my first post', likes: 3},
    ],
    newPostText: 'Write something you think about',
    profile: null,
    status: ''
};

test('new post should be added', () => {
    let action = addPostActionCreator();

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(4);
});

test('new post text should be changed', () => {
    let action = addNewPostTextActionCreator('test text');

    let newState = profileReducer(state, action);

    expect(newState.newPostText).toBe('test text');
});


test('post should be deleted', () => {
    let action = deletePost(1);

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(2);
});

import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = React.memo((props) => {


    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.addNewPostText(text);
    };

    let postElements = props.posts.map(p => <Post likes={p.likes} key={p.id.toString()} message={p.message}/>);
    return (
        <div className={s.my_posts_div}>
            <h2>My posts</h2>
            <div className={s.post_area}>
                <h3>Create a new post</h3>
                <textarea onChange={onPostChange} ref={newPostElement}
                          value={props.newPostText}
                          placeholder={'Write something you think about'}/>
                <button onClick={onAddPost}>Post</button>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    );

});

export default MyPosts;
import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../common/Preloader/Preloader";
import s from './Profile.module.css';

const Profile = (props) => {
    if(!props.profile) {
        return <Preloader />
    }

    return (
    <main>
      <ProfileInfo saveProfileData={props.saveProfileData} savePhoto={props.savePhoto} isOwner={props.isOwner} profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus}/>
      <MyPostsContainer />
        <div>
            <p className={s.contactsTitle}>Contacts: </p> {Object.keys(props.profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
        })}
        </div>
    </main>
  );
};

const Contact = ({contactTitle, contactValue}) => {
    return (
        <div>
            <p className={s.contacts}>{contactTitle}: {contactValue}</p>
        </div>
    )
};


export default Profile;
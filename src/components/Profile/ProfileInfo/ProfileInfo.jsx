import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import ava from '../../../assets/images/mainAvatar.png';
import ProfileStatusWithHooks from "../ProfileStatus/ProfileStatusWithHooks";
import ProfileDataAddInfo from "./ProfileDataAddInfo";


const ProfileInfo = (props) => {
    let [editMode, setEditMode] = useState(false);

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    };
    return (
        <div className={s.about}>
            <div className={s.image}>
                <img src={props.profile.photos.large || ava} alt="ava" className={s.mainPhoto}/>
                {props.isOwner && editMode && <input type={"file"}
                                         className={s.updatePhoto}
                                         onChange={onMainPhotoSelected}/>}


            </div>
            <div className={s.description}>
                { editMode
                    ? <ProfileDataAddInfo leaveEditMode={() => { setEditMode(false)}} saveProfileData={props.saveProfileData} profile={props.profile}/>
                    : <ProfileData goToEditMode={() => {setEditMode(true)}}
                                   profile={props.profile}
                                   isOwner={props.isOwner}
                                   status={props.status}
                                   updateUserStatus={props.updateUserStatus}/>}
            </div>


        </div>
    );
};

const ProfileData = ({profile, isOwner, goToEditMode, ...props}) => {
    return (
        <div>
            <div>
                <p className={s.profileTitles}>Full Name: <span className={s.profileInfo}>{profile.fullName}</span></p>
            </div>
            <div>
                <ProfileStatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus}/>
            </div>
            <div>
                <p className={s.profileTitles}>Looking for a job : <span className={s.profileInfo}>{profile.lookingForAJob ? "Yes" : "No"}</span></p>
            </div>
            <div>
                <p className={s.profileTitles}>My professional skills: <span className={s.profileInfo}>{profile.lookingForAJobDescription}</span></p>
            </div>
            <div>
                <p className={s.profileTitles}>About me: <span className={s.profileInfo}>{profile.aboutMe}</span></p>
            </div>
            <div>
                {isOwner && <button onClick={goToEditMode} >Add</button>}
            </div>
        </div>
    )
};

export default ProfileInfo;
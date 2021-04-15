import React, {useState} from 'react';
import s from './ProfileInfo.module.css';

const ProfileDataAddInfo = ({profile, saveProfileData, leaveEditMode}) => {
    let [fullName, setFullName] = useState(profile.fullName);
    let onNameChanged = (e) => {
      setFullName(e.currentTarget.value)
    };

    let [lookingFor, setLookingFor] = useState(profile.lookingForAJob);
    let onLookingChanged = (e) => {
      setLookingFor(e.target.value);
    };

    let [aboutMe, setAboutMe] = useState(profile.aboutMe);
    let onAboutMeChanged = (e) => {
        setAboutMe(e.currentTarget.value);
    };

    let [mySkills, setMySkills] = useState(profile.lookingForAJobDescription);
    let onMySkillsChange = (e) => {
        setMySkills(e.currentTarget.value);
    };


    let collectData = () => {
        let profileData = {
            aboutMe: aboutMe,
            lookingForAJob: lookingFor,
            lookingForAJobDescription: mySkills,
            fullName: fullName,
        };
        saveProfileData(profileData);
        leaveEditMode();
    };

  return (
      <div>
          <div>
              <p className={s.profileTitles}>Full Name:</p>
              <input className={s.infoInputs} type="text" value={fullName}
              onChange={onNameChanged}/>
          </div>
          <div>
              <p className={s.profileTitles}>Looking for a job : </p>
              <span onChange={onLookingChanged}>
                  <input type="radio" value={true}  defaultChecked={lookingFor === true} name="needJob"/>Yes
                  <input type="radio" value={false} defaultChecked={lookingFor === false} name="needJob"/>No
              </span>
          </div>
          <div>
              <p className={s.profileTitles}>My professional skills :</p>
              <input className={s.infoInputs} type="text" value={mySkills} onChange={onMySkillsChange}/>
          </div>
          <div>
              <p className={s.profileTitles}>About me:</p>
              <input className={s.infoInputs} type="text" value={aboutMe} onChange={onAboutMeChanged}/>
          </div>
          <div>
            <button onClick={collectData}>Save</button>
          </div>
      </div>
  )
};

export default ProfileDataAddInfo;
import React, {useState, useEffect} from 'react';
import s from './ProfileStatusWithHooks.module.css'

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
       setStatus(props.status);
    }, [props.status]);
    const activateMode = () => {
        setEditMode(true);
    };
    const deactivateMode = () => {
        setEditMode(false);
        props.updateUserStatus(status)
    };
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    };
    return (<div>
            { !editMode &&
            <div>
                <p className={s.status} onDoubleClick={activateMode}>Status: <span className={s.profileInfo}>{props.status || 'no-status'}</span></p>
            </div>
            }
            {editMode &&
            <div>
                <input
                        className={s.status_input}
                       onChange={onStatusChange}
                       value={status}
                       autoFocus={true}
                       type="text"
                       onBlur={deactivateMode}
                       />
            </div>
            }
        </div>
    )

};


export default ProfileStatusWithHooks;


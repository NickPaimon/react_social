import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "cd49187f-82a8-4960-90f6-9495d499b6b1"
    }
});


export const authMe = {
    me() {
        return instance.get('auth/me').then(responce => responce.data);
    },
    login(value) {
        return instance.post('auth/login',
            {
                email: value.email,
                password: value.password,
                rememberMe: true
            }).then(response => response.data);
    },
    logout() {
        return instance.delete('auth/login')
            .then(response => response.data);
    }
};

export const profileAPI = {
    getUserProfile(userId) {
        return instance.get('profile/' + userId);
    },
    getUserStatus(userId) {
        return instance.get('/profile/status/' + userId);
    },
    updateStatus(status) {
        return instance.put('/profile/status', {status: status});
    },
    uploadPhoto(file) {
        const formData = new FormData();
        formData.append('image', file)
        return instance.put('/profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profileData) {
        return instance.put('/profile', profileData);
    }
};


export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    unFollowUser(id)  {
        return instance.delete(`follow/${id}`)
            .then(responce => responce.data)
    },
    followUser(id)  {
        return instance.post(`follow/${id}`)
            .then(responce => responce.data);
    },
};


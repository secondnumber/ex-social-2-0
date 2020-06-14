import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {
    'API-KEY': 'b1990052-b902-4833-a74d-cf5897729da7',
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  addUser(userId) {
    return instance.post(`follow/${userId}`).then((response) => response.data);
  },
  deleteUser(userId) {
    return instance
      .delete(`follow/${userId}`)
      .then((response) => response.data);
  },
};

export const authAPI = {
  isAuthCurrentUser() {
    return instance.get(`auth/me`).then((response) => response.data);
  },
};

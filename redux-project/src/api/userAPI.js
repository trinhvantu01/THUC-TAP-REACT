import { axiosClient } from "./axiosClient";

const userApi = {
  getAll() {
    const url = `/users/list`;
    return axiosClient.get(url);
  },
  
  // add(users) {
  //   const url = `/users/add`;
  //   return axiosClientForm.post(url, users);
  // },

  // remove(id) {
  //   const url = `/users/${id}`;
  //   return axiosClient.delete(url);
  // },
  // update(id, data) {
  //   const url = `/users/${id}`;
  //   return axiosClient.put(url, data);
  // },
};
export default userApi;

//export thì modul khác có mới có thể sư dụng đc
//call đến api để lấy dl trả về

import axios from "axios";

export const api = axios.create({
  baseURL: "/api/v1/", 
});

export const userAuth = async (email, password, create) => {
  let response = await api.post(create ? "users/create/" : "users/login/", {
    email: email,
    password: password,
  });
  if (response.status === 201 || response.status === 200) {
    let { email, token } = response.data;
    localStorage.setItem("token", token);
    api.defaults.headers.common["Authorization"] = `Token ${token}`;
    return email;
  }
  alert(response.data);
  return null;
};

export const userConfirmation = async () => {
  let token = localStorage.getItem("token");
  if (token) {
    api.defaults.headers.common["Authorization"] = `Token ${token}`;
    let response = await api.get("users/");
    if (response.status === 200) {
      return response.data.email;
    }
    return null
  }
  return null;
};

export const userLogOut = async () => {
  let response = await api.post("users/logout/");
  if (response.status === 200) {
    localStorage.removeItem("token");
    delete api.defaults.headers.common["Authorization"];
    return null;
  }
  alert("Something went wrong and logout failed");
  return null
};
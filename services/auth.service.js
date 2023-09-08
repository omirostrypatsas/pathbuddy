import axios from 'axios';

const API_URL = "http://192.168.1.122:8081/api/auth"

const register = (email, password, firstname, lastname, dob, pronoun) => {
    console.log(email, password, firstname, lastname, dob, pronoun)
    return axios.post(API_URL + "signup", {
      email,
      password,
      firstname,
      lastname,
      dob,
      pronoun,
    });
  };

const login = (email, password) => {
    console.log('pelle m')
    console.log(email,password)
    return axios
        .post(API_URL + '/signin', {
            email,
            password,  
        })
        .then((response) => {
            console.log('alo')
            console.log(response.data)
            if (response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }

            return response.data;
        })
        .catch((error) => {
            if (error.response) {
                console.log(error.response);
                console.log("server responded");
              } else if (error.request) {
                console.log("network error");
              } else {
                console.log(error);
              }np
          });
}

const logout = () => {
    localStorage.removeItem("user");
  };

const AuthService = {
    login,
    register,
    logout
};

export default AuthService;
import axios from 'axios';

const login = (email, password) => {

    return axios
        .post('http://192.168.1.254:8080/api/auth/signin', {
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
}

const AuthService = {
    login
};

export default AuthService;

console.log(module)
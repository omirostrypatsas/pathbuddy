import axios from 'axios';

const login = (email, password) => {
    console.log('pelle m')
    return axios
        .post('http://192.168.1.98:8080/api/auth/signin', {
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
            console.log('Error:', error.message);
            throw error; // Re-throw the error to be caught by the caller, if needed
          });
}

const AuthService = {
    login
};

export default AuthService;

console.log(module)
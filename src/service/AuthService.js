import axios from 'axios';

class AuthService {
    static async login(email, password) {
        return axios.post('/login', { email, password });
    }

    static async signup({ name, email, password }) {
        return axios.post('/signup', { name, email, password });
    }

    static async logout() {
        return axios.post('/logout');
    }
}

export default AuthService;

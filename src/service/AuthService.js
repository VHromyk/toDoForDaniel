import $api from "../http";

class AuthService {
    static async login(email, password) {
        return $api.post('/login', { email, password });
    }

    static async signup({name, email, password}) {
        return $api.post('/signup', { name, email, password });
  }
  
    static async logout() {
        return $api.post('/logout');
    }
}


export default AuthService;
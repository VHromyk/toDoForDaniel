import { useState } from 'react';
import style from './LoginForm.module.css';
import loginUser from '../../redux/auth/auth-opetrations'

const LoginForm = () => {
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [token, setToken] = useState('');

  const handleSubmit = (e) => {
      e.preventDefault();

      if (email && password) {
          loginUser(email, password).then((res) => setToken(res.data))
      }
    
    setEmail('');
    setPassword('');
    }
    
    console.log(token);

  return (
      <div className={style.container}>
          <h2>Log In</h2>
          <form onSubmit={handleSubmit}>
              <div className={style.form_element}>
                  <label htmlFor="email">Email</label>
                  <input
                      type="email"
                      name="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                  />
              </div>
              <div className={style.form_element}>
                  <label htmlFor="password">Password</label>
                  <input
                      type="password"
                      name="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                  />
              </div>
              <div className={style.btn_container}>
              <button type="submit" className={style.form_submit_btn}>
                  Login
              </button>
              <a href="/signup" className={style.form_submit_btn}>
                      Create account
                      </a>
              </div>
          </form>
      </div>
  );
}


export default LoginForm;
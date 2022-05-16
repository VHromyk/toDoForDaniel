import { useState } from 'react';
import style from './LoginForm.module.css';

const LoginForm = ({onLogin}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();

    onLogin({ email, password })
    
    setEmail('');
    setPassword('');
  }

  return (
      <div className={style.container}>
          <h2>Please login</h2>
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
              <button type="submit" className={style.form_submit_btn}>
                  Reset
              </button>
              </div>
          </form>
      </div>
  );
}


export default LoginForm;
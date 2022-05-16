import { useState } from 'react';
import style from './SignUpForm.module.css'
import axios from 'axios'

const SignUpForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name && email && password) {

            const user = {
                name, email, password
            };

            axios.post('http://localhost:5000/users', user)

        }
      
      setName('');
        setEmail('');
        setPassword('');

        window.location='/user/1'
    };

    return (
        <div className={style.container}>
            <h2>Please Sign up</h2>
            <form className={style.form} onSubmit={handleSubmit}>
                <div className={style.form_element}>
                    <label htmlFor="name">Name</label>
                    <input
                        type="name"
                        name="name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
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
                    SignUp
                </button>
                <button type="reset" className={style.form_submit_btn}>
                    Cancel
                </button>
          </div>
            </form>
        </div>
    );
};

export default SignUpForm;

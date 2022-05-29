import { useState } from 'react';
import style from './SignUpForm.module.css'
import { connect } from 'react-redux';
import authOperations from '../../redux/auth/auth-opetrations'

const SignUpForm = ({onSignUp}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const credentionals = {
            name, email, password
        }

        onSignUp(credentionals);
    
      setName('');
        setEmail('');
        setPassword('');

        // window.location='/login'
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


// const mapDispatchToProps = {
//     onSubmit: authOperations.signUpUser,
// };

// It is the same like !!! =======>>>>>>

const mapDispatchToProps = (dispatch) => ({
    onSignUp: (data) => dispatch(authOperations.signUpUser(data)),
}); 

export default connect(null, mapDispatchToProps)(SignUpForm);

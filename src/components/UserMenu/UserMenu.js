import { connect } from 'react-redux';
import style from './UserMenu.module.css'
import authSelectors from '../../redux/auth/auth-selectors'
import authOperations from '../../redux/auth/auth-opetrations';

const UserMenu = ({ userName, onLogout }) => {
  const changeStr = (str) => {
    if (str) {
      return str[0].toUpperCase() + str.slice(1).toLowerCase();
    }
    return str;
  };

  return (
      <div className={style.container}>
          <div className={style.description}>
              Welcome, {changeStr(userName)}!
          </div>
          <button type="button" onClick={onLogout}>Logout</button>
      </div>
  );
}

const mapStateToProps = (state) => ({
  userName: authSelectors.userName(state)
})

const mapDispatchToProps = (dispatch) => ({
    onLogout: () => dispatch(authOperations.logoutUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
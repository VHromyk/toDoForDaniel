import { connect } from 'react-redux';
import style from './UserMenu.module.css'
import authSelectors from '../../redux/auth/auth-selectors'

const UserMenu = ({ userName }) => {
  const changeStr = (str) => {
    if (str) {
      return str[0].toUpperCase() + str.slice(1).toLowerCase();
    }
    return str;
  };

  return <div className={style.description}>Hello {changeStr(userName)}!</div>;
}

const mapStateToProps = (state) => ({
  userName: authSelectors.userName(state)
})

export default connect(mapStateToProps, null)(UserMenu);
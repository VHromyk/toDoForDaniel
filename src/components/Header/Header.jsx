import style from './Header.module.css'
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import { connect } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors'


const Header = ({ isAuthentificated }) => {
    return (
        <div className={style.header}>
            <a href="/user/1" className={style.logo}>
                TODOS
            </a>
            {isAuthentificated ? <UserMenu /> : <Navigation />}
        </div>
    );
};

const mapStateToProps = (state) => ({
    isAuthentificated: authSelectors.isAuthentificated(state),
});

export default connect(mapStateToProps, null)(Header);
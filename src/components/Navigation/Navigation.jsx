import style from './Navigation.module.css'

const Navigation = () => {
  return (
      <div className={style.nav_wrapper}>
          <a href="/login">Login</a>
          <a href="/signup">Sign up</a>
      </div>
  );
}

export default Navigation;
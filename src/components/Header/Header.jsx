import style from './Header.module.css'
import Navigation from '../Navigation/Navigation';


const Header = () => {
  return (
    <div className={style.header}>
      <a href="/user/1" className={style.logo}>TODOS</a>
      <Navigation />
    </div>
  )
}

export default Header;
import logo from '../Images/logo.png';
import bgFlag from '../Images/Bulgarian Flag.png';
import enFlag from '../Images/English Flag.png';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.mainHeader}>
      <Link to="/home"><img src={logo} alt="xallant logo" id={styles.headerLogo} /></Link>
      <ul className={styles.mainNavBar}>
        <li><Link to="/home">Начало</Link></li>
        <li><Link to="/services">Услуги</Link></li>
        <li><Link to="/projects">Проекти</Link></li>
        <li><Link to="/contacts">Контакти</Link></li>
        <ul id={styles.langButtons}>
          <ul id={styles.langFlags}>
            <li><Link to="/"><img src={bgFlag} alt="BGFlag" className={styles.langImage} /></Link></li>
            <li><Link to="/"><img src={enFlag} alt="ENFlag" className={styles.langImage} /></Link></li>
          </ul>
          <ul id={styles.langNames}>
            <li><Link to="/">BG</Link></li>
            <li><Link to="/">EN</Link></li>
          </ul>
        </ul>
      </ul>
    </header>
  )
}

export default Header;
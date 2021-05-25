import styles from './Footer.module.css';
import { Link } from 'react-router-dom';
import logo from '../Images/logo.png';

function Footer() {
    return (
        <footer className={styles.mainFooter}>
            <Link to="/home"><img src={logo} alt="xallant logo" id={styles.footerLogo} /></Link>
            <div id={styles.footerMainWrapper}>
                <div id={styles.footerInfoWrapper}>
                    <p>Адрес:<br />София, ул.Ст. Стамболийски 5</p>
                    <p>Телефон: +359 882210059 </p>
                    <p>Имейл: info@xallant.com</p>
                    <div id={styles.footerNavWrapper}>
                        <Link to="/projects">Отзиви</Link>
                        <Link to="/">Защита на лични данни</Link>
                    </div>
                </div>
                <p id={styles.rights}>© 2021 Ксалант. Всички права запазени.</p>
            </div>
        </footer>
    )
}

export default Footer;
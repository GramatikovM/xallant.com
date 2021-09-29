import styles from './servicePage.module.css';
import logoDesign from '../Images/LogoDesign.png';

function ServiceC() {
    return (
        <div className={styles.serviceCard} id={styles.deg45}>
            <img className={styles.serviceImage} src={logoDesign} alt="serviceImage"/>
            <h1 className={styles.serviceName}>Logo Design</h1>
        </div>
    )
}

export default ServiceC;
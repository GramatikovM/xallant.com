import styles from './servicePage.module.css';
import eCommerce from '../Images/Applications.png';

function ServiceH() {
    return (
        <div className={styles.serviceCard} id={styles.degBot}>
            <img className={styles.serviceImage} id={styles.appsImg} src={eCommerce} alt="serviceImage"/>
            <h1 className={styles.serviceName}>Applications</h1>
        </div>
    )
}

export default ServiceH;
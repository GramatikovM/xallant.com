import styles from './servicePage.module.css';
import brandAndIdentity from '../Images/Brand and Identity.png';

function ServiceD() {
    return (
        <div className={styles.serviceCard} id={styles.deg135}>
            <img className={styles.serviceImage} id={styles.brandImg} src={brandAndIdentity} alt="serviceImage"/>
            <h1 className={styles.serviceName}>Brand and Identity </h1>
        </div>
    )
}

export default ServiceD;
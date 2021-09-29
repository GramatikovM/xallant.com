import styles from './servicePage.module.css';
import websiteSupport from '../Images/Website Support.png';

function ServiceF() {
    return (
        <div className={styles.serviceCard} id={styles.deg225}>
            <img className={styles.serviceImage} src={websiteSupport} alt="serviceImage"/>
            <h1 className={styles.serviceName}>Website Support</h1>
        </div>
    )
}

export default ServiceF;
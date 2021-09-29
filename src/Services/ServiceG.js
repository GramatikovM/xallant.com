import styles from './servicePage.module.css';
import hostingAndDomain from '../Images/Hosting and Domain.png';

function ServiceG() {
    return (
        <div className={styles.serviceCard} id={styles.deg315}>
            <img className={styles.serviceImage} src={hostingAndDomain} alt="serviceImage" />
            <h1 className={styles.serviceName}>Hosting and Domain</h1>
        </div>
    )
}

export default ServiceG;
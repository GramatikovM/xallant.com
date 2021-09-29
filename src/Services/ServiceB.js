import styles from './servicePage.module.css';
import eCommerce from '../Images/E-commerce.png';

function ServiceB() {
    return (
        <div className={styles.serviceCard} id={styles.deg0}>
            <img className={styles.serviceImage} src={eCommerce} alt="serviceImage"/>
            <h1 className={styles.serviceName}>E-commerce</h1>
        </div>
    )
}

export default ServiceB;
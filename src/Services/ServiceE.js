import styles from './servicePage.module.css';
import seoOptimisation from '../Images/SEO Optimisation.jpeg';

function ServiceE() {
    return (
        <div className={styles.serviceCard} id={styles.deg180}>
            <img className={styles.serviceImage} src={seoOptimisation} alt="serviceImage"/>
            <h1 className={styles.serviceName}>SEO Optimization</h1>
        </div>
    )
}

export default ServiceE;
import styles from './servicePage.module.css';
import WebDesign from '../Images/WebDesign.webp';

function ServiceA() {
    function giveShadow(e) {
        
    }

    return (
        <div className={styles.serviceCard} id={styles.degTop} onMouseOver={giveShadow}>
            <img className={styles.serviceImage} src={WebDesign} alt="serviceImage"/>
            <h1 className={styles.serviceName}>Website Design</h1>
        </div>
    )
}

export default ServiceA;
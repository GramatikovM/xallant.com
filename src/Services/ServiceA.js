import styles from './servicePage.module.css';

function ServiceA() {
    return (
        <div className={styles.serviceCard}>
            <img src alt="serviceImage"/>
            <h1>Website Design</h1>
            <p>Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum</p>
        </div>
    )
}

export default ServiceA;
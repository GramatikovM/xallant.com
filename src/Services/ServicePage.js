import styles from './servicePage.module.css';
import ServiceA from './ServiceA';
import ServiceB from './ServiceB';
import ServiceC from './ServiceC';
import ServiceD from './ServiceD';
import ServiceE from './ServiceE';
import ServiceF from './ServiceF';
import ServiceG from './ServiceG';
import ServiceH from './ServiceH';

function ServicePage() {
    return (
        <div className={styles.servicesPageWrapper}>
            <div className={styles.servicesContentWrapper}>
                <ServiceA></ServiceA>
                <ServiceB></ServiceB>
                <ServiceC></ServiceC>
                <ServiceD></ServiceD>
                <ServiceE></ServiceE>
                <ServiceF></ServiceF>
                <ServiceG></ServiceG>
                <ServiceH></ServiceH>
            </div>
        </div>
    )
}

export default ServicePage;
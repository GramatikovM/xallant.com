import styles from './servicePage.module.css';
import ServiceA from './ServiceA';
import ServiceB from './ServiceB';
import ServiceC from './ServiceC';
import ServiceD from './ServiceD';
import ServiceE from './ServiceE';
import ServiceF from './ServiceF';
import ServiceG from './ServiceG';

function ServicePage() {
    return (
        <div className={styles.servicesWrapper}>
            <ServiceA></ServiceA>
            <div className={styles.nonFeaturedEls}>
                <ServiceB></ServiceB>
                <ServiceC></ServiceC>
                <ServiceD></ServiceD>
                <ServiceE></ServiceE>
                <ServiceF></ServiceF>
                <ServiceG></ServiceG>
            </div>
        </div>
    )
}

export default ServicePage;
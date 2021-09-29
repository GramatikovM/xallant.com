import HomeImage from '../Images/HomeImage.jpg';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import customDesignIcon from '../Images/Custom Design Icon.png';
import serverIcon from '../Images/Server Icon.png';
import itSupportIcon from '../Images/IT Support Icon.png';
import eCommerceIcon from '../Images/E-commerce Icon.png';
import websitePhoto from "../Images/websitePhoto.jpg";
import experienceImage from "../Images/experienceImage.png";
import efficiencyImage from "../Images/efficiencyImage.png";
import missionImage from "../Images/missionImage.jpg";

function Home() {
    function viewService() {

    }

    return (
        <div className={styles.homePageWrapper}>
            <img src={HomeImage} id={styles.homeImage} alt="HomeImage" />
            <div id={styles.iconWrapper}>
                <Link to="/services" className={styles.homeIcons} onMouseOver={viewService}>
                    <img src={customDesignIcon} className={styles.iconImg} alt="Custom Design Icon" />
                    <div className={styles.textWrapper}>
                        <h1 className={styles.iconHeader}>Персонализиран Дизайн</h1>
                        <p className={styles.iconText}>Формата и функционалността вървят ръка за ръка.</p>
                        <button className={styles.iconButton}>Научи повече</button>
                    </div>
                </Link>
                <Link to="/services" className={styles.homeIcons}>
                    <img src={serverIcon} className={styles.iconImg} alt="Digital Marketing Icon" />
                    <div className={styles.textWrapper}>
                        <h1 className={styles.iconHeader}>Дигитален Маркетинг</h1>
                        <p className={styles.iconText}>Google Ads и реклами в социалните медии.</p>
                        <button className={styles.iconButton}>Научи повече</button>
                    </div>
                </Link>
                <Link to="/services" className={styles.homeIcons}>
                    <img src={itSupportIcon} className={styles.iconImg} alt="IT Support Icon" />
                    <div className={styles.textWrapper}>
                        <h1 className={styles.iconHeader}>ИТ Поддръжка</h1>
                        <p className={styles.iconText}>Подобряване на сигурността и добавяне на нови функции.</p>
                        <button className={styles.iconButton}>Научи повече</button>
                    </div>
                </Link>
                <Link to="/services" className={styles.homeIcons}>
                    <img src={eCommerceIcon} className={styles.iconImg} alt="E-commerce Icon" />
                    <div className={styles.textWrapper}>
                        <h1 className={styles.iconHeader}>Онлайн Магазин</h1>
                        <p className={styles.iconText}>Бързи и надеждни онлайн продажби.</p>
                        <button className={styles.iconButton}>Научи повече</button>
                    </div>
                </Link>
            </div>

            <div id={styles.introContainer}>
                <h2 id={styles.homeSubHeader}>Представете си възможностите и потенциала</h2>
                <div id={styles.websitePhotoWrapper}><img src={websitePhoto} alt="websitePhoto" id={styles.websitePhoto} /></div>
                <section id={styles.initialText}>Какво бихте могли да постигнете с функционален и пълен с фийчъри, SEO оптимизиран уебсайт / онлайн магазин? Помислете за първите впечатления, спестеното време и спестени главоболия. В Xallant Technologies непрекъснато търсим нови начини да подобрим както съществуващи така и бъдещи проекти. Каним Ви да станете част от нашите доволни клиенти – свържете се с нас сега и се запознайте с възможностите.</section>
            </div>

            <div id={styles.aboutUsMainContainer}>
                <h2 id={styles.aboutMainHeading}>За Нас</h2>
                <div className={styles.aboutUsSubContainerA} >
                    <div id={styles.aboutUsBox} >
                        <h3 className={styles.aboutSubHeading}>Опит</h3>
                        <img className={styles.aboutUsImages} src={experienceImage} alt="Experience" />
                        <section className={styles.aboutUsDescription}>Опитът ни е запознал с различни тенденции, операционни системи, мрежи и бази данни. Работим с почти всяка технология, от които един малък и среден бизнес би имал нужда. </section>
                    </div>

                    <div id={styles.aboutUsBox} >
                        <h3 className={styles.aboutSubHeading}>Ефективност и възвръщаемост</h3>
                        <img className={styles.aboutUsImages} src={efficiencyImage} alt="Efficiency" />
                        <section className={styles.aboutUsDescription}>Голяма част от вашия човешки ресурс поддържа текущата ви система? Много бизнеси осъзнават, че аутсорсинга на тази задача прави крайния резултат по качествен и по достъпен. Оставете IT частта на нас и се съсредоточите върху това, което правите най-добре, а именно – управлението на вашия бизнес.</section>
                    </div>
                </div>

                <div className={styles.aboutUsSubContainerB} >
                    <div id={styles.aboutUsBox} >
                        <h3 className={styles.aboutSubHeading}>Нашата мисия</h3>
                        <img className={styles.aboutUsImages} src={missionImage} alt="Mission" />
                        <section className={styles.aboutUsDescription}>Мисията ни е създаването на изключителна уеб разработка, благодарение на която нашите клиенти да превъзхождат конкуренти си. Да могат да градят трайни взаимоотношения с бъдещи клиенти и да повишават производителността си.</section>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home;
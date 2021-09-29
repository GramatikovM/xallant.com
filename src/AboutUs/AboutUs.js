import styles from "./AboutUs.module.css";
import rightArrow from "../Images/CurvedBlueRightArrowFinal.svg";
import leftArrow from "../Images/CurvedBlueLeftArrowFinal.jpg";

function AboutUs() {
    return (
        <div id={styles.aboutUsPageWrapper}>

            <h2 id={styles.ourApproachMainHeader}>Нашият подход</h2>

            <div id={styles.ourApproachContainer}>

                <div className={styles.ourApproachLeftWrapper}>
                    <div className={styles.ourApproachBox}>
                        <h3 className={styles.ourApproachSubHeader}>Тествано. Усъвършенствано. Доказано.</h3>
                        <div className={styles.ourApproachDescription}>Постоянно усъвършенстваме нашата методология е се доказваме на различни международни пазари с напреднала уеб разработка, за да осигурим възможно най-добрия резултат с най-високо качество и ефективност. Всяка част от проекта е измислена с цел да отговаря на различните предизвикателства на нашите клиенти. Мнението Ви и обратната връзка ще бъдат неразделна част от всяка стъпка. Ето как:</div>
                    </div>

                    <div className={styles.ourApproachBox}>
                        <h3 className={styles.ourApproachSubHeader}>Brainstorming</h3>
                        <div className={styles.ourApproachDescription}>Успехът на вашия проект e пряко пропорционален на интензитета и задълбочеността на планирането. По време на фаза BRAINSTORMING ще научим всичко, което можем за вашите нужди, текущи процеси и стремежи, след което ще разработим подробна карта на проекта, за да постигнем целите на бизнеса Ви.</div>
                    </div>

                    <div className={styles.ourApproachBox}>
                        <h3 className={styles.ourApproachSubHeader}>Архитектура</h3>
                        <div className={styles.ourApproachDescription}>Едновременно с фаза BRAINSTORMING, ние разработваме конкретни спецификации, схема на всяка страница на сайта, карта на сайта и работни потоци на потребителите. Това е моментът да преоцените съществуващото съдържание, да тествате всички възможни решения и заедно да оценим дизайна. </div>
                    </div>

                    <div className={styles.ourApproachBox}>
                        <h3 className={styles.ourApproachSubHeader}>Дизайн</h3>
                        <div className={styles.ourApproachDescription}>Формата и функционалността вървят ръка за ръка. След като идеята е уточнена, дизайнерският екип може да започне да изпълнява UX/UI потребителско изживяване, което да отговаря на вашите изисквания и маркетингови цели. Този процес комбинира както графичен и уеб дизайн, така и всички актуални уеб тенденции. Целта е да гарантираме, че вашият уебсайт ще изглежда чудесно на всяко устройство и ще бъде достъпен за възможно най-много потребители.</div>
                    </div>
                </div>

                <div className={styles.ourApproachCenterWrapper}>
                    <img className={styles.leftArrow} src={leftArrow} alt="LeftArrow" />
                    <img className={styles.rightArrow} src={rightArrow} alt="RightArrow" />
                    <img className={styles.leftArrow} src={leftArrow} alt="LeftArrow" />
                    <img className={styles.rightArrow} src={rightArrow} alt="RightArrow" />
                </div>

                <div className={styles.ourApproachRightWrapper}>
                    <div className={styles.ourApproachBox}>
                        <h3 className={styles.ourApproachSubHeader}>Разработка</h3>
                        <div className={styles.ourApproachDescription}>Докато дизайнерският екип работи с Вас върху визуалния дизайн, нашият опитен front-end екип изгражда анимациите и функционалността, които ще оживят вашия сайт. Тук най-важно е подробното планиране за това вниманието към детайли е на първо място. Поради тази причина нашият мениджър на проекта ще Ви държи в течение с всичко случващо се.</div>
                    </div>

                    <div className={styles.ourApproachBox}>
                        <h3 className={styles.ourApproachSubHeader}>Тестване и Финализиране</h3>
                        <div className={styles.ourApproachDescription}>Наш приоритет е да предоставим напълно функциониращ, съвместим с различни браузъри и напълно тестван краен продукт. Извършваме усърдни тестове с цел осигуряване на качеството на всички части на проекта, така че когато сайтът ви стартира, можете да бъдете спокойни, че ние сме се погрижили за всичко. Тази фаза включва и обучение за вашия персонал за да можете да се запознаете с всички тънкости на проекта.</div>
                    </div>

                    <div className={styles.ourApproachBox}>
                        <h3 className={styles.ourApproachSubHeader}>Техническа Поддръжка</h3>
                        <div className={styles.ourApproachDescription}>Нашите взаимоотношения не приключват в момента в който Ви предадем продукта в завършеният му вид. Ще продължим да поддържаме Вашия проект с надстройки на уебсайтове, подобряване на сигурността и добавяне на нови функции.</div>
                    </div>

                    <div className={styles.ourApproachBox}>
                        <h3 className={styles.ourApproachSubHeader}>Маркетинг</h3>
                        <div className={styles.ourApproachDescription}>След като новият проект стартира, нашите клиенти се доверяват на текущите ни услуги за дигитален маркетинг. Експертите в нашия отдел за дигитален маркетинг се специализират в Google Ads, създаването и внедряването на съдържание в социалните медии и социалните реклами, за да ви помогнат да съставите план, който да ви помогне да постигнете и надхвърлите целите си.</div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default AboutUs;
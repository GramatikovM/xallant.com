import styles from './contacts.module.css';
import background from '../Images/Contact Page Background.jpg';
import { useState } from 'react';

function Contacts() {
    let [text,setText] = useState('');
    console.log(text);

    return (
        <div id={styles.pageWrapper}>
            <img id={styles.contactBackground} src={background} alt="Background"/>

            <div id={styles.contentWrapper}>
                <form id={styles.contactForm} action='#'>
                    <label className={styles.labels} htmlFor="name">Име</label>
                    <input className={styles.fields} id="name" type='input'></input>
                    <label className={styles.labels} htmlFor="surname">Фамилия</label>
                    <input className={styles.fields} id="surname" type='input'></input>
                    <label className={styles.labels} htmlFor="email">Имейл адрес</label>
                    <input className={styles.fields} id="email" type='input'></input>
                    <label className={styles.labels} htmlFor="tel">Телефон</label>
                    <input className={styles.fields} id="tel" type='input'></input>
                    <textarea id={styles.textArea} onBlur={event => {setText(event.target.value); event.preventDefault()}} cols="30" rows="10" placeholder="Вашите въпроси към нас"></textarea>
                    <input className={styles.button} type="submit" value="Изпрати"></input>
                </form>

                <div id={styles.addInfo}>
                    <p className={styles.addInfoText} id={styles.addInfo1}>Работно време:</p>
                    <p className={styles.addInfoText} id={styles.addInfo2}>09:00 - 17:00 | Понеделник - Петък</p>
                    <p className={styles.addInfoText} id={styles.addInfo3}>(Свържете се с нас за среща)</p>
                    <p className={styles.addInfoText} id={styles.addInfo4}>Онлайн поддръжка: 24/7</p>
                </div>
            </div>

        </div>
    )
}

export default Contacts;
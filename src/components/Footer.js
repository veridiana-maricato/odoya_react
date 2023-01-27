import styles from './Footer.module.css'
import logo from '../img/logo_branco.png'

import { useNavigate } from 'react-router-dom'


const Footer = () => {

    const navigate = useNavigate()

    return (
        <footer className={styles.footer}>
            <div className={styles.footer__line1}>

                <div className={styles.footer__logo} onClick={() => navigate('/')}></div>
                
                <div className={styles.footer__column}>                    
                        <h3>Midia</h3>
                        <ul className={styles.footer__list}>
                            <li><a target="_blank" rel="noreferrer" href="https://www.instagram.com/odoyacozinha/">Instagram</a></li>
                            <li><a target="_blank" rel="noreferrer" href="https://wa.me/5511993285536?text=Olá!%20Tenho%20interesse%20em%20saber%20mais%20sobre%20a%20granola%20Odoyá!">WhatsApp</a></li>
                            <li><a href="mailto:veridiana.maricato1@gmail.com&subject=Granola Odoyá&body=Olá! Gostaria de saber sobre a granola Odoyá...">E-mail</a></li>
                        </ul>                    
                </div>

                <div className={styles.footer__column}>
                        <h3>Links</h3>
                        <ul className={styles.footer__list}>
                            <li onClick={() => navigate('/')}><p >Home</p></li>                            
                            <li onClick={() => navigate('/order')}><p>Peça a sua</p></li>
                            <li onClick={() => navigate('/recepies')}><p>Receitas</p></li>
                            <li onClick={() => navigate('/contact')}><p>Contato</p></li>
                        </ul>
                </div>
            </div>
            <div className={styles.footer__line2}>
                <p>©2022 - All rights reserved - website produced by Veridiana Maricato</p>
            </div>
        </footer>
    )
}

export default Footer
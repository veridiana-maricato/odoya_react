import style from './Footer.module.css'
import logo from '../img/logo_branco.png'


const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.footer__linha1}>
                <a className={style.footer__logo} href="/home.html">
                    <img src={logo} alt="Logo Odoya" />
                </a>
                <div className={style.footer__column}>
                    <div className={style.footer__midia}>
                        <h3 className={style.footer__column__title}>Midia</h3>
                        <ul className={style.footer__list}>
                            <li><a target="_blank" rel="noreferrer" href="https://www.instagram.com/odoyacozinha/">Instagram</a></li>
                            <li><a target="_blank" rel="noreferrer" href="https://www.instagram.com/odoyacozinha/">E-mail</a></li>
                        </ul>
                    </div>
                </div>
                <div className={style.footer__column}>
                    <div className={style.footer__links}>
                        <h3 className={style.footer__column__title}>Links</h3>
                        <ul className={style.footer__list}>
                            <li><a href="home.html">Home</a></li>
                            <li><a href="sobre.html">Sobre a Odoyá</a></li>
                            <li><a href="informacoes.html">A granola</a></li>
                            <li><a href="pedido.html">Peça a sua</a></li>
                            <li><a href="receitas.html">Receitas</a></li>
                            <li><a href="contato.html">Contato</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={style.footer__linha2}>
                <p>©2022 - All rights reserved - website produced by Veridiana Maricato</p>
            </div>
        </footer>
    )
}

export default Footer
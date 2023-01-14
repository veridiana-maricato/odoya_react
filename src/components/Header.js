import logo from '../img/logo_branco.png'
import style from './Header.module.css'

const Header = () => {
    return (
        <div>
            <header className={style.menu_principal}>
                <div className={style.logo}>
                    <img src={logo} alt="" />
                </div>
                <div>
                    <nav>
                        <ul className={style.menu_principal__lista}>
                            <li><a href="home.html">Home</a></li>
                            <li><a href="sobre.html">Sobre a Odoyá</a></li>
                            <li><a href="informacoes.html">A granola</a></li>
                            <li><a href="pedido.html">Peça a sua</a></li>
                            <li><a href="receitas.html">Receitas</a></li>
                            <li><a href="contato.html">Contato</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Header
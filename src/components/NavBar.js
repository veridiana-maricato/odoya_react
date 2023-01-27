import { NavLink } from 'react-router-dom'

import logo from '../img/logo_branco.png'
import style from './NavBar.module.css'

const NavBar = () => {
    return (
            <header className={style.menu_principal}>
                <div className={style.logo}>
                    <img src={logo} alt="Logo Odoya" />
                </div>
                <div>
                    <nav className={style.menu_principal__lista}>
                   
                            <NavLink to='/'>Home</NavLink>
                            <NavLink to='/contact'>Contato</NavLink>
                            <NavLink to='/recepies'>Receitas</NavLink>
                            <NavLink to='/order'>Pedir</NavLink>
                            {/* <li><a href="home.html">Home</a></li>
                            <li><a href="sobre.html">Sobre a Odoyá</a></li>
                            <li><a href="informacoes.html">A granola</a></li>
                            <li><a href="pedido.html">Peça a sua</a></li>
                            <li><a href="receitas.html">Receitas</a></li>
                            <li><a href="contato.html">Contato</a></li> */}
                      
                    </nav>
                </div>
            </header>
    )
}

export default NavBar
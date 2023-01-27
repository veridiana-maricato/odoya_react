import { NavLink } from 'react-router-dom'

import logo from '../img/logo_branco.png'
import styles from './NavBar.module.css'

const NavBar = () => {
    return (
        <header className={styles.menu_principal}>
            <div className={styles.logo}></div>
            <div>
                <nav className={styles.menu_principal__lista}>
                    <NavLink to='/' className={({ isActive }) => (isActive ? styles.active : "")}>Home</NavLink>
                    <NavLink to='/contact' className={({ isActive }) => (isActive ? styles.active : "")}>Contato</NavLink>
                    <NavLink to='/recepies' className={({ isActive }) => (isActive ? styles.active : "")}>Receitas</NavLink>
                    <NavLink to='/order' className={({ isActive }) => (isActive ? styles.active : "")}>Pedir</NavLink>    
                    <NavLink to='/login' className={({ isActive }) => (isActive ? styles.active : "")}>Login</NavLink>    
                    <NavLink to='/register' className={({ isActive }) => (isActive ? styles.active : "")}>Cadastrar-se</NavLink>    
                </nav>
            </div>
        </header>
    )
}

export default NavBar
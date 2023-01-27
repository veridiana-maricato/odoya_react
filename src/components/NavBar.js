import { NavLink } from 'react-router-dom'
import { useState } from 'react'

import styles from './NavBar.module.css'

const NavBar = () => {

    const [isMobile, setMobile] = useState(false)
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}></div>
            <ul className={isMobile ? styles.nav_links_mobile : styles.nav_links}
                onClick={() => setMobile(false)}
                >
                <NavLink to='/' className={({ isActive }) => (isActive ? styles.active : styles.nav_link)}>Home</NavLink>
                <NavLink to='/contact' className={({ isActive }) => (isActive ? styles.active : styles.nav_link)}>Contato</NavLink>
                <NavLink to='/recepies' className={({ isActive }) => (isActive ? styles.active : styles.nav_link)}>Receitas</NavLink>
                <NavLink to='/order' className={({ isActive }) => (isActive ? styles.active : styles.nav_link)}>Pedir</NavLink>
                <NavLink to='/login' className={({ isActive }) => (isActive ? styles.active : styles.nav_link)}>Login</NavLink>
                <NavLink to='/register' className={({ isActive }) => (isActive ? styles.active : styles.nav_link)}>Cadastrar-se</NavLink>
            </ul>
            <div>
                <button className={styles.mobile_menu_icon}
                onClick={() => setMobile(!isMobile)}
                >
                    {isMobile ? <i class="fa fa-times"></i> : <i class="fa fa-bars"></i>}

                </button>
            </div>
        </nav>
    )
}

export default NavBar
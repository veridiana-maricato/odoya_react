import { NavLink } from 'react-router-dom'
import { useState } from 'react'

import { useAuthentication } from '../hooks/useAuthentication'

import { useAuthValue } from '../context/AuthContext'

import styles from './NavBar.module.css'

const NavBar = () => {

    const { user } = useAuthValue()

    const {logout} = useAuthentication()

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
                {!user && (
                    <>
                        <NavLink to='/login' className={({ isActive }) => (isActive ? styles.active : styles.nav_link)}>Entrar</NavLink>
                        <NavLink to='/register' className={({ isActive }) => (isActive ? styles.active : styles.nav_link)}>Cadastrar-se</NavLink>
                    </>
                )}
                {user && (
                    <p onClick={logout} className='logout_btn'>Sair</p>
                )}
                <NavLink to='/cart' className={({ isActive }) => (isActive ? styles.active : styles.nav_link)}><i className="fas fa-shopping-cart"></i></NavLink>
            </ul>
            <div>
                <button className={styles.mobile_menu_icon}
                    onClick={() => setMobile(!isMobile)}
                >
                    {isMobile ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}

                </button>
            </div>
        </nav>
    )
}

export default NavBar
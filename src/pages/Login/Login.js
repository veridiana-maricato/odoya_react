import styles from './Login.module.css'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'



const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
  
    setError("")

  }

  return (
    <div className={styles.login}>       
        <form onSubmit={handleSubmit}>  
        <h1>Entre com sua conta!</h1>  
        <label>
          <span>E-mail:</span>
          <input type="email" placeholder='E-mail' name='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          <span>Senha:</span>
          <input type="password" placeholder='Password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>      
        <button>Entrar</button>
        <p className='text-button ' onClick={() => navigate('/register')}>Ainda não tem cadastro? Clique aqui!</p>
      </form>
    </div>
  )
}

export default Login
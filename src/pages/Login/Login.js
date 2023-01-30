import styles from './Login.module.css'

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAuthentication } from '../../hooks/useAuthentication'



const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const { login, error: authError, loading } = useAuthentication()


  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
  
    setError("")

    const user = {
      email,
      password
    }

    const res = await login(user)
    console.log(res)
  }

  useEffect(() => {
    if (authError) {
      setError(authError)
    }
  }, [authError])

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
        {!loading && (
          <>
            <button>Entrar</button>
            <p className='text-button' onClick={() => navigate('/register')}>Não tem cadastro ainda? Clique aqui!</p>
          </>
        )}
        {loading && <button disabled>Aguarde...</button>}
        {error && <p className='error-message'>{error}</p>}
      </form>
    </div>
  )
}

export default Login
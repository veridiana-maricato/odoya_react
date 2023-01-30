import styles from './Register.module.css'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Register = () => {
  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [confirmEmail, setConfirmEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()  


  }

  return (
    <div className={styles.register}>
      <form onSubmit={handleSubmit}>
        <h1>Crie uma conta!</h1>
        <label>
          <span>Nome completo:</span>
          <input type="name" placeholder='E-mail' name='name' value={userName} onChange={(e) => setUserName(e.target.value)} required />
        </label>
        <label>
          <span>E-mail:</span>
          <input type="email" placeholder='E-mail' name='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          <span>Conferir e-mail:</span>
          <input type="email" placeholder='Conferir e-mail' name='confirmEmail' value={confirmEmail} onChange={(e) => setConfirmEmail(e.target.value)} required />
        </label>
        <label>
          <span>Senha:</span>
          <input type="password" placeholder='Senha' name='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <label>
          <span>Conferir senha:</span>
          <input type="password" placeholder='Conferir senha' name='confirmPassword' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
        </label>
        <button>Cadastrar</button>
        <p className='text-button ' onClick={() => navigate('/login')}>Já tem cadastro? Faça login!</p>
      </form>
    </div>
  )
}

export default Register
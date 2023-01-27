import styles from './Login.module.css'

import { useState } from 'react'



const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")



  const handleSubmit = async (e) => {
    e.preventDefault()
  
    setError("")

  }

  return (
    <div className={styles.login}>
        <h1>Login</h1>
        <p>Log in and start sharing!</p>
        <form onSubmit={handleSubmit}>    
        <label>
          <span>E-mail:</span>
          <input type="email" placeholder='E-mail' name='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          <span>Password:</span>
          <input type="password" placeholder='Password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>       
      </form>
    </div>
  )
}

export default Login
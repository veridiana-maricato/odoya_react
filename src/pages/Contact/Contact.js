import { useState } from 'react'
import styles from './Contact.module.css'

const Contact = () => {

  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [textMessage, setTextMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(userName)
  }

  return (
    <div className={styles.background_img}>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome completo</span>
          <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
        </label>
        <label>
          <span>E-mail</span>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          <span>Mensagem</span>
          <textarea name="msg" id="" cols="30" rows="10" value={textMessage} onChange={(e) => setTextMessage(e.target.value)}></textarea>
        </label>
        <button >Enviar</button>
      </form>
    </div>
  )
}

export default Contact
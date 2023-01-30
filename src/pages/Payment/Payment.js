import styles from './Payment.module.css'

const Payment = () => {

  const removeHiddenClass = (e) => {
    e.preventDefault()
 
  }

  return (
    <div>
      <form className={styles.payment}>
        <h2>Escolha o metodo de pagamento</h2>
        <div className={styles.method}>
          <button className={styles.method_btn} onClick={removeHiddenClass}>PIX</button>
          <div className='hidden'>
            <p>Efetuada a compra, você verá as informações de pagamento com PIX.</p>
            <button className={styles.finalize_btn}>Finalizar compra</button>
          </div>
          <button className={styles.method_btn} >Transferência</button>
          <div className='hidden'>
            <p>Efetuada a compra, você verá as informações de pagamento com transferência bancária.</p>
            <button className={styles.finalize_btn}>Finalizar compra</button>
          </div>
          <button className={styles.method_btn} >Cartão</button>
          <div className='hidden'>
            <p>Infelizmente, este método ainda não esta disponível.</p>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Payment
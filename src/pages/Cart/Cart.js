import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Cart.module.css'

const Cart = () => {

  const [total, setTotal] = useState(0)
  const navigate = useNavigate()

  return (
    <div className={styles.img_container}>
      <div className={styles.cart_container}>
        <h1>Carrinho de compras</h1>
        <div className={styles.products}>
          <div className={styles.product}>
            <h3>Granola X</h3>
            <div className={styles.cart_buttons}>
              <input type="number"  min={1} max={10} />
              <button title="Deletar produto"><i className="fa fa-trash" aria-hidden="true"></i></button>
            </div>
          </div>
        </div>      
        <h4>Total da compra: R$ {total}</h4>
        <button onClick={() => navigate('./adress')} className={styles.finalize_btn}>Ir para o endereço</button>
      </div>
    </div>
  )
}

export default Cart
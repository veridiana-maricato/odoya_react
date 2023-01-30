import styles from './Order.module.css'

const Order = () => {
  return (
    <div>
      <h1 className={styles.title}>GRANOLA SALGADA</h1>
      <div className={styles.products_container}>
        <div className={styles.product}>
          <div className={styles.product_img}></div>
          <h3>Original</h3>
          <p>Granola de cebola e salsa</p>
          <h4>R$ 25,00</h4>
          <div className={styles.buy_btn}>
          <input type="number" min={0} max={10}/>
          <button><i className="fas fa-shopping-cart"></i></button>
          </div>
        </div>

        <div className={styles.product}>
          <div className={styles.product_img}></div>
          <h3>Cúrcuma</h3>
          <p>Granola de cebola e salsa</p>
          <h4>R$ 25,00</h4>
          <div className={styles.buy_btn}>
          <input type="number" min={0} max={10}/>
          <button><i className="fas fa-shopping-cart"></i></button>
          </div>
        </div>

        <div className={styles.product}>
          <div className={styles.product_img}></div>
          <h3>Cebola</h3>
          <p>Granola de cebola e salsa</p>
          <h4>R$ 25,00</h4>
          <div className={styles.buy_btn}>
          <input type="number" min={0} max={10}/>
          <button><i className="fas fa-shopping-cart"></i></button>
          </div>
        </div>

        <div className={styles.product}>
          <div className={styles.product_img}></div>
          <h3>Alho</h3>
          <p>Granola de cebola e salsa</p>
          <h4>R$ 25,00</h4>
          <div className={styles.buy_btn}>
          <input type="number" min={0} max={10}/>
          <button><i className="fas fa-shopping-cart"></i></button>
          </div>
        </div>

        
      </div>
      
    </div>
  )
}

export default Order
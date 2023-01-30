import { useNavigate } from 'react-router-dom'

import styles from './Adress.module.css'

const Adress = () => {
    const navigate = useNavigate()

    return (
        <div className={styles.img_container}>

            <form>
                <h1 className={styles.title}>Preencha seu endereço</h1>
                <label className={styles.cep}>
                    <span>CEP</span>
                    <input required type="text" name="cep" />
                </label>
                <label className={styles.street} >
                    <span>Rua</span>
                    <input required type="text" id="txtRua" name="rua" />
                </label>
                <label className={styles.streetNumber}>
                    <span>Número</span>
                    <input required type="number" id="txtNumero" name="numero" />
                </label>
                <label className={styles.complement} >
                    <span>Complemento</span>
                    <input required type="text" name="complemento" placeholder="apartamento, bloco, etc." />
                </label>
                <label className={styles.neighborhood}>
                    <span>Bairro</span>
                    <input required type="text" id="txtBairro" name="bairro" />

                </label>
                <label className={styles.city}>
                    <span>Cidade</span>
                    <input required type="text" id="txtCidade" name="cidade" />
                </label>
                <label className={styles.state}>
                    <span>Estado</span>
                    <input required type="text" id="txtEstado" name="Estado" />
                </label>
                <h2 className={styles.subtitle}>Dados de cobrança</h2>
                <label className={styles.cpf} >
                    <span>Insira seu CPF ou CNPJ</span>
                    <input required type="number" placeholder="CPF ou CNPJ" />
                </label>
                    <button className={styles.submit_btn} onClick={() => navigate('/cart/payment')}>Ir para pagamento</button>
            </form>
        </div>

    )
}

export default Adress
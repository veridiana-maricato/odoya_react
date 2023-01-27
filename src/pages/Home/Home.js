import styles from './Home.module.css'

import { useNavigate } from 'react-router-dom'

// Images
import colher_img from '../../img/granola/colher2.png'
import mesa_img from '../../img/granola/mesa-linda.jpg'
// import estrelas from './img/estrelas.png'
import logo_azul from '../../img/logo-azul.png'

const Home = () => {

    const homeText1 = 'A Odoyá Cozinha é uma experiência. É a pausa pro alimento do corpo, mente e espírito. É um despertar para o nutrir-se. É mais que comida, é uma porta que se abre para as sensações e para uma nova forma de experienciar a vida.'
    const homeText2 = 'Cozinha Odoyá é amor em forma de alimento. Axé.'
    const homeText3 = 'Gosto e o sabor não é a mesma coisa.'
    const homeText4 = 'Por mais que pareçam, são diferentes. O gosto, segundo especialistas, refere-se apenas ao sentido do paladar. Receptores específicos presentes na língua reconhecem um determinado estímulo proporcionado por substâncias presentes nos alimentos. Já o sabor dos alimentos é reconhecido pela combinação de dois ou mais sentidos: o paladar (que se refere ao gosto) e mais algum outro sentido, que pode ser o olfato (que dá o aroma dos alimentos). Na prática, é assim: coloque um pedaço de chocolate na boca e segure o nariz. Tente identificar o sabor. Você notará que, com o nariz tampado, sentirá somente o gosto doce. Ao liberar o olfato, você então será capaz de notar o sabor do doce. Essa é a diferença.'
    const homeText5 = 'Você pode identificar o gosto umami.'
    const homeText6 = 'Uma boa forma de identificar o gosto umami na boca é degustar um dos alimentos pelo qual ele é reconhecido. Saboreie lentamente e espere passar o gosto doce, salgado, azedo ou amargo inicial presente nele. O residual que ficará na boca será o umami. E como ele produz bastante saliva, esse residual tende a permanecer na boca um bom tempo.'
    
    const navigate = useNavigate()

    return (
        <div>
            <div className={styles.cover_home}>
            <h1>ODOYÁ</h1>
            <h2>Granola doce e salgada</h2>

            </div>
            <div className={styles.logo_blue}></div>            
            <section className={styles.about_home}>
                    <h1 className={styles.home_subtitle}>Granola doce e salgada</h1>
                    <p className={styles.text_home}>{homeText1}</p>
                    <p className={styles.text_home2}>{homeText2}</p>
                    <p className={styles.text_home3}>{homeText3}</p>
                    <p className={styles.text_home}>{homeText4}</p>
                    <p className={styles.text_home3}>{homeText5}</p>                        
                    <p className={styles.text_home}>{homeText6}</p>         
                <img className={styles.granola_img} src={mesa_img} alt="Mesa posta com bowl de granola, yogurt e frutas vermelhas" />
                <button className={styles.order_btn} onClick={() => navigate('/order')}>Peça já a sua!</button>
            </section> 
            {/* <!-- Depoimentos --> */}
            {/* <section className={styles.depoimentos}>
                <h2 className={styles.depoimentos__titulo}>Depoimentos</h2>
                <button className={styles.arrow-left control" aria-label="Previous}> '<' </button>
                <button id="arrow-right" className={styles.arrow-right control" aria-label="Next}>></button>
                <div className={styles.depoimentos__caixa}>
                    <div className={styles.depoimentos__lista}>
                        <div className={styles.depoimentos__lista__3em3}>
                            <section className={styles.depoimentos__item depoimentos__item__current}>                            
                                <img src={estrelas} alt="Cinco estrelas}>
                                <p className={styles.depoimentos__texto}>A melhor granola que já comi!</p>
                                <p className={styles.depoimentos__pessoa}>Marina C.</p>
                            </section>
                            <section className={styles.depoimentos__item depoimentos__item__current}>
                                <img src="img/estrelas.png" alt="Cinco estrelas}>
                                <p className={styles.depoimentos__texto}>A Uma delícia!</p>
                                <p className={styles.depoimentos__pessoa}>Marina F.</p>
                            </section>
                            <section className={styles.depoimentos__item depoimentos__item__current}>
                                <img src="img/estrelas.png" alt="Cinco estrelas}>
                                <p className={styles.depoimentos__texto}>Perfeita!</p>
                                <p className={styles.depoimentos__pessoa}>Giuliana S.</p>
                            </section>   
                        </div>
                        <div className={styles.depoimentos__lista__3em3}>
                            <section className={styles.depoimentos__item depoimentos__item__current}>
                                <img src="img/estrelas.png" alt="Cinco estrelas}>
                                <p className={styles.depoimentos__texto}>Bótima</p>
                                <p className={styles.depoimentos__pessoa}>Juliana S.</p>
                            </section>   
                            <section className={styles.depoimentos__item depoimentos__item__current}>
                                <img src="img/estrelas.png" alt="Cinco estrelas}>
                                <p className={styles.depoimentos__texto}>Perfeita!</p>
                                <p className={styles.depoimentos__pessoa}>Giuliana S.</p>
                            </section>   
                            <section className={styles.depoimentos__item depoimentos__item__current}>
                                <img src="img/estrelas.png" alt="Cinco estrelas}>
                                <p className={styles.depoimentos__texto}>Bótima</p>
                                <p className={styles.depoimentos__pessoa}>Juliana S.</p>
                            </section>   
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- FIM Depoimentos -->   */}

        </div >
    )
}

export default Home
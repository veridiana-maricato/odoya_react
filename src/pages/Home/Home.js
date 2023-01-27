import style from './Home.module.css'

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
    
    return (
        <div>
            <section className={style.home_container}>
                <div className={style.img_container}>
                    <img src={colher_img} alt="Imagem de uma colher com granola" />
                </div>
                <div className={style.title}>
                    <h1 className={style.home_title}>ODOYÁ</h1>
                    <h2 className={style.home_subtitle}>Granola doce e salgada</h2>
                </div>
            </section>
            <div className={style.logo_azul}>
                <img src={logo_azul} alt="" />
            </div>
            <section className={style.sobre_home}>
                <div className={style.texto_titulo}>
                    <h1 className={style.titulo_secundario}>Granola doce e salgada</h1>
                    <p className={style.texto_home}>{homeText1}</p>
                    <p className={style.texto_home2}>{homeText2}</p>
                    <p className={style.texto_home3}>{homeText3}</p>
                    <p className={style.texto_home}>{homeText4}</p>
                    <p className={style.texto_home3}>{homeText5}</p>                        
                    <p className={style.texto_home}>{homeText6}</p>                        
                    
                </div>
                <img src={mesa_img} alt="" />
                <a className={style.btn} href="/pedido.html">Peça já a sua!</a>
            </section> 
            {/* <!-- Depoimentos --> */}
            {/* <section className={style.depoimentos}>
                <h2 className={style.depoimentos__titulo}>Depoimentos</h2>
                <button className={style.arrow-left control" aria-label="Previous}> '<' </button>
                <button id="arrow-right" className={style.arrow-right control" aria-label="Next}>></button>
                <div className={style.depoimentos__caixa}>
                    <div className={style.depoimentos__lista}>
                        <div className={style.depoimentos__lista__3em3}>
                            <section className={style.depoimentos__item depoimentos__item__current}>                            
                                <img src={estrelas} alt="Cinco estrelas}>
                                <p className={style.depoimentos__texto}>A melhor granola que já comi!</p>
                                <p className={style.depoimentos__pessoa}>Marina C.</p>
                            </section>
                            <section className={style.depoimentos__item depoimentos__item__current}>
                                <img src="img/estrelas.png" alt="Cinco estrelas}>
                                <p className={style.depoimentos__texto}>A Uma delícia!</p>
                                <p className={style.depoimentos__pessoa}>Marina F.</p>
                            </section>
                            <section className={style.depoimentos__item depoimentos__item__current}>
                                <img src="img/estrelas.png" alt="Cinco estrelas}>
                                <p className={style.depoimentos__texto}>Perfeita!</p>
                                <p className={style.depoimentos__pessoa}>Giuliana S.</p>
                            </section>   
                        </div>
                        <div className={style.depoimentos__lista__3em3}>
                            <section className={style.depoimentos__item depoimentos__item__current}>
                                <img src="img/estrelas.png" alt="Cinco estrelas}>
                                <p className={style.depoimentos__texto}>Bótima</p>
                                <p className={style.depoimentos__pessoa}>Juliana S.</p>
                            </section>   
                            <section className={style.depoimentos__item depoimentos__item__current}>
                                <img src="img/estrelas.png" alt="Cinco estrelas}>
                                <p className={style.depoimentos__texto}>Perfeita!</p>
                                <p className={style.depoimentos__pessoa}>Giuliana S.</p>
                            </section>   
                            <section className={style.depoimentos__item depoimentos__item__current}>
                                <img src="img/estrelas.png" alt="Cinco estrelas}>
                                <p className={style.depoimentos__texto}>Bótima</p>
                                <p className={style.depoimentos__pessoa}>Juliana S.</p>
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
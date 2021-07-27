import Head from 'next/head'
import Image from 'next/image'
import { Header } from '../components/Header'
import styles from '../styles/Home.module.css'
import Rellax from 'rellax'
import { FormPedido } from '../components/FormPedido'
import { Footer } from '../components/Footer';

const classNames = require('classnames');

export default function Home() {
  if (typeof window !== "undefined") {
    const rellax = new Rellax('#parallax');
  }
  if (typeof window !== "undefined") {
    const header = document.getElementById('formContainer_Main');
    
    window.addEventListener('scroll', () => {
      const scrollPos = window.scrollY;
  
      if(scrollPos > 1000){
        header?.classList.add('animateLeftToRight')
        document.getElementById('formContainer_Main').style.opacity = "1";
      }else{
        header?.classList.remove('animateLeftToRight')
        document.getElementById('formContainer_Main').style.opacity = "0";
      }
    })
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Rozza-App</title>
        <meta name="description" content="Has create by Guilherme Brogio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      
      <main className={styles.main}>
        <section className={styles.Top}>
          <section className={styles.logoMarcaContainer}>
            <p className={styles.logoPrimaryWorld}>R</p>
            <p className={styles.logoSecondaryWorld}>ozza</p>
          </section>
          <p className={styles.description}>Super Delicious</p>
          <a href="/cardapio" className="btn bg-danger btn-danger">Cardápio</a>
        </section>
        <div className={styles.cardSlider}>
          <h1 className={styles.cardSlider__Title}>Itens em Promoção..</h1>
          <div id="multi-item-example" className="carousel slide carousel-multi-item" data-ride="carousel">
            <div className={classNames("controls-top", styles.cardSlider__ControlsTop)}>
              <a className="btn btn-dark btn-floating icon" href="#multi-item-example" data-slide="prev"><i className="bi bi-chevron-left"></i></a>
              <a className="btn btn-dark btn-floating icon" href="#multi-item-example" data-slide="next"><i className="bi bi-chevron-right"></i></a>
            </div>

            <ol className={classNames("carousel-indicators", styles.cardSlider__CarouselIndicators)}>
              <li data-target="#multi-item-example" data-slide-to="0" className="active"></li>
              <li data-target="#multi-item-example" data-slide-to="1"></li>
              <li data-target="#multi-item-example" data-slide-to="2"></li>
            </ol>

            <div className="carousel-inner" role="listbox">
              <div className="carousel-item active">
                <div className={classNames("col-md-4", styles.card, styles.cardPiz1)} style={{float: 'left'}}>
                  <div className="card mb-3">
                    <img className="card-img-top"
                      src="https://image.freepik.com/fotos-gratis/pizza-pizza-cheia-de-tomates-salame-e-azeitonas_140725-1200.jpg" alt="Card image cap"/>
                    <div className="card-body">
                      <h4 className="card-title">Pizza Nome AQUI</h4>
                      <p className="card-text">Descrição da Pizza AQUI</p>
                      <p className="card-text">Pizza Preço AQUI "R$10,00"</p>
                      <a href="/#formContainer" className="btn btn-dark">Fazer Pedido</a>
                    </div>
                  </div>
                </div>

                <div className={classNames("col-md-4", styles.card, styles.cardPiz2)} style={{float: 'left'}}>
                  <div className="card mb-3">
                    <img className="card-img-top"
                      src="https://image.freepik.com/fotos-gratis/pizza-pizza-cheia-de-tomates-salame-e-azeitonas_140725-1200.jpg" alt="Card image cap"/>
                    <div className="card-body">
                      <h4 className="card-title">Pizza Name AQUI</h4>
                      <p className="card-text">Descrição da Pizza AQUI</p>
                      <p className="card-text">Pizza Preço AQUI "R$10,00"</p>
                      <a href="/#formContainer" className="btn btn-dark">Fazer Pedido</a>
                    </div>
                  </div>
                </div>
                
                <div className={classNames("col-md-4", styles.card, styles.cardPiz3)} style={{float: 'left'}}>
                  <div className="card mb-3">
                    <img className="card-img-top"
                      src="https://image.freepik.com/fotos-gratis/pizza-pizza-cheia-de-tomates-salame-e-azeitonas_140725-1200.jpg" alt="Card image cap"/>
                    <div className="card-body">
                      <h4 className="card-title">Pizza Nome AQUI</h4>
                      <p className="card-text">Descrição da Pizza AQUI</p>
                      <p className="card-text">Pizza Preço AQUI "R$10,00"</p>
                      <a href="/#formContainer" className="btn btn-dark">Fazer Pedido</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className={classNames("col-md-4", styles.card, styles.cardPiz5)} style={{float: 'left'}}>
                  <div className="card mb-3">
                    <img className="card-img-top"
                      src="https://image.freepik.com/fotos-gratis/pizza-pizza-cheia-de-tomates-salame-e-azeitonas_140725-1200.jpg" alt="Card image cap"/>
                    <div className="card-body">
                      <h4 className="card-title">Pizza Nome AQUI</h4>
                      <p className="card-text">Descrição da Pizza AQUI</p>
                      <p className="card-text">Pizza Preço AQUI "R$10,00"</p>
                      <a href="/#formContainer" className="btn btn-dark">Fazer Pedido</a>
                    </div>
                  </div>
                </div>

                <div className={classNames("col-md-4", styles.card, styles.cardPiz6)} style={{float: 'left'}}>
                  <div className="card mb-3">
                    <img className="card-img-top"
                      src="https://image.freepik.com/fotos-gratis/pizza-pizza-cheia-de-tomates-salame-e-azeitonas_140725-1200.jpg" alt="Card image cap"/>
                    <div className="card-body">
                      <h4 className="card-title">Pizza Nome AQUI</h4>
                      <p className="card-text">Descrição da Pizza AQUI</p>
                      <p className="card-text">Pizza Preço AQUI "R$10,00"</p>
                      <a href="/#formContainer" className="btn btn-dark">Fazer Pedido</a>
                    </div>
                  </div>
                </div>

                <div className={classNames("col-md-4", styles.card, styles.cardPiz7)} style={{float: 'left'}}>
                  <div className="card mb-3">
                    <img className="card-img-top"
                      src="https://image.freepik.com/fotos-gratis/pizza-pizza-cheia-de-tomates-salame-e-azeitonas_140725-1200.jpg" alt="Card image cap"/>
                    <div className="card-body">
                      <h4 className="card-title">Pizza Nome AQUI</h4>
                      <p className="card-text">Descrição da Pizza AQUI</p>
                      <p className="card-text">Pizza Preço AQUI "R$10,00"</p>
                      <a href="/#formContainer" className="btn btn-dark">Fazer Pedido</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className={classNames("col-md-4", styles.card, styles.cardPiz9)} style={{float: 'left'}}>
                  <div className="card mb-3">
                    <img className="card-img-top"
                      src="https://image.freepik.com/fotos-gratis/bebidas-frescas-de-limao-tiro-macro_53876-32279.jpg" alt="Card image cap"/>
                    <div className="card-body">
                      <h4 className="card-title">Nome Drinks AQUI</h4>
                      <p className="card-text">Descrição do Drinks AQUI</p>
                      <p className="card-text">Drinks Preço AQUI "R$10,00"</p>
                      <a href="/#formContainer" className="btn btn-dark">Fazer Pedido</a>
                    </div>
                  </div>
                </div>

                <div className={classNames("col-md-4", styles.card, styles.cardPiz10)} style={{float: 'left'}}>
                  <div className="card mb-3">
                    <img className="card-img-top"
                      src="https://image.freepik.com/fotos-gratis/bebidas-frescas-de-limao-tiro-macro_53876-32279.jpg" alt="Card image cap"/>
                    <div className="card-body">
                      <h4 className="card-title">Drinks Nome AQUI</h4>
                      <p className="card-text">Descrição do Drinks AQUI</p>
                      <p className="card-text">Drinks Preço AQUI "R$10,00"</p>
                      <a href="/#formContainer" className="btn btn-dark">Fazer Pedido</a>
                      
                    </div>
                  </div>
                </div>

                <div className={classNames("col-md-4", styles.card, styles.cardPiz11)} style={{float: 'left'}}>
                  <div className="card mb-3">
                    <img className="card-img-top"
                      src="https://image.freepik.com/fotos-gratis/batatas-fritas-crocantes-com-ketchup-e-maionese_1150-26588.jpg" alt="Card image cap"/>
                    <div className="card-body">
                      <h4 className="card-title">Porção Nome AQUI</h4>
                      <p className="card-text">Descrição do Porção AQUI</p>
                      <p className="card-text">Porção Preço AQUI "R$10,00"</p>
                      <a href="/#formContainer" className="btn btn-dark">Fazer Pedido</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="formContainer_Main" className={classNames(styles.formContainer)}>
          <h1 id="formContainer" className={styles.formContainer__Title}>Vamos as Compras..</h1>
          <FormPedido/>
        </div>
        

        <section className={styles.BannerToBg}><img src="/img/bannerToBg.png" alt=""/><div className={styles.background}></div></section>
        <section className={styles.mainBanner}><img src="/img/rozza_banner.png" id="parallax" data-rellax-speed="-9" alt=""/></section>
      </main>

      <div className={styles.footerContainer}>
        <Footer/>
      </div>
    </div>
  )
}

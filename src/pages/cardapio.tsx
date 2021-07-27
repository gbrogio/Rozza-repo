import Head from 'next/head'
import Image from 'next/image'
import { Header } from '../components/Header'
import styles from '../styles/Cardapio.module.css'
import Rellax from 'rellax'
import { Footer } from '../components/Footer';

const classNames = require('classnames');

export default function Cardapio() {
  if (typeof window !== "undefined") {
    const rellax = new Rellax('#parallax');
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Rozza-App</title>
        <meta name="description" content="Has create by Guilherme Brogio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main>
        <div className={(styles.itensContainer)} role="listbox">
          <div className={styles.cardSlider}>
            <h1 className={styles.cardSlider__Title}>Pizza Opções</h1>
            <div id="multi-item-example" className="carousel slide carousel-multi-item" data-ride="carousel">
              <div className="carousel-inner" role="listbox">
                <div className={classNames("col-md-4", styles.card, styles.cardPiz1)} style={{float: 'left'}}>
                  <div className="card mb-3">
                    <img className="card-img-top"
                      src="https://image.freepik.com/fotos-gratis/pizza-pizza-cheia-de-tomates-salame-e-azeitonas_140725-1200.jpg" alt="Card image cap"/>
                    <div className="card-body">
                      <h4 className="card-title">Pizza Nome AQUI</h4>
                      <p className="card-text">Descrição da Pizza AQUI</p>
                      <p className="card-text">Pizza Preço AQUI "R$10,00"</p>
                      <a href="/formContainer" className="btn btn-dark">Fazer Pedido</a>
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
                      <a href="/formContainer" className="btn btn-dark">Fazer Pedido</a>
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
                      <a href="/formContainer" className="btn btn-dark">Fazer Pedido</a>
                    </div>
                  </div>
                </div>


                <div className={classNames("col-md-4", styles.card, styles.cardPiz5)} style={{float: 'left'}}>
                  <div className="card mb-3">
                    <img className="card-img-top"
                      src="https://image.freepik.com/fotos-gratis/pizza-pizza-cheia-de-tomates-salame-e-azeitonas_140725-1200.jpg" alt="Card image cap"/>
                    <div className="card-body">
                      <h4 className="card-title">Pizza Nome AQUI</h4>
                      <p className="card-text">Descrição da Pizza AQUI</p>
                      <p className="card-text">Pizza Preço AQUI "R$10,00"</p>
                      <a href="/formContainer" className="btn btn-dark">Fazer Pedido</a>
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
                      <a href="/formContainer" className="btn btn-dark">Fazer Pedido</a>
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
                      <a href="/formContainer" className="btn btn-dark">Fazer Pedido</a>
                    </div>
                  </div>
                </div>

                <div className={classNames("col-md-4", styles.card, styles.cardPiz9)} style={{float: 'left'}}>
                  <div className="card mb-3">
                    <img className="card-img-top"
                      src="https://image.freepik.com/fotos-gratis/pizza-pizza-cheia-de-tomates-salame-e-azeitonas_140725-1200.jpg" alt="Card image cap"/>
                    <div className="card-body">
                      <h4 className="card-title">Pizza Name HERE</h4>
                      <p className="card-text">Pizza Description HERE</p>
                      <p className="card-text">Pizza Preço HERE "R$10,00"</p>
                      <a href="/formContainer" className="btn btn-dark">Fazer Pedido</a>
                    </div>
                  </div>
                </div>

                <div className={classNames("col-md-4", styles.card, styles.cardPiz10)} style={{float: 'left'}}>
                  <div className="card mb-3">
                    <img className="card-img-top"
                      src="https://image.freepik.com/fotos-gratis/pizza-pizza-cheia-de-tomates-salame-e-azeitonas_140725-1200.jpg" alt="Card image cap"/>
                    <div className="card-body">
                      <h4 className="card-title">Pizza Nome AQUI</h4>
                      <p className="card-text">Descrição da Pizza AQUI</p>
                      <p className="card-text">Pizza Preço AQUI "R$10,00"</p>
                      <a href="/formContainer" className="btn btn-dark">Fazer Pedido</a>
                    </div>
                  </div>
                </div>

                <div className={classNames("col-md-4", styles.card, styles.cardPiz9)} style={{float: 'left'}}>
                  <div className="card mb-3">
                    <img className="card-img-top"
                      src="https://image.freepik.com/fotos-gratis/pizza-pizza-cheia-de-tomates-salame-e-azeitonas_140725-1200.jpg" alt="Card image cap"/>
                    <div className="card-body">
                      <h4 className="card-title">Pizza Name HERE</h4>
                      <p className="card-text">Pizza Description HERE</p>
                      <p className="card-text">Pizza Preço HERE "R$10,00"</p>
                      <a href="/formContainer" className="btn btn-dark">Fazer Pedido</a>
                    </div>
                  </div>
                </div>

                <div className={classNames("col-md-4", styles.card, styles.cardPiz10)} style={{float: 'left'}}>
                  <div className="card mb-3">
                    <img className="card-img-top"
                      src="https://image.freepik.com/fotos-gratis/pizza-pizza-cheia-de-tomates-salame-e-azeitonas_140725-1200.jpg" alt="Card image cap"/>
                    <div className="card-body">
                      <h4 className="card-title">Pizza Nome AQUI</h4>
                      <p className="card-text">Descrição da Pizza AQUI</p>
                      <p className="card-text">Pizza Preço AQUI "R$10,00"</p>
                      <a href="/formContainer" className="btn btn-dark">Fazer Pedido</a>
                    </div>
                  </div>
                </div>

                <div className={classNames("col-md-4", styles.card, styles.cardPiz9)} style={{float: 'left'}}>
                  <div className="card mb-3">
                    <img className="card-img-top"
                      src="https://image.freepik.com/fotos-gratis/pizza-pizza-cheia-de-tomates-salame-e-azeitonas_140725-1200.jpg" alt="Card image cap"/>
                    <div className="card-body">
                      <h4 className="card-title">Pizza Name HERE</h4>
                      <p className="card-text">Pizza Description HERE</p>
                      <p className="card-text">Pizza Preço HERE "R$10,00"</p>
                      <a href="/formContainer" className="btn btn-dark">Fazer Pedido</a>
                    </div>
                  </div>
                </div>

                <div className={classNames("col-md-4", styles.card, styles.cardPiz10)} style={{float: 'left'}}>
                  <div className="card mb-3">
                    <img className="card-img-top"
                      src="https://image.freepik.com/fotos-gratis/pizza-pizza-cheia-de-tomates-salame-e-azeitonas_140725-1200.jpg" alt="Card image cap"/>
                    <div className="card-body">
                      <h4 className="card-title">Pizza Nome AQUI</h4>
                      <p className="card-text">Descrição da Pizza AQUI</p>
                      <p className="card-text">Pizza Preço AQUI "R$10,00"</p>
                      <a href="/formContainer" className="btn btn-dark">Fazer Pedido</a>
                    </div>
                  </div>
                </div>

                <h1 className={styles.cardSlider__Title}>Drink Opções</h1>

                <div className={classNames("col-md-4", styles.card, styles.cardPiz9)} style={{float: 'left'}}>
                  <div className="card mb-3">
                    <img className="card-img-top"
                      src="https://image.freepik.com/fotos-gratis/bebidas-frescas-de-limao-tiro-macro_53876-32279.jpg" alt="Card image cap"/>
                    <div className="card-body">
                      <h4 className="card-title">Drink Nome AQUI</h4>
                      <p className="card-text">Descrição do Drink AQUI</p>
                      <p className="card-text">Drink Preço AQUI "R$10,00"</p>
                      <a href="/formContainer" className="btn btn-dark">Fazer Pedido</a>
                    </div>
                  </div>
                </div>

                <div className={classNames("col-md-4", styles.card, styles.cardPiz10)} style={{float: 'left'}}>
                  <div className="card mb-3">
                    <img className="card-img-top"
                      src="https://image.freepik.com/fotos-gratis/bebidas-frescas-de-limao-tiro-macro_53876-32279.jpg" alt="Card image cap"/>
                    <div className="card-body">
                      <h4 className="card-title">Drink Nome AQUI</h4>
                      <p className="card-text">Descrição do Drink AQUI</p>
                      <p className="card-text">Drink Preço AQUI "R$10,00"</p>
                      <a href="/formContainer" className="btn btn-dark">Fazer Pedido</a>
                    </div>
                  </div>
                </div>

                <div className={classNames("col-md-4", styles.card, styles.cardPiz11)} style={{float: 'left'}}>
                  <div className="card mb-3">
                    <img className="card-img-top"
                      src="https://image.freepik.com/fotos-gratis/bebidas-frescas-de-limao-tiro-macro_53876-32279.jpg" alt="Card image cap"/>
                    <div className="card-body">
                      <h4 className="card-title">Drink Nome AQUI</h4>
                      <p className="card-text">Descrição do Drink AQUI</p>
                      <p className="card-text">Drink Preço AQUI "R$10,00"</p>
                      <a href="/formContainer" className="btn btn-dark">Fazer Pedido</a>
                    </div>
                  </div>
                </div>
                <div className={classNames("col-md-4", styles.card, styles.cardPiz11)} style={{float: 'left'}}>
                  <div className="card mb-3">
                    <img className="card-img-top"
                      src="https://image.freepik.com/fotos-gratis/bebidas-frescas-de-limao-tiro-macro_53876-32279.jpg" alt="Card image cap"/>
                    <div className="card-body">
                      <h4 className="card-title">Drink Nome AQUI</h4>
                      <p className="card-text">Descrição do Drink AQUI</p>
                      <p className="card-text">Drink Preço AQUI "R$10,00"</p>
                      <a href="/formContainer" className="btn btn-dark">Fazer Pedido</a>
                    </div>
                  </div>
                </div>
                <div className={classNames("col-md-4", styles.card, styles.cardPiz11)} style={{float: 'left'}}>
                  <div className="card mb-3">
                    <img className="card-img-top"
                      src="https://image.freepik.com/fotos-gratis/bebidas-frescas-de-limao-tiro-macro_53876-32279.jpg" alt="Card image cap"/>
                    <div className="card-body">
                      <h4 className="card-title">Drink Nome AQUI</h4>
                      <p className="card-text">Descrição do Drink AQUI</p>
                      <p className="card-text">Drink Preço AQUI "R$10,00"</p>
                      <a href="/formContainer" className="btn btn-dark">Fazer Pedido</a>
                    </div>
                  </div>
                </div>
                <div className={classNames("col-md-4", styles.card, styles.cardPiz11)} style={{float: 'left'}}>
                  <div className="card mb-3">
                    <img className="card-img-top"
                      src="https://image.freepik.com/fotos-gratis/bebidas-frescas-de-limao-tiro-macro_53876-32279.jpg" alt="Card image cap"/>
                    <div className="card-body">
                      <h4 className="card-title">Drink Nome AQUI</h4>
                      <p className="card-text">Descrição do Drink AQUI</p>
                      <p className="card-text">Drink Preço AQUI "R$10,00"</p>
                      <a href="/formContainer" className="btn btn-dark">Fazer Pedido</a>
                    </div>
                  </div>
                </div>

                <h1 className={styles.cardSlider__Title}>Porção Opções</h1>
                <div className={classNames("col-md-4", styles.card, styles.cardPiz9)} style={{float: 'left'}}>
                  <div className="card mb-3">
                    <img className="card-img-top"
                      src="https://image.freepik.com/fotos-gratis/batatas-fritas-crocantes-com-ketchup-e-maionese_1150-26588.jpg" alt="Card image cap"/>
                    <div className="card-body">
                      <h4 className="card-title">Porção Nome AQUI</h4>
                      <p className="card-text">Descrição do Porção AQUI</p>
                      <p className="card-text">Porção Preço AQUI "R$10,00"</p>
                      <a href="/formContainer" className="btn btn-dark">Fazer Pedido</a>
                    </div>
                  </div>
                </div>

                <div className={classNames("col-md-4", styles.card, styles.cardPiz10)} style={{float: 'left'}}>
                  <div className="card mb-3">
                    <img className="card-img-top"
                      src="https://image.freepik.com/fotos-gratis/batatas-fritas-crocantes-com-ketchup-e-maionese_1150-26588.jpg" alt="Card image cap"/>
                    <div className="card-body">
                      <h4 className="card-title">Porção Nome AQUI</h4>
                      <p className="card-text">Descrição do Porção AQUI</p>
                      <p className="card-text">Porção Preço AQUI "R$10,00"</p>
                      <a href="/formContainer" className="btn btn-dark">Fazer Pedido</a>
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
                      <a href="/formContainer" className="btn btn-dark">Fazer Pedido</a>
                    </div>
                  </div>
                </div>
                <div className={classNames("col-md-4", styles.card, styles.cardPiz9)} style={{float: 'left'}}>
                  <div className="card mb-3">
                    <img className="card-img-top"
                      src="https://image.freepik.com/fotos-gratis/batatas-fritas-crocantes-com-ketchup-e-maionese_1150-26588.jpg" alt="Card image cap"/>
                    <div className="card-body">
                      <h4 className="card-title">Porção Nome AQUI</h4>
                      <p className="card-text">Descrição do Porção AQUI</p>
                      <p className="card-text">Porção Preço AQUI "R$10,00"</p>
                      <a href="/formContainer" className="btn btn-dark">Fazer Pedido</a>
                    </div>
                  </div>
                </div>

                <div className={classNames("col-md-4", styles.card, styles.cardPiz10)} style={{float: 'left'}}>
                  <div className="card mb-3">
                    <img className="card-img-top"
                      src="https://image.freepik.com/fotos-gratis/batatas-fritas-crocantes-com-ketchup-e-maionese_1150-26588.jpg" alt="Card image cap"/>
                    <div className="card-body">
                      <h4 className="card-title">Porção Nome AQUI</h4>
                      <p className="card-text">Descrição do Porção AQUII</p>
                      <p className="card-text">Porção Preço AQUI "R$10,00"</p>
                      <a href="/formContainer" className="btn btn-dark">Fazer Pedido</a>
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
                      <a href="/formContainer" className="btn btn-dark">Fazer Pedido</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section id="parallax" data-rellax-speed="-14" className={styles.mainBannerCardapio}/>
      </main>
      <div className={styles.footerContainer}>
        <Footer/>
      </div>
    </div>
  )
}

import Head from 'next/head'
import Image from 'next/image'
import { Header } from '../components/Header'
import styles from '../styles/Contact.module.css'
import Rellax from 'rellax'
import { Footer } from '../components/Footer';

const classNames = require('classnames');

export default function Contact() {
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
        <form className={classNames("needs-validation", styles.formContainer)} noValidate>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="firstName">Nome</label>
              <input type="text" className="form-control" id="firstName" placeholder="" required/>
              <div className="invalid-feedback">
                Esse campo é obrigatório
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="lastName">Sobrenome</label>
              <input type="text" className="form-control" id="lastName" placeholder="" required/>
              <div className="invalid-feedback">
                Esse campo é obrigatório
              </div>
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="email">Email <span className="text-muted">(Opcional)</span></label>
            <input type="email" className="form-control" id="email" placeholder="you@example.com"/>
            <div className="invalid-feedback">
              Por favor coloque um email correto para receber FeedBacks de Entregas.
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1 btn-dark">Example textarea</label>
            <textarea style={{height: '20rem'}} placeholder="Seu FeedBack Aqui..." className="form-control" id="exampleFormControlTextarea1"></textarea>
          </div>
          <a className="btn btn-dark btn-primary btn-lg btn-block" type="submit">Enviar FeedBack</a>
        </form>
      </main>

      <div className={styles.footerContainer}>
        <Footer/>
      </div>
    </div>
  )
}

import Head from 'next/head'
import Image from 'next/image'
import { Header } from '../components/Header'
import styles from '../styles/formContainer.module.css'
import Rellax from 'rellax'
import { FormPedido } from '../components/FormPedido'
import { Footer } from '../components/Footer';

const classNames = require('classnames');

export default function formContainer() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Rozza-App</title>
        <meta name="description" content="Has create by Guilherme Brogio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      
      <main className={styles.main}>
        <div id="formContainer_Main" className={classNames(styles.formContainer)}>
          <FormPedido/>
        </div>
      </main>

      <div className={styles.footerContainer}>
        <Footer/>
      </div>
    </div>
  )
}

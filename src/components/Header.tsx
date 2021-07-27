import React from 'react'//Importante para a criação do componente

import { useRouter } from 'next/router'//Faz a importação do useRouter para setar o elemento router para o uso nas classNames

import styles from '../styles/components/Header.module.css'//Importação do estilo

const classNames = require('classnames');//Funciona para adicionar mais de uma classe nos atributos classNames

export function Header(){
  
  const router = useRouter();/* seta o elemento router para o uso nas classNames do projeto adicionando da classe "active"
  ao elemento quando clica no mesmo */
  if (typeof window !== "undefined") {
    const header = document.getElementById('headerContainer');
    window.addEventListener('scroll', () => {
      const scrollPos = window.scrollY;
  
      if(scrollPos > 10){
        header?.classList.add('scrolled')
      }else{
        header?.classList.remove('scrolled')
      }
    })
  }

  return(
    <header id="headerContainer" className={classNames(styles.headerContainer, "animateTopToBottom")}>
      {/* Logo */}
      <section className={styles.logoMarcaContainer}>
         <p className={styles.logoPrimaryWorld}>R</p>
         <p className={styles.logoSecondaryWorld}>ozza</p>
      </section>

      {/* Nav Links */}
      <input type="checkbox" id="menu-btn" className={classNames(styles.menuBtn, "viewDisabled")} />
      <label htmlFor="menu-btn" className={styles.menuIcon}>
        <span className={styles.menuIcon__line}/>
      </label>
      <nav className={styles.navLinks}>

        <ul className={styles.listContainer}>
          <a href="/contact" className={classNames(router.pathname == "/contact" ? "navActive" : "", styles.aCont)}>Contate-nos</a>
          <a href="/about" className={classNames(router.pathname == "/about" ? "navActive" : "", styles.aAbout)}>Sobre nós</a>
          <a href="/cardapio" className={classNames(router.pathname == "/cardapio" ? "navActive" : "", styles.aCarda)}>Cardápio</a>
          <a href="/" className={classNames(router.pathname == "/" ? "navActive" : "", styles.aHome)}>Início</a>
        </ul>
        <span className={classNames("underline")}/>
      </nav>
    </header>        
  );
}

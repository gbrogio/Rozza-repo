import React from 'react'//Importante para a criação do componente

import { useRouter } from 'next/router'//Faz a importação do useRouter para setar o elemento router para o uso nas classNames

import styles from '../styles/components/Footer.module.css'//Importação do estilo

const classNames = require('classnames');//Funciona para adicionar mais de uma classe nos atributos classNames


export function Footer(){
  
  const router = useRouter();/* seta o elemento router para o uso nas classNames do projeto adicionando da classe "active"
  ao elemento quando clica no mesmo */
  return(
    <div className="container my-5">
      <footer className={classNames("text-white text-center text-lg-start bg-primary", styles.footerContainer)}>

        <div className={classNames(styles.footerContainer_Container, "container p-4")}>

          <div className={classNames("row mt-4", styles.aboutContainer)}>

            <div className="col-lg-4 col-md-12 mb-4 mb-md-0" style={{marginTop: '2rem'}}>
              <h5 className="text-uppercase mb-4">Sobre Rozza</h5>

              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                voluptatum deleniti atque corrupti.
              </p>

              <p>
                Blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas
                molestias.
              </p>

              <div className="mt-4">
                <a type="button" className="btn btn-floating btn-dark btn-primary btn-lg" style={{margin: '.5rem'}}><i className="bi bi-facebook"></i></a>
                <a type="button" className="btn btn-floating btn-dark btn-primary btn-lg" style={{margin: '.5rem'}}><i className="bi bi-instagram"></i></a>
                <a type="button" className="btn btn-floating btn-dark btn-primary btn-lg" style={{margin: '.5rem'}}><i className="bi bi-twitter"></i></a>
                <a type="button" className="btn btn-floating btn-dark btn-primary btn-lg" style={{margin: '.5rem'}}><i className="bi bi-google"></i></a>
              </div>
            </div>

            <div className={classNames("col-lg-4 col-md-6 mb-4 mb-md-0", styles.serchContainer)} style={{marginTop: '2rem'}}>
              <h5 className="text-uppercase mb-4 pb-1">Procura por Algo</h5>

              <div className="form-outline form-white mb-4">
                <input type="text" id="formControlLg" className="form-control form-control-lg" />
                <label className="form-label" htmlFor="formControlLg">Pesquisa...</label>
              </div>

              <ul className="fa-ul">
                <li className="mb-3">
                  <span className="fa-li"><i className="fas bi-house"/></span><span className="ms-2" style={{marginLeft: '.5rem'}}>1234 Rua Centro, Lobato PR</span>
                </li>
                <li className="mb-3">
                  <span className="fa-li"><i className="fas bi-envelope"/></span><span className="ms-2" style={{marginLeft: '.5rem'}}>info@example.com</span>
                </li>
                <li className="mb-3">
                  <span className="fa-li"><i className="fas bi-phone"/></span><span className="ms-2" style={{marginLeft: '.5rem'}}>+55 44 0800-1234</span>
                </li>
              </ul>
            </div>

            <div className={classNames("col-lg-4 col-md-6 mb-4 mb-md-0", styles.horsContainer)} style={{marginTop: '2rem'}}>
              <h5 className="text-uppercase mb-4">Horário de Atendimento</h5>

              <table className="table text-center text-white">
                <tbody className="font-weight-normal">
                  <tr>
                    <td>Seg - Ter:</td>
                    <td>8am - 9pm</td>
                  </tr>
                  <tr>
                    <td>Sex - Sab:</td>
                    <td>8am - 1am</td>
                  </tr>
                  <tr>
                    <td>Domingo:</td>
                    <td>9am - 10pm</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="text-center p-3" style={{backgroundColor: 'var(--app-bg)'}}>
          © 2021 Copyright: <a className="text-white" href="#">Guilherme Brogio</a>
        </div>
      </footer>

      </div>
  );
}

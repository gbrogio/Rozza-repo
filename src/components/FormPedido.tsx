import React from 'react'//Importante para a criação do componente

import { useRouter } from 'next/router'//Faz a importação do useRouter para setar o elemento router para o uso nas classNames

import styles from '../styles/components/FormPedido.module.css'//Importação do estilo

const classNames = require('classnames');//Funciona para adicionar mais de uma classe nos atributos classNames
import $ from 'jquery'; 

export function FormPedido(){
  const router = useRouter();/* seta o elemento router para o uso nas classNames do projeto adicionando da classe "active"
  ao elemento quando clica no mesmo */
  function modalSucess(){
    let boolean = true
    if (boolean){
      document.getElementById('modalPedido').style.opacity = "1";
      boolean = false
    } else if (!boolean){
      document.getElementById('modalPedido').style.opacity = "0";
      boolean = true
    }
  }
  function closeFunction(){
    document.getElementById('modalPedido').style.opacity = "0";
  }
  return(
    <div className={classNames("container", styles.formContainer)}>
      <div className="row">
        <div className="col-md-4 order-md-2 mb-4">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-muted">Seu carrinho</span>
            <span className="badge badge-secondary badge-pill">3</span>
          </h4>
          <ul className="list-group mb-3">
            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 className="my-0">Pizza nome</h6>
                <small className="text-muted">Breve descrição</small>
              </div>
              <span className="text-muted">R$12</span>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 className="my-0">Drink Nome</h6>
                <small className="text-muted">Breve descrição</small>
              </div>
              <span className="text-muted">R$8</span>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 className="my-0">Porção Nome</h6>
                <small className="text-muted">Breve descrição</small>
              </div>
              <span className="text-muted">R$5</span>
            </li>
            <li className="list-group-item d-flex justify-content-between bg-light">
              <div className="text-success">
                <h6 className="my-0">Promoção code</h6>
                <small>3X4MPL3C0D3</small>
              </div>
              <span className="text-success">-R$5</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span>Total (BRL)</span>
              <strong>$20</strong>
            </li>
          </ul>

          <form className="card p-2">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Código de Promoção"/>
              <div className="input-group-append">
                <button type="submit" className="btn btn-dark btn-secondary">Injetar</button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-md-8 order-md-1">
          <h4 className="mb-3">Informações de Entrega</h4>
          <form className="needs-validation" noValidate>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="firstName">Nome</label>
                <input type="text" className="form-control" id="firstName" placeholder="" required/>
                <div className="invalid-feedback">
                  Por favor Insira um endereço válido.
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="lastName">Sobrenome</label>
                <input type="text" className="form-control" id="lastName" placeholder="" required/>
                <div className="invalid-feedback">
                  Por favor Insira um endereço válido.
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

            <div className="mb-3">
              <label htmlFor="address">Endereço</label>
              <input type="text" className="form-control" id="address" placeholder="Bairro Rua 1234" required/>
              <div className="invalid-feedback">
                Por favor Insira um endereço válido.
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="address2">Endereço 2  <span className="text-muted">(Opcional)</span></label>
              <input type="text" className="form-control" id="address2" placeholder="Apartamento 12"/>
            </div>

            <div className="row">
              <div className="col-md-5 mb-3">
                <label htmlFor="country">País</label>
                <select className="custom-select d-block w-100" id="country" required>
                  <option value="">Escolha...</option>
                  <option>Brasil</option>
                </select>
                <div className="invalid-feedback">
                  Por favor Insira um País válido.
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="state">Estado</label>
                <select className="custom-select d-block w-100" id="state" required>
                  <option value="">Escolha...</option>
                  <option>Paraná</option>
                </select>
                <div className="invalid-feedback">
                  Por favor Insira um Estado válido.
                </div>
              </div>
            </div>
            <hr className="mb-4"/>
            <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="same-address"/>
              <label className="custom-control-label" htmlFor="same-address">O endereço de entrega é igual ao meu endereço de cobrança</label>
            </div>
            <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="save-info"/>
              <label className="custom-control-label" htmlFor="save-info">Salvar informações para um próximo pedido</label>
            </div>
            <hr className="mb-4" style={{background: 'var(--text-secondary)'}}/>

            <h4 className="mb-3">Payment</h4>

            <div className="d-block my-3">
              <div className="custom-control custom-radio">
                <input id="credit" name="paymentMethod" type="radio" className="custom-control-input" checked required/>
                <label className="custom-control-label" htmlFor="credit">Cartão de credito</label>
              </div>
              <div className="custom-control custom-radio">
                <input id="debit" name="paymentMethod" type="radio" className="custom-control-input" required/>
                <label className="custom-control-label" htmlFor="debit">Cartão de debito</label>
              </div>
              <div className="custom-control custom-radio">
                <input id="paypal" name="paymentMethod" type="radio" className="custom-control-input" required/>
                <label className="custom-control-label" htmlFor="paypal">PayPal</label>
              </div>
            </div>
            <div id="infoCard" className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="cc-name">Nome do cartão</label>
                <input type="text" className="form-control" id="cc-name" placeholder="" required/>
                <small className="text-muted">Coloque o nome completo do cartão</small>
                <div className="invalid-feedback">
                  Esse campo é obrigatório.
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="cc-number">Numero do cartão de Credito</label>
                <input type="text" className="form-control" id="cc-number" placeholder="0123 4567 8912 3456" required/>
                <div className="invalid-feedback">
                  Esse campo é obrigatório.
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 mb-3">
                <label htmlFor="cc-expiration">Expiração</label>
                <input type="text" className="form-control" id="cc-expiration" placeholder="" required/>
                <div className="invalid-feedback">
                  Esse campo é obrigatório.
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="cc-cvv">CVV</label>
                <input type="text" className="form-control" id="cc-cvv" placeholder="" required/>
                <div className="invalid-feedback">
                  Codigo de segurança do Cartão é nescessário.
                </div>
              </div>
            </div>
            <hr className="mb-4" style={{background: 'var(--text-secondary)'}}/>
            <a href="#cc-expiration" className="btn btn-dark btn-primary btn-lg btn-block" onClick={modalSucess} type="submit">Fazer Pedido</a>
            <div className="alert alert-success" id="modalPedido" role="alert" style={{opacity: '0'}}>
              <button type="button" className="btn btn-dark close" style={{padding: '.5rem'}} onClick={closeFunction} aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <h4 className="alert-heading">Pedido Feito Com Sucesso!</h4>
              <p>Aww yeah, seu pedido foi feito com sucesso, caso você tenha colocado seu email você pode acompanhar sua entrega, então corre lá.</p>
              <hr/>
              <p className="mb-0">Ah, chegou também um email para você avaliar nossa entrega.</p>
            </div>
          </form>
          
        </div>
      </div>
    </div>  
  );
}

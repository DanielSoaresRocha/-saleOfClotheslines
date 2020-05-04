import React from 'react';

import './styles.css'

import img from '../../assets/corda1.png'

function Logon () {
    return (
        <div className="logon-container">
            <header className="logon-container">
                <h1> EMPRESA CANAÃ VARAIS</h1>

            </header>
            <div className="products-text">
                <pre><h1>    Produtos: </h1></pre>
            </div>

            <div className="item">
                <ul>
                    <li>
                        <img alt="corda" src={img}></img>

                        <div className="centro">
                            <p>Corda de seda verde 4MM - 10 METROS</p>
                            <img alt="corda" src={img}></img>
                            <br></br>
                            <p>Muito resistente, serve para amarrar redes, Carga e Carros, e serve como varal.</p>
                        </div>

                        <div className="preco">
                            <p>
                                <pre>
                                    <h1>
                                        R$<br></br>
                                        6,00<br></br>
                                    </h1>
                                    <h3>   unid.</h3>
                                </pre>
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Logon;
import React from 'react';

import './styles.css'

import logo from '../../assets/logo.png'
import corda1 from '../../assets/corda1.png'
import corda2 from '../../assets/corda2.png'
import corda3 from '../../assets/corda3.png'
import corda4 from '../../assets/corda4.png'

import corda1_1 from '../../assets/corda1_1.png'
import corda2_2 from '../../assets/corda2_2.png'
import corda3_3 from '../../assets/corda3_3.png'
import corda4_4 from '../../assets/corda4_4.png'

import Product from '../../components/product'

function Logon () {
    return (
        <div className="logon-container">
            <header>
                <img src={logo} />
            </header>
            <div className="products-text">
                <pre><h1>  Conheça os nossos produtos: </h1></pre>
            </div>

            <Product
                img={corda1}
                img2={corda1_1}
                title="Corda de seda verde 4MM - 10 METROS"
                description="Muito resistente, serve para amarrar redes, Carga e Carros, e serve como varal."
                price="6,00"
            />
            <Product
                img={corda2}
                img2={corda2_2}
                title="CORDA DE NYLON AZUL - 7 METROS"
                description="Sempre usar em área de cobertura pois aumenta sua duração. É uma corda muito 
                resistente e bem comerciada."
                price="1,20"
            />
            <Product
                img={corda3}
                img2={corda3_3}
                title="CORDA DE NYLON AZUL: 10 METROS"
                description="Sempre usar em área de cobertura pois aumenta sua duração. É uma corda muito 
                resistente e bem comerciada."
                price="1,50"
            />
            <Product
                img={corda4}
                img2={corda4_4}
                title="CORDA DE SEDA AZUL: 2MM - 10 METROS"
                description="Suporta até 1 ano em sol e chuva sem nenhum problema."
                price="3,00"
            />
        </div>
    );
}

export default Logon;
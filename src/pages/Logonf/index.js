import React from 'react';

import './styles.css'
import { useHistory } from 'react-router-dom'
import Logo from '../../components/logo'

import corda1 from '../../assets/corda1.png'
import corda2 from '../../assets/corda2.png'
import corda3 from '../../assets/corda3.png'
import corda4 from '../../assets/corda4.png'

import corda1_1 from '../../assets/corda1_1.png'
import corda2_2 from '../../assets/corda2_2.png'
import corda3_3 from '../../assets/corda3_3.png'
import corda4_4 from '../../assets/corda4_4.png'

import pacote_1 from '../../assets/pacote_1.jpg'
import pacote_2 from '../../assets/pacote_2.jpg'
import pacote_3 from '../../assets/pacote_3.jpg'

import Product from '../../components/product'

function Logon () {
    const history = useHistory()

    return (
        <div className="logon-container">
            <Logo history={history} />
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

            <div className="products-text">
                <pre><h1>  Nossos pacotes: </h1></pre>
            </div>

            <div className="packages">
                <div className="package">
                    <p>SEDA de 10 metros - 10 unidades: <strong>30 R$</strong></p>
                    <img src={pacote_1} alt="pacote um" />
                </div>
                <div className="package">
                    <p>SEDA verde de 10 metros - 5 unidades: <strong>30 R$</strong></p>
                    <img src={pacote_2} alt="pacote dois" />
                </div>
                <div className="package">
                    <p>NYLON de 10 metros - 10 unidades: <strong>15 R$</strong></p>
                    <img src={pacote_3} alt="pacote três" />
                </div>
            </div>

        </div>
    );
}

export default Logon;
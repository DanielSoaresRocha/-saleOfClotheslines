import React from 'react';

import './styles.css'

function Product (props) {
    return (
        <div className="item">
            <div className="container">
                <div className="imagem">
                    <img src={props.img} alt="Imagem do produto" ></img>
                </div>

                <div className="centro">
                    <p>{props.title}</p>
                    <img src={props.img2} alt="Imagem da corda"></img>
                    <br></br>
                    <p>{props.description}</p>
                </div>

                <div className="preco">
                    <pre>
                        <h1>
                            R$<br></br>
                            {props.price}<br></br>
                        </h1>
                        <h3>   unid.</h3>
                    </pre>
                </div>
            </div>
            <div className="preco2">
                <pre>
                    <h1>R$ {props.price}</h1>
                </pre>
                <pre>
                    <h3> unid</h3>
                </pre>
            </div>
        </div>
    );
}

export default Product;
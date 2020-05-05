import React from 'react';

import './styles.css'

function Product (props) {
    return (
        <div className="item">
            <ul>
                <li>
                    <img src={props.img} alt="Imagem do produto" ></img>

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
                </li>
            </ul>
        </div>
    );
}

export default Product;
import React from 'react';

import './styles.css'

function Product (props) {
    return (
        <div className="item">
            <ul>
                <li>
                    <img alt="corda" src={props.img}></img>

                    <div className="centro">
                        <p>{props.title}</p>
                        <img alt="corda" src={props.img2}></img>
                        <br></br>
                        <p>{props.description}</p>
                    </div>

                    <div className="preco">
                        <p>
                            <pre>
                                <h1>
                                    R$<br></br>
                                    {props.price}<br></br>
                                </h1>
                                <h3>   unid.</h3>
                            </pre>
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Product;
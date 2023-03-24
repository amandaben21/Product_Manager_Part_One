import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const All_Products = (props) => {

    const {removeFromDom, products, setProducts} = props;

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then((res) => {
                console.log(res.data);
                setProducts(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const deleteProduct = (personId) => {
        axios.delete("http://localhost:8000/api/products/" + personId)
            .then(res => {
                removeFromDom(personId)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>All Products:</h1>
            {
                products.map((product, index) => {
                    return (
                        <div key={index}>
                            
                            <Link to={`/products/${product._id}`}>{product.title} </Link>
                            |
                            <Link to={`/products/edit/${product._id}`}> Edit </Link>
                            |
                            <button className="deleteBtn" onClick={(e) => {deleteProduct(product._id)}}> Delete </button>
                        </div>
                )})
            }
        </div>
    )
}

export default All_Products
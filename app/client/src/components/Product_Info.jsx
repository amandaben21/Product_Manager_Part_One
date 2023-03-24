import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const Product_Info = (props) => {

    const [product, setProduct] = useState({});
    const {id} = useParams();
    const navigate = useNavigate();
    

    useEffect(() => {
        console.log(id);
        axios.get("http://localhost:8000/api/products/" + id)
            .then(res => {
                console.log(res.data);
                setProduct(res.data);
            })
            .catch(err => console.log(err));
    }, [])

    const deleteProduct = (id) => {
        axios.delete("http://localhost:8000/api/products/" + id)
            .then(res => {
                navigate("/");
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h2>{product.title}</h2>
            <p>{product.price}</p>
            <p>{product.description}</p>
            <button className='deleteBtn' onClick={(e) => {deleteProduct(product._id)}}> Delete </button>
        </div>
    )
}

export default Product_Info
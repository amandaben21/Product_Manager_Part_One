import React, {useState} from 'react'
import Product_Form from '../components/Product_Form';
import All_Products from '../components/All_Products';

const Main = (props) => {

    const [products, setProducts] = useState([]);

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id !== productId));
    }

    return (
        <div>
            <Product_Form products={products} setProducts={setProducts}/>
            <All_Products products={products} setProducts={setProducts} removeFromDom={removeFromDom}/>
        </div>
    )
}

export default Main
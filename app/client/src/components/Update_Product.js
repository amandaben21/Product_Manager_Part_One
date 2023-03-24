import {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';

const Update_Product = () => {

    const {id} = useParams();

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch(err => console.log(err))
    }, [])

    const updateProduct = (e) => {
        e.preventDefault();

        axios.put('http://localhost:8000/api/products/' + id, {
            title,
            price,
            description
        })
            .then(res => {
                console.log(res);
                navigate("/");
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Update a Product</h1>
            <form onSubmit={updateProduct}>
                <div>
                    <label>Title</label>
                    <input type="text" name='title' value={title} onChange={(e) => {setTitle(e.target.value)}} />
                </div>
                <div>
                    <label>Price</label>
                    <input type="number" name='price' value={price} onChange={(e) => {setPrice(e.target.value)}} />
                </div>
                <div>
                    <label>Description</label><br/>
                    <input type="text" name='description' value={description} onChange={(e) => {setDescription(e.target.value)}} />
                </div>
                <input type="submit" value="Update"/>
            </form>
        </div>
    )
}

export default Update_Product
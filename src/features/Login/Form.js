import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import 'components/Button/button.scss'

function FormAddProduct() {

    const [ values, setValues ] = useState({
        name: '',
        price: '',
        size: '',
        description: '',
        img: '',
        discouter: 0,
        color: [
            "#DE9034",
            "#EC42A2",
            "#8568FF"
        ],
        star: 4,
        store: 20,
        categories: '',
        brand: ''
    })

    const handleGetValueForm = (element) => {
        const name = element.target.name;
        let value = element.target.value;

        if(name === 'discouter')
            value = value * 1
        
        setValues(prev => {
            return {
                ...values,
                [name]: value
            }
        })
    }

    const handleSendDataToSever = (e) => {
        e.preventDefault();

        const data = JSON.stringify(values);
        const url = 'https://fe21-db.herokuapp.com/hekto/create'
        
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: data,
        })
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            console.log('Success:', data);
        })  
        .catch((error) => {
            console.error('Error:', error);
        });
    }
  return (
    <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name Product</Form.Label>
            <Form.Control name="name" required type="text" placeholder="Enter name" onChange={handleGetValueForm}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Price</Form.Label>
            <Form.Control name="price" required type="number" placeholder="Enter price" onChange={handleGetValueForm}/>
        </Form.Group>

        <Form.Group className="mb-2">
            <Form.Label htmlFor="disabledSelect">Size</Form.Label>
            <Form.Select name="size" required id="disabledSelect" onChange={handleGetValueForm}>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
                <option>2XL</option>
                
            </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledSelect">Categories</Form.Label>
            <Form.Select name="categories" required id="disabledSelect" onChange={handleGetValueForm}>
                <option>Bags</option>
                <option>Watch</option>
                <option>Camera</option>
                <option>Headphone</option>
                <option>Chair</option>
            </Form.Select>
        </Form.Group>

        <Form.Group className="mb-2">
            <Form.Label htmlFor="disabledSelect">Discounter</Form.Label>
            <Form.Select name="discouter" required id="disabledSelect" onChange={handleGetValueForm}>
                <option value={0}>0</option>
                <option value={5}>5%</option>
                <option value={10}>10%</option>
                <option value={15}>15%</option>
                <option value={20}>20%</option>
            </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledSelect">Disabled select Brand</Form.Label>
            <Form.Select name="brand" required id="disabledSelect" onChange={handleGetValueForm}>
                <option>Coaster Furniture</option>
                <option>Fusion Dot High Fashion</option>
                <option>Unique Furnitture Restor</option>
                <option>Dream Furnitture Flipping</option>
                <option>Young Repurposed</option>
                <option>Green DIY furniture</option>
            </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name Product</Form.Label>
            <Form.Control name="img" required type="text" placeholder="Enter Link Image" onChange={handleGetValueForm}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control required name="description" as="textarea" rows={3} onChange={handleGetValueForm} />
        </Form.Group>

        <button onClick={handleSendDataToSever} className='button'>Add</button>
      
    </Form>
  );
}

export default FormAddProduct;
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function FormAddProduct() {

    const handleChange = (e) => {
        
    }

  return (
    <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name Product</Form.Label>
            <Form.Control type="text" placeholder="Enter name" onChange={handleChange}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Price</Form.Label>
            <Form.Control type="number" placeholder="Enter price" onChange={handleChange}/>
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledSelect">Disabled select Categories</Form.Label>
            <Form.Select id="disabledSelect">
                <option>Bags</option>
                <option>Watch</option>
                <option>Camera</option>
                <option>Headphone</option>
                <option>Chair</option>
            </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledSelect">Disabled select Brand</Form.Label>
            <Form.Select id="disabledSelect">
                <option>Coaster Furniture</option>
                <option>Fusion Dot High Fashion</option>
                <option>Unique Furnitture Restor</option>
                <option>Dream Furnitture Flipping</option>
                <option>Young Repurposed</option>
                <option>Green DIY furniture</option>
            </Form.Select>
        </Form.Group>

        <Form.Group controlId="formFileMultiple" className="mb-3">
            <Form.Label>Multiple files</Form.Label>
            <Form.Control type="file" multiple />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} />
        </Form.Group>

      <Button variant="primary" type="submit">
        Add
      </Button>
    </Form>
  );
}

export default FormAddProduct;
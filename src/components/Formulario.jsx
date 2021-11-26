import React from "react";
import { Fragment, useState } from "react";
import { Button, Form, FormControl, FormGroup, FormLabel, FormText} from 'react-bootstrap';


function Formulario() {

    const initialState = {
        name:'',
        lastname:'',
        email:'',
        terms: false
    }

    const [data, setdata] = useState(initialState)
    //const [error, setError] = useState('');


    const MIN = 2;
    const MAX = 50;
    const GROUP = `[a-zñáéíóúüA-ZÁÉÍÓÚÜÑ]{${MIN},${MAX}}`;
    const VALIDATION = new RegExp(`^(${GROUP})( ${GROUP})*$`);

    const CUSTOM_VALIDATION = (input) => {
        const matchesRegex = VALIDATION.test(input.trim());
      
        if (input.length < MIN) return `Se necesitan mínimo ${MIN} caracteres`;
        else if (input.length > MAX * 4)
          return `Se necesitan aceptan  máximo ${MAX * 4} caracteres`;
        else if (!matchesRegex) return 'Formato inválido';
        else return '';
      };


    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        //console.log("funciona");
        //console.log(value);
        
        setdata({
            ...data, 
            [event.target.name]:value
        });
        //const error = CUSTOM_VALIDATION(event.target.value);
        //setError(error);
    }

    const sendData = (event) => {
        event.preventDefault();
        console.log(`${data.name} ${data.lastname}`)
        //if (!Boolean(error)) alert('Nombre: ');
    }

    return (
        <Fragment>
            <h1>Formulario de contacto</h1>
            <Form onSubmit={sendData}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter name" onChange={handleInputChange}/>
                    {/*Boolean(error) && <p>{error}</p>*/}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicLastname" >
                    <Form.Label>Lastname</Form.Label>
                    <Form.Control type="text" name="lastname" placeholder="Enter lastname" onChange={handleInputChange}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" onChange={handleInputChange}/>
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicSelect">
                    <Form.Select aria-label="Default select example">
                        <option>Select your experience</option>
                        <option value="1">Junior</option>
                        <option value="2">Middle</option>
                        <option value="3">Senior</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckBox">
                    <Form.Check type="checkbox" label="Accept terms and conditions" name="terms" onChange={handleInputChange}/>
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <h3>{data.name} - {data.lastname}</h3>
        </Fragment>
    );
}

export default Formulario;
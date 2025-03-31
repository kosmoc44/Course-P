import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()

    return (
        <div className="vh-100 d-flex justify-content-center align-items-center flex-md-column">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <div className=" d-flex flex-column align-items-start gap-3">
                    <Button variant="primary" type="submit" >
                        Submit
                    </Button>
                    <p>
                        Don't have an account? <span className="clickable under" onClick={() => navigate('/register')}>Sign up here</span>
                    </p>
                </div>
            </Form>
        </div>
    )
}

export default Login    
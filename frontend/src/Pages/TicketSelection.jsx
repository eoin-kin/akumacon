
import Navigation from "../Components/Navigation.jsx";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import React from "react";

export function TicketSelection() {
    const [validated, setValidated] = React.useState(false);
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    }
    return (
        <>
        <Navigation/>
            <br/>
        <div className="mx-5 shadow-lg" style={{backgroundColor:"var(--cta)"}}>
            <h1 className="p-3" style={{color:"var(--highlight)"}}>Order</h1>
            <Form validated={validated} onSubmit={handleSubmit} >
                <Container>
                    <Row>
                        <Col><h5>Over 18s Weekend Pass</h5></Col>
                        <Col>
                            <Form.Select>
                            <option value={"0"}>0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            </Form.Select>
                        </Col>
                    </Row>
                    <Row>
                        <Col><h5>Over 18s Day Pass</h5></Col>
                        <Col>
                            <Form.Select>
                            <option value={"0"}>0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            </Form.Select>
                        </Col>
                    </Row>
                    <Row>
                        <Col><h5>Under 18s Weekend Pass</h5></Col>
                        <Col>
                            <Form.Select>
                            <option value={"0"}>0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            </Form.Select>
                        </Col>
                    </Row>
                    <Row>
                        <Col><h5>Under 18s Day Pass</h5></Col>
                        <Col>
                            <Form.Select>
                            <option value={"0"}>0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            </Form.Select>
                        </Col>
                    </Row>
                    <Row>
                        <Col><h5>Student Weekend Pass (Student ID Required)</h5></Col>
                        <Col>
                            <Form.Select>
                            <option value={"0"}>0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            </Form.Select>
                        </Col>
                    </Row>
                    <Button type="submit">Submit</Button>
                </Container>

            </Form>
        </div>
        </>
    )
}
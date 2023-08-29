import style from "./UserProfile.module.css"
import Calendar from "../Calendar/Calendar";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import { Button, Alert, Card, Container, Row, Col } from "react-bootstrap";


export default function UserProfile(){ 
    
    return (
    
            <Row >
                <Col>
       
            <NavBar/>
            <h1>Citas</h1>
            <Link to={'/appointments/new'}><Button variant="primary">+ Nueva cita</Button></Link>
            <br />
            <br />
            <h2>Próximas</h2>
            <Alert key="secondary" variant="secondary">
            No tienes citas agendadas. Puedes crear una nueva cita.
            </Alert>
            <h2>Pasadas</h2>
            <Card >
                <Card.Body>
                    <Card.Title>Primera cita</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">04 de agosto de 2023 </Card.Subtitle>
                    <Button variant="primary" size="sm">+ Ver notas</Button>
                </Card.Body>
            </Card> 
       
        </Col>
        </Row>
    
        
        
    )}
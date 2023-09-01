import { useNavigate } from "react-router";
import "./style.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AdminInformation from "./AdminInformation/AdminInformation";
import UserTable from './UserTable/UserTable'
import NutriTable from "./NutriTable/NutriTable";
import Button from "react-bootstrap/Button";
import { useEffect } from "react";

export default function AdminView() {
  const tokenAccess = () => {
    return [JSON.parse(window.localStorage.getItem('token')), JSON.parse(window.localStorage.getItem('access'))]
  }
  const navigate = useNavigate();

  useEffect(() => {
    if (tokenAccess()[0]?.role !== "admin" || tokenAccess()[1] !== true) navigate('/')
  }, [tokenAccess()[1]])

  return console.log(tokenAccess()), (
    <Container className="main">
      <Row>
        <Col xs={10} md={12}>
          <Tabs
            defaultActiveKey="profile"
            id="fill-tab-example"
            className="myCalss"
            fill
          >
            <Tab eventKey="profile" title="Mi informacion">
              <Container>
                <AdminInformation />
              </Container>
            </Tab>

            <Tab eventKey="home" title="Nutricionistas">
              <Container className="nutriMain">
                <Button className="my-2" variant="primary" type="button">
                  Crear nuevo Nutricionista
                </Button>

                <Container className="nutriListMain">
                  Mis Nutricionistas
                  <NutriTable />
                  <Button className="my-2" >Borrar Nutricionista</Button>
                </Container>
              </Container>
            </Tab>

            <Tab eventKey="longer-tab" title="Usuarios">
              <Container className="nutriMain">

                <Container className="nutriListMain">
                  Mis Usuarios
                  <UserTable/>
                </Container>
              </Container>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
}
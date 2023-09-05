import "./NutritionistProfile.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ClientsTable from "./ClientsTable/ClientsTable";
import NutriData from "./NutriData/NutriData";
import FutureDates from "./FutureDates/FutureDates";

const NutritionistProfile = () => {
  
  return (
    <Container className="main">
      <Row>
        <Tabs
          defaultActiveKey="profile"
          id="fill-tab-example"
          className="myCalss"
          fill
        >
          <Tab eventKey="profile" title="Mi Perfil">
            <NutriData users />
          </Tab>
          <Tab eventKey="citasfuturas" title="Citas Futuras">
            <FutureDates />
          </Tab>
          <Tab eventKey="clientes" title="Mis Clientes">
            <ClientsTable />
          </Tab>
        </Tabs>
      </Row>
    </Container>
  );
};

export default NutritionistProfile;


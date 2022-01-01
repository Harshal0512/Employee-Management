import "./mainPage.css";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SortBar from "../../components/mainPageComponents/SortBar";
import data from "../../components/mainPageComponents/data";
import Cards from "../../components/mainPageComponents/Cards";
import Navbar from "../../components/mainPageComponents/Navbar";

//new

const Main = () => {
  const filteredData = (type) => {
    const info =
      type === "Everyone"
        ? data.data
        : data.data.filter((el) => el.role === type);

    return info;
  };

  const [updatedData, setData] = useState(filteredData("Everyone"));

  const paginationHandlers = (range) => {
    console.log(updatedData);
    // setData(updatedData[(range[0], range[1])]);
  };

  const sortHandlers = (event) => {
    setData(filteredData(`${event.target.innerText}`));
  };

  return (
    <div className="main">
      <Navbar></Navbar>
      <Container>
        <SortBar
          nums={updatedData.length}
          sortFnc={sortHandlers}
          pagFnc={paginationHandlers}
        ></SortBar>
      </Container>
      <Container fluid>
        <Row>
          {updatedData.map((a) => (
            <Col key={a.id}>
              <Cards data={a}></Cards>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Main;
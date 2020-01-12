import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { data } from "./data";
import { tableTransform } from "./dataTransform";
import PickaxeTable from "./components/PickaxeTable";
import PickaxeChart from "./components/PickaxeChart";

export default function App() {
  const tableData = tableTransform(data);

  return (
    <Container>
      <Row>
        <Col>
          <h2>Line Chart</h2>
          <PickaxeChart data={tableData} />
        </Col>
      </Row>

      <Row>
        <Col>
          <h2>Table</h2>
          <PickaxeTable data={tableData} />
        </Col>
      </Row>
    </Container>
  );
}

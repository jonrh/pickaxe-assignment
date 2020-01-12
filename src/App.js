import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { data } from "./data";
import {chartTransform, tableTransform} from "./transforms/Transform";
import PickaxeTable from "./components/PickaxeTable";
import PickaxeChart from "./components/PickaxeChart";

export default function App() {
  const chartData = chartTransform(data);
  const tableData = tableTransform(data);

  return (
    <Container>
      <Row>
        <Col>
          <h2>Line Chart</h2>
          <PickaxeChart data={chartData} />
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

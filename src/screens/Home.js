import React from "react";
import { Col, Row } from "antd";
import { Hero, Board, Grid } from "../components";

const Home = () => {
  return (
    <div>
      <Row gutter={60}>
        <Col span={12}>
          <Hero />
        </Col>
        <Col span={12}>
          <Grid />
        </Col>
      </Row>
      <Row>
        <Board />
      </Row>
    </div>
  );
};

export default Home;

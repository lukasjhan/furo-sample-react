import React from "react";
import { Divider } from "antd";
import { Col, Row } from "antd";
import { Hero, Board, Grid } from "../components";

const Home = () => {
  return (
    <div>
      <Row gutter={80}>
        <Col span={12}>
          <Hero />
          <Divider />
          <Grid />
        </Col>
        <Col span={12}>
          <Board />
        </Col>
      </Row>
    </div>
  );
};

export default Home;

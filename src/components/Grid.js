import React from "react";
import { Col, Row } from "antd";
import { LinkOutlined } from "@ant-design/icons";

const Content = () => {
  return (
    <div>
      <a style={{ display: "block", fontSize: "1.2em" }}>
        <LinkOutlined style={{ marginRight: 5 }} />
        Configure other identity providers
      </a>

      <span>
        Auth0 supports social providers as Facebook, Twitter, Instagram and
        100+, Enterprise providers as Microsoft Office 365, Google Apps, Azure,
        and more. You can also use any OAuth2 Authorization Server.
      </span>
    </div>
  );
};

const Grid = () => {
  return (
    <div>
      <h1
        style={{
          fontSize: "2em",
          fontWeight: 600,
          textAlign: "center",
          padding: "20px 0",
        }}
      >
        How Do I Do Next?
      </h1>
      <Row gutter={50} style={{ marginBottom: 50 }}>
        <Col span={12}>
          <Content />
        </Col>
        <Col span={12}>
          <Content />
        </Col>
      </Row>
      <Row gutter={20}>
        <Col span={12}>
          <Content />
        </Col>
        <Col span={12}>
          <Content />
        </Col>
      </Row>
    </div>
  );
};

export default Grid;

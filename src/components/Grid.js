import React from "react";
import { Col, Row } from "antd";
import { LinkOutlined } from "@ant-design/icons";

const Content = ({ subject, content, link }) => {
  return (
    <div>
      <a
        href={link}
        style={{
          display: "block",
          fontSize: "1.2em",
          fontWeight: 600,
          marginBottom: 5,
        }}
        target="_blank"
      >
        <LinkOutlined style={{ marginRight: 5 }} />
        {subject}
      </a>
      <span>{content}</span>
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
        더 알아보기
      </h1>
      <Row gutter={50} style={{ marginBottom: 50 }}>
        <Col span={12}>
          <Content
            subject={"Furo 콘솔"}
            content={"나의 프로젝트 대시보드를 확인해 보세요"}
            link={"https://console.furo.one/projects"}
          />
        </Col>
        <Col span={12}>
          <Content
            subject={"Docs"}
            content={"Furo 공식 문서를 통해 더 다양한 로그인 기능을 만나보세요"}
            link={"https://docs.furo.one/"}
          />
        </Col>
      </Row>
      <Row gutter={20}>
        <Col span={12}>
          <Content
            subject={"Discord"}
            content={
              "Furo의 최신 소식을 실시간으로 접하고, 개발자 커뮤니티에 참여해 보세요"
            }
            link={"https://discord.com/invite/g7pUbYeDWK"}
          />
        </Col>
        <Col span={12}>
          <Content
            subject={"Furoboard"}
            content={
              "내 목소리가 Furo의 다음 업데이트에 반영될 수 있습니다. 여러분의 의견을 공유해 주세요 "
            }
            link={"https://discord.com/invite/g7pUbYeDWK"}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Grid;

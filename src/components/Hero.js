import React from "react";

const Hero = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        // width: "70%",
        margin: "auto",
        padding: "60px 0",
      }}
    >
      <div
        style={{
          width: "80px",
          height: "80px",
          margin: "10px",
          backgroundImage: `url('/react.svg')`,
          backgroundSize: "cover",
        }}
      />
      <h1 style={{ fontSize: "2.5em", fontWeight: 600 }}>
        Furo에 오신 것을 환영합니다
      </h1>
      <p style={{ fontSize: "1.5em", fontWeight: 400 }}>
        React.js 어플리케이션을 통해 Furo의 빠르고 직관적인 로그인을 경험해
        보세요
      </p>
    </div>
  );
};

export default Hero;

import React from "react";

const Hero = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        // backgroundColor: "red",
        width: "70%",
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
        React.js Sample Project
      </h1>
      <p style={{ fontSize: "1.5em", fontWeight: 300 }}>
        This is a sample application that demonstrates an authentication flow
        for an SPA, using React.js
      </p>
    </div>
  );
};

export default Hero;

import React from "react";
import Hero from "../components/Hero";
import { Divider } from "antd";
import Content from "../components/Grid";

const Home = () => {
  return (
    <div>
      <Hero />
      <Divider />
      <Content />
    </div>
  );
};

export default Home;

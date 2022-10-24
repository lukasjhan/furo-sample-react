import React from "react";

import { Layout } from "antd";

const Footer = () => {
  return (
    <Layout.Footer
      style={{
        textAlign: "center",
        background: "#fff",
        borderTop: "1px solid #00000008",
        marginTop: "5em",
      }}
    >
      ©2022 Team Hopae Inc. All Rights Reserved
    </Layout.Footer>
  );
};

export default Footer;

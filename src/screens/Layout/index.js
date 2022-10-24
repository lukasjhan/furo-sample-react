import React, { useEffect } from "react";
import { Layout } from "antd";
import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { useFuro } from "furo-react";

const { Content } = Layout;

function RequireAuth({ children }) {
  const { isLoading, isAuthenticated, loginWithRedirect } = useFuro();

  useEffect(() => {
    if (isLoading || isAuthenticated) return <>Loading...</>;
    loginWithRedirect();
  }, [isLoading, isAuthenticated, loginWithRedirect]);

  return isAuthenticated ? children : <></>;
}

const LayoutWithRoute = ({ auth }) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout style={{ backgroundColor: "white" }}>
        <Header />
        <Content
          style={{
            padding: "40px 0px",
            maxWidth: 960,
            margin: "auto",
            width: "100%",
          }}
        >
          {auth ? (
            <RequireAuth>
              <Outlet />
            </RequireAuth>
          ) : (
            <Outlet />
          )}
        </Content>
        <Footer />
      </Layout>
    </Layout>
  );
};

export default LayoutWithRoute;

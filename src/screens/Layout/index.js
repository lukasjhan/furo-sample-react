import React, { useEffect } from "react";
import { Layout } from "antd";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { useFuro } from "furo-react";
import styles from "../../styles/layout.module.css";

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
    <Layout className={styles.container}>
      <Layout className={styles.body}>
        <Content className={styles.content}>
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

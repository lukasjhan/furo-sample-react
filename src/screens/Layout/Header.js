import React from "react";
import { Layout, Menu, Dropdown, Avatar } from "antd";
import { useFuro } from "furo-react";
import {
  UserOutlined,
  ImportOutlined,
  ExportOutlined,
} from "@ant-design/icons";
import styles from "../../styles/layout.module.css";

const Header = () => {
  const { logout, user, loginWithRedirect } = useFuro();

  const menu = (
    <Menu>
      {user && (
        <Menu.Item key="1" icon={<UserOutlined />}>
          {user.email}
        </Menu.Item>
      )}
      <Menu.Divider />
      {user ? (
        <Menu.Item key="2" icon={<ImportOutlined />} onClick={logout}>
          로그아웃
        </Menu.Item>
      ) : (
        <Menu.Item
          key="2"
          icon={<ExportOutlined />}
          onClick={loginWithRedirect}
        >
          로그인
        </Menu.Item>
      )}
    </Menu>
  );

  return (
    <Layout.Header className={styles.header}>
      <div className={styles.nav}>
        <a href="https://www.furo.one/" target={"_blank"} rel="noreferrer">
          <div
            style={{
              backgroundImage: `url('/furo_text.svg')`,
            }}
            className={styles.logo}
          ></div>
        </a>
        <Menu theme="dark" mode="horizontal" selectable={false}>
          <Menu.Item
            key="1"
            style={{ marginLeft: "auto" }}
            onClick={() => window.open("https://docs.furo.one")}
          >
            문서
          </Menu.Item>
          <Dropdown overlay={menu} placement="bottomRight">
            <Menu.Item key="2">
              <Avatar size={40} icon={<UserOutlined />} src={user?.picture} />
            </Menu.Item>
          </Dropdown>
        </Menu>
      </div>
    </Layout.Header>
  );
};

export default Header;

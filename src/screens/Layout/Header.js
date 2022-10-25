import React, { useContext } from "react";
import { Layout, Menu, Dropdown, Avatar, Tooltip } from "antd";
import { useFuro } from "furo-react";
import {
  UserOutlined,
  ImportOutlined,
  ExportOutlined,
} from "@ant-design/icons";
import styles from "../../styles/layout.module.css";
import { ConfigContext } from "../../contexts/ConfigContext";

const Header = () => {
  const { logout, user, loginWithRedirect } = useFuro();
  const hasClientId = useContext(ConfigContext);

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
          disabled={!hasClientId}
        >
          {!hasClientId ? (
            <Tooltip
              title={"Client ID가 설정되지 않았습니다"}
              placement="bottom"
              color={"red"}
            >
              로그인
            </Tooltip>
          ) : (
            "로그인"
          )}
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
          <Dropdown overlay={menu} placement="bottomRight">
            <Menu.Item key="1" style={{ marginLeft: "auto" }}>
              <Avatar size={40} icon={<UserOutlined />} src={user?.picture} />
            </Menu.Item>
          </Dropdown>
        </Menu>
      </div>
    </Layout.Header>
  );
};

export default Header;

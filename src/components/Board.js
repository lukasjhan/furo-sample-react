import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Button, Typography } from "antd";
import { useFuro } from "furo-react";
import { WarningOutlined } from "@ant-design/icons";

const { Text } = Typography;

const Board = () => {
  const { user, loginWithRedirect } = useFuro();
  const hasClientId =
    process.env.REACT_APP_CLIENT_ID === "YOUR_CLIENT_ID_GOES_HERE";

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#111b27",
          width: "100%",
          height: "70%",
          padding: 20,
          borderRadius: 15,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {user ? (
          <SyntaxHighlighter
            language="javascript"
            style={coldarkDark}
            wrapLines={true}
            wrapLongLines={true}
          >
            {JSON.stringify(user, null, "\t")}
          </SyntaxHighlighter>
        ) : (
          <>
            <Text type="danger" style={{ paddingBottom: 10 }}>
              <WarningOutlined style={{ paddingRight: 5 }} />
              Client ID 가 설정되지 않았습니다
            </Text>
            <Button
              type="primary"
              size="large"
              shape="round"
              onClick={loginWithRedirect}
              disabled={!hasClientId}
            >
              로그인 하러 가기
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default Board;

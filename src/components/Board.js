import React, { useContext } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Button, Typography, Tooltip } from 'antd';
import { useFuro } from 'furo-react';
import { WarningOutlined } from '@ant-design/icons';
import styles from '../styles/board.module.css';
import { ConfigContext } from '../contexts/ConfigContext';
import { ImportOutlined } from '@ant-design/icons';

const { Text } = Typography;

const Board = () => {
  const { user, loginWithRedirect, logout } = useFuro();
  const hasClientId = useContext(ConfigContext);

  return (
    <div className={styles.container}>
      <div className={styles.code}>
        {user ? (
          <>
            <SyntaxHighlighter
              language='javascript'
              style={coldarkDark}
              wrapLines={true}
              wrapLongLines={true}
            >
              {'// User Info\n' + JSON.stringify(user, null, '\t')}
            </SyntaxHighlighter>

            <div className={styles.button_wrapper}>
              <Tooltip title={'로그아웃'}>
                <ImportOutlined
                  className={styles.icon_logout}
                  onClick={logout}
                />
              </Tooltip>
            </div>
          </>
        ) : (
          <>
            {!hasClientId && (
              <Text type='danger' className={styles.warning}>
                <WarningOutlined className={styles.icon_warning} />
                <Tooltip
                  title={
                    <a
                      href='https://github.com/furo-official/furo-sample-react#%ED%99%98%EA%B2%BD-%EC%84%A4%EC%A0%95'
                      target={'_blank'}
                      rel='noreferrer'
                    >
                      설정하러 가기
                    </a>
                  }
                  color={'#ffffff10'}
                >
                  Client ID
                </Tooltip>{' '}
                가 설정되지 않았습니다
              </Text>
            )}
            <Button
              type='primary'
              size='large'
              shape='round'
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

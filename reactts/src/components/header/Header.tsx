import React from "react";
import styles from './Header.module.css'
import { Typography, Menu, Layout, Input, Button, Dropdown} from "antd";
import { GlobalOutlined } from "@ant-design/icons";

export const Header: React.FC = () => {

  return (
    <div  className={styles["app-header"]}>
      <div className={styles["top-header"]}>
        <div className={styles.inner}>
          <Typography.Text>让旅游更幸福</Typography.Text>
          <Dropdown.Button
            style={{ marginLeft: 15 }}
            overlay={
              <Menu>
                <Menu.Item>中文</Menu.Item>
                <Menu.Item>English</Menu.Item>
              </Menu>
            }
            icon={<GlobalOutlined />}
          >
            语言
          </Dropdown.Button>
          <Button.Group className={styles["button-group"]}>
            <Button>注册</Button>
            <Button>登陆</Button>
          </Button.Group>
        </div>
      </div>
    </div>
  );
}
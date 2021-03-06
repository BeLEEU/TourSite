import React from "react";
import {Menu} from 'antd'
import {sideMenuList} from './mockup'
import { GifOutlined } from "@ant-design/icons";
import styles from './SideMenu.module.css'

export const SideMenu: React.FC = () => {

  return (
    <Menu mode={'vertical'} className={styles['side-menu']}>
      {sideMenuList.map((m, index) => (
        <Menu.SubMenu
          key={`side-menu-${index}`}
          title={
            <span>
              <GifOutlined />
              {m.title}
            </span>}
        >
          {m.subMenu.map((sm, smindex) => (
            <Menu.SubMenu
              key={`sub-menu-${smindex}`}
              title={
                <span>
                  <GifOutlined />
                  {m.title}
                </span>}
            >
              {sm.subMenu.map((sms, smsindex) => (
                <Menu.Item key={`sub-sub-menu-${smsindex}`}>
                  <span>
                  <GifOutlined />
                  {sms}
                  </span>
                </Menu.Item>
              ))}
            </Menu.SubMenu>
          ))}
        </Menu.SubMenu>
      ))}
    </Menu>    
  )
}
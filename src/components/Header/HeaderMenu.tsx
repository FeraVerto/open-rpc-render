import { Layout, Menu } from 'antd';
import React from 'react';

const { Header } = Layout;

export const HeaderMenu = () => {

    return (
        <Header className="header">
            <div className="logo"/>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={ [ '1' ] }>
                <Menu.Item key="1">Info</Menu.Item>
                <Menu.Item key="2">nav 1</Menu.Item>
                <Menu.Item key="3">nav 2</Menu.Item>
                <Menu.Item key="4">nav 3</Menu.Item>
            </Menu>
        </Header>
    )
}
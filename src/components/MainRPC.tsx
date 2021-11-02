import React from 'react'
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import { HeaderMenu } from './Header/HeaderMenu';
import { SiderMenu } from './SiderMenu/SiderMenu';
import { MainContent } from './MainContent/MainContent';
import { AddressBar } from './AddressBar/AddressBar';

export const MainRPC = () => {
    return (
        <div>
            <AddressBar/>
            <Layout>
                <HeaderMenu/>
                <Layout>
                    <SiderMenu/>
                    <MainContent/>
                </Layout>
            </Layout>
        </div>
    )
}
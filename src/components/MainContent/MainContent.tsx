import { Layout } from 'antd';
import React from 'react';

const { Content } = Layout;

export const MainContent = () => {
    return (
        <Layout style={ { padding: '0 24px 24px' } }>
            <Content
                className="site-layout-background"
                style={ {
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                } }
            >
                Content
            </Content>
        </Layout>
    )
}
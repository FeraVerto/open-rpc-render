import { Input } from 'antd';
import React from 'react';

export const AddressBar = () => {
    return (
        <>
            <Input size="large" addonBefore="https://" defaultValue="mysite"/>
        </>
    )
}
import { Button, Input } from 'antd';
import React, { useState } from 'react';
import s from './AddressBar.module.css'

export const AddressBar = () => {
    // eslint-disable-next-line no-unused-vars
    const [ valueInput, setValueInput ] = useState<string>('')

    const handleAdress = (e: { target: { value: string } }) => {
        setValueInput(e.target.value)
    }
    const sendAddress = () => {
        console.log('e')
    }
    return (
        <div className={ s.address_block }>
            <Input size="large" addonBefore="https://" defaultValue="mysite" onChange={ (e: any) => handleAdress(e) }/>
            <Button className={ s.button } onClick={ sendAddress }
            >Go</Button>
        </div>
    )
}
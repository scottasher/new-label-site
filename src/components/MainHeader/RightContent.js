import React from 'react';
import { Tooltip, Button } from 'antd';
import { InstagramOutlined, QuestionCircleOutlined, ShoppingCartOutlined  } from '@ant-design/icons';
import { Link, Redirect } from 'react-router-dom';

export default function(props) {
    return (
        <div className='right'>
            <div style={{ display: 'inline-block' }}>
                <Button onClick={() => <Redirect to="/members/login" />}>Member Login</Button>
            </div>
            <Tooltip title='Help'>
                <Link
                    to="/contact"
                    className='action'
                >
                    <QuestionCircleOutlined />
                </Link>
            </Tooltip>
            <div className="action">
                <a href="https://www.instagram.com/melodiousdin"><InstagramOutlined /></a>
            </div>
            <div className="action">
                <a href="https://shop.melodiousdin.com/"><ShoppingCartOutlined /></a>
            </div>
        </div>
    )
}
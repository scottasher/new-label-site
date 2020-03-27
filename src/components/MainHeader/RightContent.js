import React from 'react';
import { Tooltip } from 'antd';
import { InstagramOutlined, QuestionCircleOutlined, ShoppingCartOutlined  } from '@ant-design/icons';
import { Link } from 'react-router-dom';

export default function(props) {
    return (
        <div className='right'>
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
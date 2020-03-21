import React, { useState } from 'react';
import { Row, Col } from 'antd';
import AuthorInfo from './AuthorInfo';
import { fetchArticle } from '../../../actions/articles'
export default function Show(props) {

    return (
        <>
            <Row>
                <Col span={24}>
                    <AuthorInfo {...props} />
                </Col>
                <Col span={24}>col</Col>
                <Col span={24}>col</Col>
            </Row>
        </>
    )
}
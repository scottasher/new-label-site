import React, { useEffect } from 'react';
import { Row, Col, Spin, Card } from 'antd';
import { connect } from 'react-redux';
import AuthorInfo from './AuthorInfo';
import MainPost from './MainPost';
import ExtraInfo from './ExtraInfo';
import { fetchArticle } from '../../../actions/articles';

function Show(props) {
    useEffect(() => {
        if(props.match.params.id) {
            props.fetchArticle(props.match.params.id, props.history)
        }
    },[props.match.params.id])
    console.log(props)
    if(props.loading) {
        return <Spin />
    }
    return (
        <div className="article-show">
            <Card>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col xs={24} md={5}>
                        <Row>
                            <Col md={12}></Col>
                            <Col md={12}><AuthorInfo {...props} /></Col>
                        </Row>
                    </Col>
                    <Col xs={24} md={14}>
                        <MainPost {...props} />
                    </Col>
                    <Col xs={24} md={5}>
                        <ExtraInfo {...props} />
                    </Col>
                </Row>
            </Card>
        </div>
    )
}

function mapStateToProps({ article, loading }) {
    return { article, loading };
}

export default connect(mapStateToProps, { fetchArticle })(Show)
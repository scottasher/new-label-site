import React, { useEffect } from 'react';
import ArticleCard from '../../components/ArticleCard';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchArticles } from '../../actions/articles';
import './index.less';

function renderArticles(posts) {
    return posts.map((post, index) => {
        return (
            <Col key={index} xs={24} sm={12} md={6} >  
                <Link to={`/articles/${post.id}`}>       
                    <ArticleCard article={post} />
                </Link>
            </Col>
        )
    })
}

function Articles(props) {
    useEffect(() => {
        props.fetchArticles();
    }, []);
    
    return (
        <div>
            <Row gutter={[8, 8]}>
                {renderArticles(props.articles)}
            </Row>
        </div>
    )
}

function mapStateToProps({ articles }) {
    return { articles }
}

export default connect(mapStateToProps, { fetchArticles })(Articles);
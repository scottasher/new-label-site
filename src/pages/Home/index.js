import React, { useState, useEffect } from 'react';
import Carousel from '../../components/Carousel';
import { fetchArticles } from '../../actions/articles';
import { connect } from 'react-redux';  
import ArticleCard from '../../components/ArticleCard';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';

function renderArticles(posts) {
    return posts.map((post, index) => {
        return (
            <Col key={index} xs={24} sm={12} md={8} >  
                <Link to={`/articles/${post.id}`}>       
                    <ArticleCard article={post} />
                </Link>
            </Col>
        )
    })
}

function Home(props) {
    useEffect(() => {
        props.fetchArticles()
    }, []);

    function renderCarousel(data) {
        return data.filter(d => {
            if(!d.image) {
                return false
            }
            return true
        }).map(obj => {    
            console.log(obj.image)        
            return {
                id: obj.id,
                image: obj.image.path,
                link: `/articles/${obj.id}`,
                name: obj.title,
            }
        })
    }

    return (
        <div>
            <Carousel data={renderCarousel(props.articles)} /> 
            <Row gutter={[8, 8]}>
                {renderArticles(props.articles)}
            </Row>
        </div>
    )
}

function mapStateToProps({ articles }) {
    return { articles };
}

export default connect(mapStateToProps, { fetchArticles })(Home);
import React, { useState, useEffect } from 'react';
import Carousel from '../../components/Carousel';
import { fetchArticles } from '../../actions/articles';
import { connect } from 'react-redux';  

function Home(props) {
    const [articleCarousel, setArticleCarousel] = useState([]); 
    const [loading, setLoading] = useState(true);

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
        </div>
    )
}

function mapStateToProps({ articles }) {
    return { articles };
}

export default connect(mapStateToProps, { fetchArticles })(Home);
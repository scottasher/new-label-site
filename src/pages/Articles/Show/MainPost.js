import React from 'react';
import { Typography, Skeleton } from 'antd';
import parse from 'html-react-parser';

const { Title, Paragraph, Text } = Typography;

export default function MainPost(props) {
    if(!props.article.image) {
        return <Skeleton active />
    }
    return (
        <Typography style={{ fontFamily: 'Tiempos,Georgia,serif' }}>
            <Title>{props.article.title}</Title>
            <div className="article-text-snip">
                {props.article.textSnippet}
            </div>
            <div style={{ paddingBottom: 30 }}>
                <img 
                    style={{ maxWidth: '100%', width: '100%' }} 
                    src={props.article.image.path} 
                    alt={props.article.image.name} 
                />
                <span style={{ float: 'right', fontStyle: 'italic' }}>Image credits</span>
            </div>
            <div className="article-body">
                {parse(props.article.body || '<p>Loading...</p>')}
            </div>
        </Typography>
    )
}

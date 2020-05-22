import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { Skeleton, Divider, Row, Col } from 'antd';
import { formatDistance } from 'date-fns';

function renderAuthor(author) {
    if(!author) {
        return <Skeleton active />
    }
    return author.name
}

function renderTags(tags) {
    if(!tags) {
        return null;
    } else {
        return _.map(tags, res => {
            return (
                <li className='article-tags' key={res}>
                    <span className='tag-slash'>/</span><Link to='#'>{res}</Link>
                </li>
            );
        })
    }
}

function renderCategory(category) {
    if(!category) {
        return <h3>Uncategorized</h3>;
    } else {
        const formatted = category.charAt(0).toUpperCase() + category.slice(1)
        switch (formatted) {
            case 'Release':
                return <h3 className='article-category-h3' style={{ color: 'rgb(9, 116, 230)' }} >{formatted}</h3>;
            case 'Events':
                return <h3 className='article-category-h3' style={{ color: 'rgb(92, 169, 124)' }} >{formatted}</h3>;
            case 'Miscellaneous':
                return <h3 className='article-category-h3' style={{ color: 'rgb(228, 69, 69)' }} >{formatted}</h3>;
            default:
                return <h3>Uncategorized</h3>;
        }
    }
}

function renderDate(postDate) {
    if(!postDate) {
        return null;
    } else {
        let formatDate = formatDistance(new Date(postDate), new Date())

        return formatDate + " ago"
    }
}

export default function AuthorInfo(props) {
    const { author, tags, category, createdAt } = props.article;
    return (
        <>
            <Row>   
                <div>{renderCategory(category)}</div>
                <Col xs={24}><span>By: <Link to='#'>{renderAuthor(author)}</Link></span></Col>
                <Col xs={24}>
                    <ul style={{ padding: '14px 0', listStyle: 'none' }}>
                        {renderTags(tags)}
                    </ul>
                </Col>
                <Col xs={24}>{renderDate(createdAt)}</Col>
            </Row>
        </>
    )
}
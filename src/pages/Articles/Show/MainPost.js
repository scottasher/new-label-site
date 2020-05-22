import React from 'react';
import { Typography, Skeleton } from 'antd';
import { convertFromRaw, EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg'
import parse from 'html-react-parser';

const { Title } = Typography;

export default function MainPost(props) {
    let body;
    if(!props.article.body) {
        body = EditorState.createEmpty()
    } else {
        if(props.article.body.blocks) {
            body = EditorState.createWithContent(
                convertFromRaw(props.article.body)
            ) ;
        }
    }
    console.log(body)
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
                <Editor editorClassName="body-editor" toolbarHidden editorState={body} readOnly={true} />
            </div>
        </Typography>
    )
}

import React, { useEffect, useState } from 'react';
import { Layout, Row, Col, List, Divider, Input, Tooltip } from 'antd';
import Icon, { InfoCircleOutlined, MailOutlined, InstagramOutlined} from '@ant-design/icons';
import { getSiteMap } from '../../utils';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import menu from '../../config/main.routes';
import { connect } from 'react-redux';
import { formatDistance } from 'date-fns';
import { fetchLatestArticles } from '../../actions/articles';
import { mailingListSignUp } from '../../actions/utils';
import { SpotifySvg } from '../Svg';

const SpotifyIcon = props => <Icon component={SpotifySvg} {...props} />;
const { Footer } = Layout;
const date = format(new Date(),'yyyy');
const siteMap = getSiteMap(menu);
const employeeMap = [
    {path: 'https://admin.melodiousdin.com', name: 'Employee Login'},
]
function MainFooter(props) {
    useEffect(() => {
        if(!props.articles) {
            setTimeout(() => props.fetchLatestArticles(), 100)
        }
    }, [props.articles])

    return (
        <Footer style={{ color: '#fff', backgroundColor: '#131313', padding: '24px 20px' }}>
            <Row gutter={48}>
                <Col style={{ paddingBottom: 30 }} xs={24} md={8}>
                    <h2 style={{ color: '#fff' }}>STAY CONNECTED</h2>
                    <div style={{ color: 'rgba(255, 255, 255, 0.45)', paddingBottom: 20, paddingLeft: 20 }}>Join our mailing list and be first to get exclusive updates</div>
                    <div>
                        <Input.Search 
                            id="email"
                            enterButton="Sign up"
                            size="large"
                            onSearch={value => props.mailingListSignUp(value)}
                            placeholder="Enter your email"
                            prefix={<MailOutlined className="site-form-item-icon" />}
                            suffix={
                              <Tooltip 
                                title="By signing up you agree to recieve monthly news letter updating you on what we are doing, plus be entered into our monthly giveaways"
                            >
                                <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                              </Tooltip>
                            }
                        />
                    </div>
                    <div>
                        <SpotifyIcon size="3em" style={{ fontSize: '16px', color: '#fff' }} />
                    </div>
                    <Divider />
                </Col>
                <Col style={{ paddingBottom: 30 }} xs={24} md={8}>
                    <h2 style={{ color: '#fff' }}>NAVIGATE</h2>
                    <Row>
                        <Col span={8}>
                            <h4 style={{ color: '#fff' }}>SITE MAP</h4>
                            <ul style={{ padding: 0, listStyle: 'none' }}>
                                {siteMap.map((obj, index) => {
                                    return (
                                        <li span style={{ margin: '10px 8px', textTransform: 'capitalize' }} key={index}>
                                            <Link style={{ color: '#fff' }} to={obj.path}>
                                                {obj.name}
                                            </Link>
                                        </li>
                                    )
                                })} 
                            </ul>
                        </Col>
                        <Col span={8}>
                            <h4 style={{ color: '#fff' }}>EMPLOYEE</h4>
                            <ul style={{ padding: 0, listStyle: 'none' }}>
                                {employeeMap.map((obj, index) => {
                                    return (
                                        <li span style={{ margin: '10px 8px', textTransform: 'capitalize' }} key={index}>
                                            <a style={{ color: '#fff' }} href={obj.path}>
                                                {obj.name}
                                            </a>
                                        </li>
                                    )
                                })} 
                            </ul>
                        </Col>
                    </Row>
                    <Divider />
                </Col>
                <Col style={{ paddingBottom: 30 }} xs={24} md={8}>
                    <div>
                        <h2 style={{ color: '#fff' }}>LATEST ARTICLES</h2>
                        <List
                            itemLayout="horizontal"
                            dataSource={props.latestArticles}
                            loading={props.loading}
                            renderItem={item => (
                                <List.Item>
                                    <List.Item.Meta
                                        title={(
                                            <div>
                                                <Link style={{ color: '#fff' }} to={`/articles/${item.id}`}>{item.title}</Link>
                                                <span 
                                                    style={{ color: 'rgba(255, 255, 255, 0.45)', float:'right' }}
                                                >
                                                    {formatDistance(new Date(item.createdAt), new Date(), { addSuffix: true })}
                                                </span>
                                            </div>
                                        )}
                                        description={item.textSnippet.length >= 130 ? item.textSnippet.slice(0, 129) + '...' : item.textSnippet}
                                    />
                                </List.Item>
                            )}
                        />
                    </div>
                    <Divider />
                </Col>
            </Row>
            <Divider />
            <div style={{ textAlign: 'center' }}>New Site ©{date}</div>
        </Footer>
    )
};

function mapStateToProps({ latestArticles, loading }) {
    return { latestArticles, loading }
}

export default connect(mapStateToProps, { fetchLatestArticles, mailingListSignUp })(MainFooter)
import React from 'react';
import { Card, Row, Col } from 'antd';
import ContactForm from '../../components/ContactForm'
import { Typography } from 'antd';
import { Link } from 'react-router-dom';

const { Title, Paragraph, Text } = Typography;
export default function Contact(props) {
    return (
        <div>
            <Card bordered={false}>
                <Row gutter={48}>
                    <Col xs={24} md={12} >
                        <div>
                            <Typography>
                                <Title>Contact Us</Title>
                            </Typography>
                            <ContactForm/>
                        </div>
                    </Col>
                    <Col xs={24} md={12} >
                        <Typography>
                            <Title>Information</Title>
                            <Paragraph>
                                We are currently under a transformation as a company. We are aiming to refocus our direction
                                as a brand entirley. We feel we haven't released our full potential, our goal now is to 
                                create a haven for musiciansto come with us on a new journey as we try and create a new way 
                                of develpoing artists. 
                            </Paragraph>
                            <Title level={2}>Recording</Title>
                            <Paragraph>
                                We recently opened up a small intimate recording studio in Whittier, Ca. With this we hope 
                                to record not just our bands on the label but also outside clients who are intersted in the 
                                sound we are producing. 
                                <Text strong>
                                    If you would like to record with us please contact us through our Recording Scheduling Form. 
                                    Below you will find a link to the form plus links to our gear and samples of what we have recorded.
                                    Thank you for your support!
                                </Text>.
                            </Paragraph>
                            <Paragraph>
                                <ul>
                                    <li>
                                        <Link to="/recording/schedule">Recording Scheduling Form</Link>
                                    </li>
                                    <li>
                                        <Link to="/recording/gear">Gear we use</Link>
                                    </li>
                                    <li>
                                        <Link to="/recording/sound">Listen to our sound</Link>
                                    </li>
                                </ul>
                            </Paragraph>
                        </Typography>
                    </Col>
                </Row>
            </Card>
        </div>
    )
}
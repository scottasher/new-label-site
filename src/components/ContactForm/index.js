import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { contactUs } from '../../actions/utils';
import { connect } from 'react-redux';

const validateMessages = {
    required: 'This field is required!',
    types: {
        email: 'Not a validate email!',
        number: 'Not a validate number!',
    },
};

function ContactForm(props) {
    const [form] = Form.useForm()
    const onFinish = values => {
        if(!values.verify) {
            props.contactUs(values);
            setTimeout(() => {
                form.setFieldsValue({
                    name: '',
                    email: '',
                    body: '',
                })
            }, 200)
        }
    };
    
    return (
        <div>
            <Form form={form} layout="vertical" name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                <Form.Item hasFeedback validateStatus={props.loading && 'validating'} name="name" label="Name" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item hasFeedback validateStatus={props.loading && 'validating'} name="email" label="Email" rules={[{ type: 'email', required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item hasFeedback validateStatus={props.loading && 'validating'} name="body" label="Body" rules={[{ required: true }]}>
                    <Input.TextArea />
                </Form.Item>
                <Form.Item style={{ display: 'none' }} name="verify" label="Verify">
                    <Input />
                </Form.Item>
                <Form.Item>
                    <Button loading={props.loading} style={{ width: '100%' }} type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

function mapStateToProps({ loading }) {
    return { loading }
}

export default connect(mapStateToProps, { contactUs })(ContactForm);
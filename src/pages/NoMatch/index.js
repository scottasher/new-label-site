import React from 'react';
import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';

const NoMatch = () =>  {
    const button = (
        <Link to='/'>
            <Button type="primary">Back Home</Button>
        </Link>
    );

    return (
        <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you are trying to visit does not exist."
            extra={button}
        />
    )
}

export default NoMatch;
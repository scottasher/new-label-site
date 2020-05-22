import React, { useEffect } from 'react';
import './App.less';
import routes from './config/main.routes';
import MainIndex from './layouts/MainIndex';
import { Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchToken, fetchCurrent } from './actions/utils';

function App(props) {
    useEffect(() => {
        props.fetchToken();

        setTimeout(() => props.fetchCurrent(), 100)
    }, [props.current.active]);

    const routeComponents = routes.map(({path, component}, key) => <MainIndex exact path={path} component={component} key={key} />);
    return (
        <Switch>
            {routeComponents}
        </Switch>
    );
}

function mapStateToProps({ current }) {
    return { current };
};

export default connect(mapStateToProps, { fetchToken, fetchCurrent })(App);
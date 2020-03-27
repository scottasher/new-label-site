import React from 'react';
import './App.less';
import routes from './config/main.routes';
import MainIndex from './layouts/MainIndex';
import { Switch } from 'react-router-dom';

function App(props) {
    const routeComponents = routes.map(({path, component}, key) => <MainIndex exact path={path} component={component} key={key} />);
    return (
        <Switch>
            {routeComponents}
        </Switch>
    );
}

export default App;
import React from 'react';
import './App.less';
import routes from './config/main.routes';
import MainIndex from './layouts/MainIndex';

function App(props) {
    const routeComponents = routes.map(({path, component}, key) => <MainIndex exact path={path} component={component} key={key} />);
    return (
        <>
            {routeComponents}
        </>
    );
}

export default App;
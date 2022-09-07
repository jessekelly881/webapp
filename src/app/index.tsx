import React from 'react';
import { match } from 'ts-pattern';
import config from 'config';
import { Route } from 'app/router';
import Home from 'app/layouts/home';


interface AppP {
    route: Route;
    setRoute: (r: Route) => void;
}


export default ({ route, setRoute }: AppP) => {

    const text = match(route.type)
        .with("Home", () => <Home setRoute={setRoute} />)
        .with("Test", () => <span>Test</span>)
        .with("NotFound", () => <span>404</span>)
        .exhaustive()

    return (
        <div>
            {text}
            <footer id="app">Copyright {config.copyright.year}</footer>
        </div>
    )
}

import React from 'react';
import { useCurrentRoute, pushRoute, Route } from 'app/router';
import { BrowserHistory } from 'history';
import { match } from 'ts-pattern';
import config from 'config';
// import State from './state';


interface AppP {
    history: BrowserHistory
}

interface TemplateP {
    history: BrowserHistory
}

interface HomeP extends TemplateP {};

const Home = ({ history }: HomeP) => (
    <>
        Home &nbsp;
        <button
            className="text-sm bg-gray-200 px-2 py-1 m-1 text-gray-700 rounded-sm hover:shadow-sm duration"
            type="button"
            onClick={() => pushRoute(history)(Route.of.Test({}))}
        >
            Test
        </button>
    </>
)

export default ({ history }: AppP) => {
    // const state: State = {};
    const route = useCurrentRoute(history);

    const text = match(route.type)
        .with("Home", () => <Home history={history} />)
        .with("Test", () => <span>Test</span>)
        .with("NotFound", () => <span>404</span>)
        .exhaustive()

    return (
        <div>
            { text }
            <footer id="app">Copyright { config.copyright.year }</footer>
        </div>
    )
}

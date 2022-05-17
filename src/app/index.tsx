import React from 'react';
import { useCurrentRoute } from 'app/router';
import { BrowserHistory } from 'history';
import { match } from 'ts-pattern';
import State from './state';


interface AppP {
    history: BrowserHistory
}

export default ({ history }: AppP) => {
    const state: State = {};
    const route = useCurrentRoute(history);


    console.log(state)

    const text = match(route.type)
        .with("Home", () => "Home")
        .with("Test", () => "Test")
        .with("NotFound", () => "404")
        .exhaustive()

    return <span>{ text }</span>
}

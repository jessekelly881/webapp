import React from 'react';
import { useCurrentRoute } from 'app/router';
import { BrowserHistory } from 'history';
import { match } from 'ts-pattern';


interface AppP {
    history: BrowserHistory
}

export default ({ history }: AppP) => {
    const route = useCurrentRoute(history);

    return match(route.type)
        .with("Home", () => "Home")
        .with("Test", () => "Test")
        .with("NotFound", () => "404")
        .exhaustive()
}

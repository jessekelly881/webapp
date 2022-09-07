import React from 'react'
import ReactDOM from 'react-dom/client'
import App from 'app';
import { createBrowserHistory } from 'history';
import * as Amp from '@amplitude/analytics-browser';
import "./index.css"
import { pushRoute, useCurrentRoute } from 'app/router';

/*
 * Feature flags
 * TODO: Fetch from LaunchDarkly
 */
const featureFlags = {
    testFlag: true
}

/*
 * Amplitude
 */
const amplifyKey = process.env?.AMPLITUDE_KEY;
if (amplifyKey) {
    Amp.init(amplifyKey);
    Amp.track('Flags set', featureFlags);
}

const history = createBrowserHistory();

const Index = () => {
    const route = useCurrentRoute(history);

    return (
        <React.StrictMode>
            <App setRoute={pushRoute(history)} route={route} />
        </React.StrictMode>
    )
}

ReactDOM.createRoot(document.getElementById('root')!).render(<Index />)

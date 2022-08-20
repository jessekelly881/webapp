import React from 'react'
import ReactDOM from 'react-dom/client'
import App from 'app';
import { createBrowserHistory } from 'history';
import * as Amp from '@amplitude/analytics-browser';
import "./index.css"

/*
 * Feature flags
 * TODO: Fetch from LaunchDarkly
 */
const featureFlags = {
    testFlag: true
}

/*
 * Amplitude
 * TODO: Refactor
 */
const amplifyKey = process.env?.AMPLITUDE_KEY;
if (amplifyKey) {
    Amp.init(amplifyKey);
    Amp.track('Flags set', featureFlags);
}


const history = createBrowserHistory();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App history={history} />
    </React.StrictMode>
)

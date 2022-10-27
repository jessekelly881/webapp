import "./index.css"

import App from 'app';
import { pushRoute, useCurrentRoute } from 'app/router';
import { createBrowserHistory } from 'history';
import React from 'react'
import ReactDOM from 'react-dom/client'

/*
 * Amplitude
 */
const amplifyKey = process.env?.AMPLITUDE_KEY;


const history = createBrowserHistory();
console.log("test")

const Index = () => {
    const [, setAmplitudeInstance] = React.useState();
    const route = useCurrentRoute(history);

    import('@amplitude/analytics-browser').then(amp => {
        amp.init(amplifyKey);
        setAmplitudeInstance(null)
    }).catch(() => setAmplitudeInstance(null))

    return (
        <React.StrictMode>
            <App setRoute={pushRoute(history)} route={route} />
        </React.StrictMode>
    )
}

ReactDOM.createRoot(document.querySelector('#root')!).render(<Index />)

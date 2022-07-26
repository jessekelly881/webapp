import React from 'react'
import ReactDOM from 'react-dom/client'
import App from 'app';
import { createBrowserHistory } from 'history';
import "./index.css"

const history = createBrowserHistory();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <App history={history} />
  </React.StrictMode>
)


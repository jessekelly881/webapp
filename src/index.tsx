import React from 'react'
import ReactDOM from 'react-dom/client'
import lib from 'lib';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      { lib() }
  </React.StrictMode>
)

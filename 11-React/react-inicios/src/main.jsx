import React from 'react'
import ReactDOM from 'react-dom/client'
// import { App } from './App.jsx'
import './index.css' // archivo de css con styls globales
// import { AppCounter } from './AppCounter.jsx'
import { App } from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

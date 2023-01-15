import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import SpotifyLogin from './oauth'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SpotifyLogin />
    {/* <App /> */}
  </React.StrictMode>,
)

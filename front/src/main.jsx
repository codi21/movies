import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {MoviesContextProvider} from './contexts/moviesContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <MoviesContextProvider>
      <App />
    </MoviesContextProvider>
  </React.StrictMode>
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppContextProvider } from "./AppContext";
import { BrowserRouter } from "react-router-dom"
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppContextProvider>
  </React.StrictMode>,
)

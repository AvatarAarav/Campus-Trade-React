import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from "@mui/material"
import App from './App.jsx'
import './index.css'
import store from './Store/store.js'
import {Provider} from 'react-redux'
import theme from './theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  
      <ThemeProvider theme={theme}>
            <Provider store={store}>
            <App />
            </Provider>
      </ThemeProvider>
      
)

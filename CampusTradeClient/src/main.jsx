import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from "@mui/material"
import App from './App.jsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';
import store from './Store/store.js'
import {Provider} from 'react-redux'
import theme from './theme';

const clientId="1055909223869-gu8cokn3qhr28lsr1ltbjus599rmprrq.apps.googleusercontent.com";

ReactDOM.createRoot(document.getElementById('root')).render(
      <ThemeProvider theme={theme}>
            <Provider store={store}>
                  <GoogleOAuthProvider clientId={clientId}>
                        <App />
                  </GoogleOAuthProvider>
            </Provider>
      </ThemeProvider>
      
)

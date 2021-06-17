import React from "react"
import {Helmet} from "react-helmet";
import { Home } from "./pages";

// import { useCallback, useEffect, useState } from "react"
import favicon from './assets/favicon.ico'
import './styles/global.scss'

function App() {
  
  return (
    <div className="app" >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Peerlab</title>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@400;700;900&display=swap" rel="stylesheet"></link>
        <link rel="shortcut icon" href={favicon} type="image/x-icon" />
        <link rel="canonical" href="https://www.peerlab.com.br" />
      </Helmet>
      <Home/>
    </div>
  )
}

export default App

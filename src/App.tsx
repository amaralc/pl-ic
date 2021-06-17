import React from "react"
import {Helmet} from "react-helmet";
import { BrowserRouter, Switch, Route, RouteComponentProps } from 'react-router-dom';

import { routes } from "./routes";
import favicon from './assets/favicon.ico'
import './styles/global.scss'

const App:React.FunctionComponent<{}> = () => {
  
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
      <BrowserRouter>
        <Switch>
          {routes.map((route, index) => {
            return (
              <Route 
                key={index}
                path={route.path}
                exact={route.exact}
                render={(props:RouteComponentProps<any>) => {
                  return <route.component {...props} {...route.props}/>
                }}                
               />              
            )
          })}
        </Switch>       
      </BrowserRouter>
    </div>
  )
}

export default App

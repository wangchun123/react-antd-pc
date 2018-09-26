import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/antd-min.css';
import App from './js/App';
import Index from './components/Global';
import Wq from './js/wq';
import registerServiceWorker from './registerServiceWorker';
import {
    HashRouter,
    Route
  } from 'react-router-dom';

  const Routers=()=>{
    return(
        <HashRouter>
            <div>
                <Route path="/" exact={true} component={Index}/>
                <Route  path="/index" component={Index}/>
            </div>
        </HashRouter>   
    )
  }

ReactDOM.render(
    <Routers/>
, document.getElementById('root')
);
registerServiceWorker();

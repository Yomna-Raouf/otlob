import React from 'react';
import './App.css';
import '../css/normalize.css';
import '../css/webflow.css';
import '../css/otlob-epo.webflow.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import HomePage from '../HomePage';
import OrdersDetails from '../OrdersDetails';
import SigninPage from '../SigninPage';
import InfoPage from '../InfoPage';
import HomePageCopy from '../HomePageCopy';
import OrdersPage from '../OrdersPage';
import homePage from '../HomePage';



function App() {
  return (
    <BrowserRouter>
     <div className='App'>
        <Switch>
          <Route path='/' exact>
            <OrdersPage />
            {/* <homePage /> */}
          </Route >
            
          <Route path='/ordersDetails' exact>
            <OrdersDetails />
          </Route>

          <Route path='/otlobEpo' exact>
            <SigninPage />
          </Route>

          <Route path='/info' exact>
            <InfoPage />
          </Route>

          {/*<Route path='/Home' exact>
            <HomePageCopy />  
          </Route>*/}
        </Switch>
      </div>
    </BrowserRouter>   
  );
}

export default App;

import React from 'react';
import './css/normalize.css';
import './css/webflow.css';
import './css/otlob-epo.webflow.css';
import Header from './Components/Header';
import OrdersButtons from './Components/OrdersButtons';
import OrdersInfoList from './Components/OrdersInfoList';


function homePage() {
    return (
        <div>
            <Header />
            <OrdersButtons />
            <OrdersInfoList />
            <div className="div-block-28"></div>
        </div>
      
    )
}

export default homePage;

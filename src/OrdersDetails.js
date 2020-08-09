import React from 'react';
import {Link} from 'react-router-dom';
import OrderDetailsList from './Components/OrderDetailsList';
import PaymentMethodCard from './Components/PaymentMethodCard';
import TotalCostCard from './Components/TotalCostCard';
import PaymentDecision from './Components/PaymentDecision';


function OrdersDetails() {
    return (
        <div>
            <div className="div-block-6">
                <div className="div-block-7">
                
                    <div id="w-node-034816e583d8-14578bc6" className="div-block-15">
                        <Link to='/'>
                            <img src={require("./images/arrow.svg")} alt="" />
                        </Link>
                    </div>
                   
                    <div style={{fontWeight: '500'}} id="w-node-a55f2fdaf1a8-14578bc6" className="text-block-8">#00002</div>
                    <div id="w-node-64075cc170c7-14578bc6" className="text-block-9">0550002445</div>
                </div>
            </div>

            <div className="div-block-10">
                <OrderDetailsList />
                <PaymentMethodCard />
                <TotalCostCard />
                <PaymentDecision />
            </div>
        </div>
    )
}   

export default OrdersDetails;
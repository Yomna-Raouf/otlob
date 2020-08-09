import React from 'react'
import OrderDetails from './OrderDetails'

function OrderDetailsList() {
    return (
        <div className="div-block-12">
            <div className="div-block-16">
                <div id="w-node-8c590e03fbe6-14578bc6" className="div-block-17">
                    <img src={require("../images/Bag.svg")} height="15" width="15" alt="" className="image-2" /> 
                </div>
                <div style={{fontWeight: '500'}} id="w-node-95540e27d198-14578bc6" className="order-details">Order details</div>
            </div>

            <OrderDetails />
            <OrderDetails />
            <OrderDetails />
            <OrderDetails />
            <OrderDetails />
        </div>
    )
}

export default OrderDetailsList;
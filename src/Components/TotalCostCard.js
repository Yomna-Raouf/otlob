import React from 'react'
import Coupon from './Coupon';
import VAT from './VAT';
import Order from './Order';
import Total from './Total';

function TotalCostCard() {
    return (
        <div className="div-block-12">
            <div className="div-block-16">
                <div id="w-node-6ee4fe9185f7-14578bc6" className="div-block-17">
                    <img src={require("../images/Group-188.svg")} height="15" width="15" alt="" className="image-2" />
                </div>
                <div id="w-node-6ee4fe9185f9-14578bc6" className="order-details">Total</div>
            </div>

            <Order />
            <Coupon />
            <VAT />
            <div className="div-block-19"></div>

            <Total />
            <div className="div-block-26"></div>
        </div>
    )
}

export default TotalCostCard

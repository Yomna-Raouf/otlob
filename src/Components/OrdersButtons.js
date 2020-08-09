import React from 'react';
import '../css/OrdersButtons.css';

function OrdersButtons({text}) {
 

    return (
        <a style={{width: 'max-content'}} data-w-tab="Tab 1" className="tab-link w-inline-block w-tab-link w--current" >
            <p>{text}</p>
        </a>
    )
}

export default OrdersButtons

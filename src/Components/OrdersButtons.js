import React from 'react';
import '../css/OrdersButtons.css';

function OrdersButtons({text, activeColor}) {
 

    return (
        <a style={{width: 'max-content'}} data-w-tab="Tab 1" className={`tab-link w-inline-block w-tab-link ${activeColor}`} >
            <p>{text}</p>
        </a>
    )
}

export default OrdersButtons

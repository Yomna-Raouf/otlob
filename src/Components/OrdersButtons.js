import React from 'react';
import '../css/OrdersButtons.css';

function OrdersButtons() {
    return (
        <div className="scroll-item w-tab-menu">
            <a data-w-tab="Tab 1" className="tab-link w-inline-block w-tab-link w--current">
                <div>New order</div>
            </a>
            <a data-w-tab="Tab 2" className="tab-link w-inline-block w-tab-link">
                <div className="text-block">Cooks</div>
            </a>
            <a data-w-tab="Tab 4" className="tab-link w-inline-block w-tab-link">
                <div className="text-block-2">Ready</div>
            </a>
            <a data-w-tab="Tab 5" className="tab-link w-inline-block w-tab-link">
                <div className="text-block-3">Complete</div>
            </a>
            <a data-w-tab="Tab 6" className="tab-link w-inline-block w-tab-link">
                <div className="text-block-3">Canceled</div>
            </a>
      </div>
    )
}

export default OrdersButtons

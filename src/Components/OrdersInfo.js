import React from 'react';
import {Link} from 'react-router-dom';

function OrdersInfo() {
    return (
        <Link style={{ textDecoration: 'none' }} to='/ordersDetails'>
            <div className="div-block-12">
                <div className="div-block-13">
                    <div style={{fontWeight: '500'}} className="text-block-4">#00002</div>
                    <div className="text-block-5">1 min ago</div>
                    <div style={{fontWeight: '500'}} id="w-node-fd5816192c73-fd2226fd" className="text-block-6">Cash</div>
                
                    <div id="w-node-fd5816192c75-fd2226fd" className="div-block-14">
                        <div style={{fontWeight: '500'}} className="text-block-7">revision</div>
                    </div>
                    
                </div>
            </div>
        </Link>
    )
}

export default OrdersInfo;

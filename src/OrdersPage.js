import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './css/normalize.css';
import './css/webflow.css';
import './css/otlob-epo.webflow.css';
import OrdersButtons from './Components/OrdersButtons';
import Header from './Components/Header';
import OrdersInfoList  from './Components/OrdersInfoList';

function OrdersPage() {

    const [tabIndex, settabIndex] = useState(0);

    return (
        <div>
            <Header />
            <Tabs selectedIndex={tabIndex} onSelect={tabIndex => settabIndex(tabIndex)}>
                <TabList className="scroll-item w-tab-menu" style={{display: 'flex', overflowX: 'scroll', listStyle: 'none', paddingLeft: '0' }}>
                    <Tab>
                        <OrdersButtons activeColor={`${tabIndex === 0 ? 'w--current' : null}`} text={'New Order'} /> 
                    </Tab>
                    <Tab>
                        <OrdersButtons activeColor={`${tabIndex === 1 ? 'w--current' : null}`} text={'Cooks'} />
                    </Tab>
                    <Tab>
                        <OrdersButtons activeColor={`${tabIndex === 2 ? 'w--current' : null}`} text={'Ready'} />
                    </Tab>
                    <Tab>
                        <OrdersButtons activeColor={`${tabIndex === 3 ? 'w--current' : null}`} text={'Complete'} />
                    </Tab>
                    <Tab>
                        <OrdersButtons activeColor={`${tabIndex === 4 ? 'w--current' : null}`} text={'cancel'} /> 
                    </Tab>
                </TabList>
            
                <TabPanel>
                    <OrdersInfoList />
                </TabPanel>

                <TabPanel>
                    <img src={require('./images/emptystate.svg')} alt='empty orders' />
                </TabPanel>

                <TabPanel>
                    <img src={require('./images/emptystate.svg')} alt='empty orders' />
                </TabPanel>

                <TabPanel>
                    <img src={require('./images/emptystate.svg')} alt='empty orders' />
                </TabPanel>

                <TabPanel>
                    <img src={require('./images/emptystate.svg')} alt='empty orders' />
                </TabPanel>
            </Tabs>
            <div className="div-block-28"></div>
        </div>
    )
}

export default OrdersPage;

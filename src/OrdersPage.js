import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './css/normalize.css';
import './css/webflow.css';
import './css/otlob-epo.webflow.css';
import OrdersButtons from './Components/OrdersButtons';
import Header from './Components/Header';
import OrdersInfoList  from './Components/OrdersInfoList';

function OrdersPage() {
    return (
        <div>
            <Header />
            <Tabs>
                <TabList className="scroll-item w-tab-menu" style={{display: 'flex', overflowX: 'scroll', listStyle: 'none', paddingLeft: '0' }}>
                    <Tab><OrdersButtons text={'New Order'} /> </Tab>
                    <Tab><OrdersButtons text={'Cooks'} /> </Tab>
                    <Tab><OrdersButtons text={'Ready'} /> </Tab>
                    <Tab><OrdersButtons text={'Complete'} /> </Tab>
                    <Tab><OrdersButtons text={'cancel'} /> </Tab>
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

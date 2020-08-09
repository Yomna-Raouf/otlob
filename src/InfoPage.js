import React from 'react';
import {Link} from 'react-router-dom';
import User from './Components/User';
import UserTaxIdentifier from './Components/UserTaxIdentifier';
import UserWorkingHours from './Components/UserWorkingHours';

function InfoPage() {
    return (
        <div className="div-block-41">
            <div className="div-block-42">
               <User />

                <div className="section-2">
                    <UserTaxIdentifier />

                   <UserWorkingHours />

                    <div className="div-block45">
                        <h4 style={{fontWeight: '500'}} className="heading-15">Open</h4>
                    </div>
                </div>
            </div>

            <div className="div-block-49">
                <Link style={{ textDecoration: 'none' }} to='/otlobEpo'>
                    <h5 style={{fontWeight: '500'}} className="heading-16">Sign Out</h5>
                </Link>
            </div>   
        </div>
    )
}

export default InfoPage

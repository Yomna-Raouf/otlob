import React from 'react';
import {Link} from 'react-router-dom';

function User() {
    return (
        <div className="section">
            <div className="div-block-43">
                <div className="div-block-44"></div>
                <div className="div-block-46">
                    <h4 className="heading-13">Que jen</h4>
                    <p className="paragraph-2">Al Hamra</p>
                </div>
            
                <div className="div-block-45">
                    <Link to='/'>
                        <img src={require("../images/Group-182.svg")} alt=""/>
                    </Link>
                </div>
                
            </div>
        </div>
    )
}

export default User

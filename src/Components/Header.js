import React from 'react';
import {Link} from 'react-router-dom';

function Header() {

    return (
      
        <div className="div-block-6">
            <div className="div-block-27">
                <div className="div-block-8">
                    <h3 className="heading">Hello</h3>
                    <h1 className="heading-2">Que jen</h1>
                </div>
                <div id="w-node-af30d4b899cd-fd2226fd" className="div-block-9">
                    <div id="w-node-521bfe8dd11b-fd2226fd" className="div-block-5">
                        <img src={require('../images/Subtraction-14.svg')} alt="" className="image" />
                    </div>

                    <div className="div-block-5">
                        <Link style={{ textDecoration: 'none',   outline: 'none', border: 'none' }}  to='/Home'>
                            <img src={require("../images/Subtraction-4.svg")} alt="" className="image" />
                            <div></div>
                        </Link>
                    </div>
                
                    <div className="div-block-5 shadow">
                        <Link to='/info'>
                            <img src={require("../images/Rectangle-129.png")} alt="" />
                        </Link>
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default Header


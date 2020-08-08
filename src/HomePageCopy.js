import React from 'react';
import './css/HomePageCopy.css';
import { Link } from 'react-router-dom';

function HomePageCopy() {
    return (
        <div>
            <div className="div-block-39"></div>

            <div className="card-orders">
                <div className="div-block-31">
                    <div className="div-block-33">
                        <div className="div-block-32">
                            <img src={require("./images/Bag.svg")} alt="" />
                        </div>
                        <div className="div-block-38">
                            <h4 className="heading-8">NEW ORDER</h4>
                            <h6 className="heading-9">You have a new order</h6>
                        </div>
                        <div className="div-block-34">
                            <h4 className="heading-7">#00004</h4>
                        </div>
                    </div>

                    <div className="div-block-37">
                        <div className="div-block-35">
                            <Link style={{ textDecoration: 'none' }} to='/'>
                                <h5 className="heading-11">Reject</h5>
                            </Link>
                        </div>
                        <div className="div-block-36">
                            <Link style={{ textDecoration: 'none' }} to='/'>
                                <h5 className="heading-12">Accept</h5>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePageCopy

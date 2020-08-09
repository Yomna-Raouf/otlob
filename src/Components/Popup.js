import React from 'react';
import '../css/Popup.css';

const  Popup = ({closePopup}) => {
    return (
        <div>
            <div style={{ bottom: '-675%', display: 'flex', flexDirection:'column'}} className="card-orders">
                <div className='popup--fade'></div>
                <div style={{width: '356px'}} className="div-block-31">
                    <div className="div-block-33">
                        <div className="div-block-32">
                            <img src={require("../images/Bag.svg")} alt="" />
                        </div>
                        <div className="div-block-38">
                            <h4 style={{fontWeight: '500'}} className="heading-8">NEW ORDER</h4>
                            <h6 style={{fontWeight: '500'}} className="heading-9">You have a new order</h6>
                        </div>
                        <div className="div-block-34">
                            <h4 style={{fontWeight: '500'}} className="heading-7">#00004</h4>
                        </div>
                    </div>

                    <div className="div-block-37">
                        <div onClick={closePopup} className="div-block-35"> 
                            <h5 style={{fontWeight: '500'}} className="heading-11">Reject</h5>
                        </div>
                        <div onClick={closePopup} className="div-block-36">
                            <h5 style={{fontWeight: '500'}} className="heading-12">Accept</h5>
                        </div>
                    </div>
                </div>
                 
            </div>
        </div>
    )
}

export default Popup

 
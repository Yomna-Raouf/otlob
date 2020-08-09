import React, {useState, useEffect} from 'react';
import '../css/Header.css';
import {Link} from 'react-router-dom';
import Popup from './Popup';


function Header(props) {

    const [showPopup, setShowPopup] = useState(false);
    const [show, handleShow] = useState(false);
    

    const togglePopup = () => {
        setShowPopup(!showPopup);
    }

    
    useEffect(() => {
        window.addEventListener( "scroll", ()=> {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });

       // return () => {
         //   window.removeEventListener("scroll");
        //}

    }, []);

    return (
        <div style={{ marginTop: 'auto'}} className={` div-block-6   ${show && 'acrylic'}`}>
            <div id={`${show && 'blur'}`}  className="div-block-27">
                <div className="div-block-8">
                    <h3 style={{fontWeight: '500'}} className="heading">Hello</h3>
                    <h1 style={{fontWeight: '500'}} className="heading-2">Que jen</h1>
                </div>
                <div id="w-node-af30d4b899cd-fd2226fd" className="div-block-9">
                    <div id="w-node-521bfe8dd11b-fd2226fd" className="div-block-5">
                        <Link to='/info'>
                            <img src={require('../images/Subtraction-14.svg')} alt="" className="image" />
                        </Link>
                    </div>
                    <div className="div-block-5">
                        <img src={require("../images/Subtraction-4.svg")} alt="" className="image" onClick={ () => togglePopup()}/>
                        <div></div>
                        {showPopup ? 
                            <Popup
                                text='Close Me'
                                closePopup={() => togglePopup()}
                            />
                            : null
                        }
                    </div>
                
                    <div className="div-block-5 shadow">
                        <img src={require("../images/Rectangle-129.png")} alt="" />
                    </div>
                </div>
            </div>
        </div>           
    )
}

export default Header


  
  
   
 
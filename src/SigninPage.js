import React from 'react';
import {Link} from 'react-router-dom';

function SigninPage() {
    return (
        <div className="div-block">
            <div className="div-block-3 div-block-4">
                <h3 style={{fontWeight: '500'}} className="heading">Sign in</h3>
                <h1 style={{fontWeight: '500'}} className="heading-2">Account</h1>
            </div>

            <div>
                <div className="form-block w-form">
                    <form id="email-form" name="email-form" data-name="Email Form" className="form">
                        <input type="text" className="input-signin w-input" maxlength="256" name="name" data-name="Name" placeholder="Your Email" id="name" />
                        <input type="email" className="input-signin w-input" maxlength="256" name="email" data-name="Email" placeholder="Password" id="email" required="" />
                        <a style={{fontWeight: '500'}} href="#" className="link">Forgot your password?</a>
                        <Link style={{ textDecoration: 'none' }} to='/'>
                            <input type="submit" value="LOGIN" data-wait="Please wait..." className="submit-button w-button" />
                        </Link>
                    </form>

                    <div className="success-message w-form-done">
                        <div>Thank you! Your submission has been received!</div>
                    </div>

                    <div className="w-form-fail">
                        <div>Oops! Something went wrong while submitting the form.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SigninPage

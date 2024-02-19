import { Divider } from 'antd';
import React, { useState } from 'react'
import microsoft from '../Assests/images/microsoft.png';
import Logo from '../Assests/images/Logo.svg';
import raurau from '../Assests/images/raurau.svg';
import { IoMdArrowRoundBack } from "react-icons/io";
import Iinput from '../Icomponents/Iinput';

const Login = () => {
    const [isClick, setIsClick] = useState (false);
    const handleClick = () => {
        setIsClick (true);
    }
    const handleButtonClick = () => {
      window.location.href = 'https://account.microsoft.com/account';  
    }
    return (
        <div className='container'>
            <main className='login-main-content'>
                <div className='login-container'>
                    <div className='login-company-content'>
                        <div className='login-header-container'>
                            <h1 className='company-name'>RAURAU NGAEHE</h1>
                        </div>
                        <div className='login-image-container'>
                            <img src= {raurau} alt='login' />
                        </div>
                        <div className='login-footer-container'>
                            <p className='footer'>Version 2.5.0  © Powered by Valentia </p>
                        </div>
                    </div>
                    <div className='login-form-content'>
                        {!isClick ? (
                        <div className='login-form-container'>
                            <h1 className='login-form-heading'>Log In</h1>
                            <Divider>
                                <p className='login version'>Te Whatu Ora staff - please Login with Microsoft</p>
                            </Divider>
                            <div className='login-form-button'>
                                <button className='btn btn-light mt-0' type='submit' id='login-form-button' onClick={handleClick}>
                                    <div className='d-flex justify-content-center align-item-center'>
                                        <div className='w-h-30px d-flex'>
                                            <img src={Logo} alt='login small' />
                                            <p className='login-with'>Login with System Credentials</p>
                                        </div>
                                    </div>
                                </button>
                                <button className='btn btn-light mt-0' type='submit' id='login-form-button' onClick={handleButtonClick}>
                                    <div className='d-flex justify-content-center align-item-center'>
                                        <img src= {microsoft} alt='login small' className='microsoft-img' />
                                        <p className='login-with'>Login with Microsoft</p>
                                    </div>
                                </button>
                            </div>
                        </div>
                        ):(
                        <div className='login-form-container'>
                            <div id='login-form'>
                                <div className='login-back-btn'>
                                <IoMdArrowRoundBack style={{fontSize: '20px'}} />
                                </div>
                                <h2 className='login-form-heading'>Login</h2>
                                <div className='login-field-container'>
                                    <label htmlFor='username/email' className='login-label'>Username/Email</label>
                                    <Iinput className = 'login-field' />
                                </div>
                                <div className='spacing'></div>
                                <div className='login-field-container'>
                                    <label htmlFor='password' className='login-label'>Password</label>
                                    <Iinput  className = 'login-field' type = 'password' placeholder = ''/>
                                </div>
                                <div className='login-form-submit'>
                                   <button className='btn btn-purple' type='submit' id='login-submit-button'>
                                    Submit
                                    </button>
                                    <div className='d-flex'>
                                    <div className='login-forget-password'>Forgot Password ?</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                          )}
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Login;
import React, { useContext, useState } from 'react';
import AuthContext from '../Context/AuthContext';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';
function Login() {
    const { login } = useContext(AuthContext);
    const [input, setInput] = useState({
        email: '',
        password: ''
    });

    function changeInput(e) {
        e.preventDefault();
        const value = e.target.value;
        const name = e.target.name;
        setInput(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    async function submitForm(e) {
        e.preventDefault();
        try {
            await login(input);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="login-area">
            <div className="container">
                <div className="row justify-content-center mt-5 mb-5">
                    {/* <div className="col-lg-5 col-md-7 col-sm-12 mt-5 mb-5">
                        <div className="login-form">
                            <div className="section-title text-center mb-4">
                                <h2>Login</h2>
                                <p>Welcome back! Please log in to your account.</p>
                            </div>
                            <div className="card shadow-lg border-0 rounded">
                                <div className="card-body">
                                    <form onSubmit={submitForm}>
                                        <div className="form-group mb-3">
                                            <input
                                                type="email"
                                                className="form-control text-center"
                                                onChange={changeInput}
                                                name="email"
                                                placeholder="Email Address*"
                                                style={{ border: '2px solid #ccc' }}
                                                required
                                            />
                                        </div>
                                        <div className="form-group mb-3">
                                            <div className="password-input position-relative">
                                                <input
                                                    type="password"
                                                    className="form-control text-center"
                                                    onChange={changeInput}
                                                    name="password"
                                                    placeholder="Password*"
                                                    style={{ border: '2px solid #ccc' }}
                                                    required
                                                />
                                                <span
                                                    className="show-password-input position-absolute end-0 top-50 translate-middle-y pe-3"
                                                />
                                            </div>
                                        </div>

                                        <div className="form-group d-flex justify-content-between mb-3">
                                            <div>
                                                <input type="checkbox" id="remember" />
                                                <label htmlFor="remember" className="ms-2">Remember me</label>
                                            </div>
                                        </div>

                                        <div className="form-group mb-4">
                                            <button
                                                type="submit"
                                                className="btn btn-primary w-100"
                                                style={{
                                                    backgroundColor: '#085830',
                                                    border: 'none',
                                                    padding: '12px',
                                                    fontSize: '16px',
                                                    borderRadius: '6px',
                                                    transition: '0.3s',
                                                }}
                                            >
                                                Login
                                            </button>
                                        </div>
                                        <div className="form-group text-center">
                                             Donot have an account? <NavLink to='/register' style={{ textDecoration: 'none', color: 'rgb(255 0 0)' }}>Register</NavLink>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className="col-md-10">
                        <div className="row login-sec px-4 py-5">
                            <div className="col-md-6 login-form">
                                <h3>Welcome Back</h3>
                                <p>We're so excited to see you again!</p>
                                <form onSubmit={submitForm}>
                                        <div className="form-group mb-3">
                                            <label htmlFor="email">Email or Phone Number</label>
                                            <input
                                                type="email"
                                                className="form-control text-center input"
                                                onChange={changeInput}
                                                name="email"
                                                required
                                            />
                                        </div>
                                        <div className="form-group mb-3">
                                            <div className="password-input position-relative">
                                                <label htmlFor="password">Password</label>
                                                <input
                                                    type="password"
                                                    className="form-control text-center input"
                                                    onChange={changeInput}
                                                    name="password"
                                                    required
                                                />
                                                <span
                                                    className="show-password-input position-absolute end-0 top-50 translate-middle-y pe-3"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group mb-4">
                                            <button
                                                type="submit"
                                                className="btn btn-primary w-100 submit"
                                                style={{
                                                    backgroundColor: '#C3C3C3',
                                                    border: 'none',
                                                    padding: '12px',
                                                    fontSize: '16px',
                                                    marginTop: '20px',
                                                    borderRadius: '25px',
                                                    transition: '0.3s',
                                                }}
                                            >
                                                Login
                                            </button>
                                        </div>
                                        <div className="form-group text-center">
                                             Donot have an account? <NavLink to='/register' style={{ textDecoration: 'underline', color: '#284C6C',fontWeight: 600, }}>Register</NavLink>
                                        </div>
                                    </form>
                            </div>
                            <div className="col-md-6 logo-container">
                                <div className="logo-sec mt-5">
                                    <img src={logo} alt="" />
                                </div>
                                <div className="title-sec mt-4">
                                    <h3 className='text-center' style={{ fontWeight: 600, }}>Sopnaon Foundation</h3>
                                    <p className='text-center'  style={{ fontWeight: 400, opacity: 0.8, }}>Tamat Bhaluka, Mymensingh</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CSS Styles in page */}
            <style jsx>{`
                body {
                    background-color: #EEEEEE;
                    font-family: Arial, sans-serif;
                }
                .login-sec{
                    background-color: #FFFFFF;
                    border-radius: 15px;
                }
                .login-form h3{
                    text-align: center;
                    font-size: 28px;
                    font-weight: 600;
                    color: #333333;
                }
                .login-form p{
                    text-align: center;
                    color: #666666;
                    padding-bottom: 20px;
                }
                .logo-sec {
                    text-align: center;
                }
                .logo-sec img{
                    width: 250px;
                }
                label{
                    color: #666666;
                    padding-bottom: 5px;
                }
                .input{
                    background-color: transparent;
                    border: 1px solid #ccc;
                    border-radius: 10px;
                    height: 50px;
                }
                .submit{
                    background-color: #C3C3C3;
                }
                @media (max-width: 768px) {
                    .login-sec {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                    .logo-container {
                        order: 1; /* Moves the logo below the form */
                        text-align: center;
                    }
                    .login-form {
                        order: 2;
                    }
                    .login-sec{
                        margin: 5px;
                    }
                }
                
             
            `}</style>
        </div>
    );
}

export default Login;

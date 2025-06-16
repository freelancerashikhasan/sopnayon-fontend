import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import AuthContext from '../Context/AuthContext';

function Register() {
const { register } = useContext(AuthContext);
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    phone: '',
    confirmPassword: "",
    address: '',
  });

  function changeInput(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setInput((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }

  async function submitForm(e) {
        e.preventDefault();
        try {
            await register(input);
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className="login-area">
      <div className="container">
        <div className="row justify-content-center mt-5 mb-5">
          <div className="col-md-10">
            <div className="row login-sec px-4 py-5">
              <div className="col-md-6 login-form">
                <h3>Create Account</h3>
                <p>Join us today!</p>
                <form onSubmit={submitForm}>
                  <div className="form-group mb-3">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      className="form-control text-center input"
                      onChange={changeInput}
                      name="name"
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className="form-control text-center input"
                      onChange={changeInput}
                      name="email"
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                      <label htmlFor="password">Phone</label>
                      <input
                          type="text"
                           className="form-control text-center input"
                          onChange={changeInput}
                          name="phone"
                          required
                      />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control text-center input"
                      onChange={changeInput}
                      name="password"
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                      type="password"
                      className="form-control text-center input"
                      onChange={changeInput}
                      name="confirmPassword"
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="confirmPassword">Address</label>
                    <input
                        type="text"
                        className="form-control text-center input"
                        onChange={changeInput}
                        name="address"
                        required
                    />
                  </div>
                  <div className="form-group mb-4">
                    <button
                      type="submit"
                      className="btn btn-primary w-100 submit"
                      style={{
                        backgroundColor: "#C3C3C3",
                        border: "none",
                        padding: "12px",
                        fontSize: "16px",
                        marginTop: "20px",
                        borderRadius: "25px",
                        transition: "0.3s",
                      }}
                    >
                      Register
                    </button>
                  </div>
                  <div className="form-group text-center">
                    Already have an account? <NavLink to='/login' style={{ textDecoration: 'underline', color: '#284C6C', fontWeight: 600 }}>Login</NavLink>
                  </div>
                </form>
              </div>
              <div className="col-md-6 logo-container">
                <div className="logo-sec mt-5">
                  <img src={logo} style={{ width: '300px', textAlign: 'center' }} alt="Logo" />
                </div>
                <div className="title-sec mt-4">
                  <h3 className='text-center' style={{ fontWeight: 600 }}>Sopnaon Foundation</h3>
                  <p className='text-center' style={{ fontWeight: 400, opacity: 0.8 }}>Tamat Bhaluka, Mymensingh</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
};

export default Register;
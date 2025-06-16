import React, { useContext } from 'react'
import googlePlay from '../assets/icon/googlePlay.svg'
import { NavLink } from 'react-router-dom'
import AuthContext from '../Context/AuthContext';
function Footer() {
    const { getTranslation } = useContext(AuthContext);
    return (
        <div className='footer-section'>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                       <h5>{getTranslation('organization', 'Organization')}</h5> 
                       <p><NavLink to='about' style={{ textDecoration: 'none', color: '#F4F4F4' }}>{getTranslation('about us', 'About Us')}</NavLink> </p>
                       <p><NavLink to='comitee' style={{ textDecoration: 'none', color: '#F4F4F4' }}>{getTranslation('comitee', 'comitee')}</NavLink></p>
                       <p><NavLink to='comitee' style={{ textDecoration: 'none', color: '#F4F4F4' }}>{getTranslation('terms and condition', 'Terms And Condition')}</NavLink></p>
                    </div>
                    <div className="col-md-3">
                        <p><NavLink to='login' style={{ textDecoration: 'none', color: '#F4F4F4' }}>{getTranslation('comitee', 'Comitee')}</NavLink></p>
                        <p><NavLink to='account' style={{ textDecoration: 'none', color: '#F4F4F4' }}>{getTranslation('profile', 'Profile')}</NavLink></p>
                        <p><NavLink to='comitee' style={{ textDecoration: 'none', color: '#F4F4F4' }}>{getTranslation('all member', 'All Member')}</NavLink></p>
                       

                    </div>
                    <div className="col-md-3">
                        <h5>{getTranslation('useful links', 'Useful Links')}</h5> 
                        <a><p>{getTranslation('support', 'Support')}</p></a> 
                        <a><p>{getTranslation('services', 'Services')}</p></a> 
                        <a><p>{getTranslation('comunity', 'Comunity')}</p></a> 

                    </div>
                    <div className="col-md-3">
                      <div className="">
                      <a
                            href="https://backend.psvobd.com/apk/psvobd_v1.apk"
                            className="d-flex download-btn"
                            download
                            >
                            <img src={googlePlay} alt="" />
                            <p className="ml-3">{getTranslation('download apk', 'Download Apk')}</p>
                            </a>

                      </div>

                    </div>
                    <div className="col-md-12 pt-5">
                        <p className="text-center">Copyright © 2024. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer

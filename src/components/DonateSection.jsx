import React, { useContext, useEffect } from 'react'
import facebook from '../assets/icon/facebook.svg'
import twiter from '../assets/icon/twiter.svg'
import instagram from '../assets/icon/instagram.svg'
import logo from '../assets/images/logo.png'
import "aos/dist/aos.css";
import AOS from "aos";
import AuthContext from '../Context/AuthContext'
function DonateSection() {
    const { companyInfomation, getTranslation } = useContext(AuthContext);
    useEffect(() => {
        AOS.init({
          duration: 1000, 
          offset: 100, 
        });
      }, []);
    return (
        <div className='donate-section'>
            <div className="container">
                <div className="row "   data-aos="fade-left">
                    <div className="col-md-6">
                        <h1>{getTranslation('donating everything', 'Donating Everything')}</h1>
                        <h5>{getTranslation('millions of pepole will be happy if you make them happy', 'Millions of Pepole will be Happy if You make them Happy')}</h5>
                        <div className="d-flex icons">
                            <a href="#">
                                <img src={facebook} alt="" />
                            </a>
                            <a href="#">
                                <img src={twiter} alt="" />
                            </a>
                            <a href="#">
                                <img src={instagram} alt="" />
                            </a>
                            
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="w-100 text-end">
                           <div className="wl">
                           <img className='white-logo' src={logo} alt="" />
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DonateSection

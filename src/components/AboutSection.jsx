import React, { useContext, useEffect } from 'react';
import "aos/dist/aos.css";
import AOS from "aos";
import AuthContext from '../Context/AuthContext';
import aboutBg from './../assets/images/aboutBg.png';

function AboutSection() {
    const { companyInfomation,getTranslation } = useContext(AuthContext);
    const language = localStorage.getItem('language') || 'en'; 
    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 100,
        });
    }, []);

    return (
        <div className='about-section pt-5' data-aos="fade-down"  style={{ backgroundImage: `url(${aboutBg})` }}>
            <div className="container text-white">
                <h2>{getTranslation('about us', 'About Us')}</h2>
                <p className='pt-5'>
                {language === 'bn' 
                    ? companyInfomation?.about_us_bn || 'About us information is not available.' 
                    : companyInfomation?.about_us || 'About us information is not available.'}
                </p>
            </div>
        </div>
    );
}

export default AboutSection;

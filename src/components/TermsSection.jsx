import React, { useContext, useEffect } from 'react';
import "aos/dist/aos.css";
import AOS from "aos";
import AuthContext from '../Context/AuthContext';
function TermsSection() {
    const { companyInfomation } = useContext(AuthContext);
    const language = localStorage.getItem('language') || 'en'; 
    useEffect(() => {
        AOS.init({
          duration: 1000, 
          offset: 100, 
        });
      }, []);
    return (
        <div className='about-section pt-5'  data-aos="fade-down">
            <div className="container">
                <p className='pt-5'>
                    {language === 'bn' 
                        ? companyInfomation?.terms_and_condition_bn || ''
                        : companyInfomation?.terms_and_condition || ''}
                </p>
            </div>
        </div>
    );
}

export default TermsSection;

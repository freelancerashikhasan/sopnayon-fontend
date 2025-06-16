import React, { useContext, useEffect } from 'react'
import logo from '../assets/images/logo.png'
import "aos/dist/aos.css";
import AOS from "aos";
import AuthContext from '../Context/AuthContext';
function NoticeBoard() {
    const { companyInfomation, getTranslation } = useContext(AuthContext);
    const language = localStorage.getItem('language') || 'en'; 
    useEffect(() => {
        AOS.init({
          duration: 1000, 
          offset: 100, 
        });
      }, []);
    return (
        <div className='notice-section'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 notice text-danger"  data-aos="fade-left">
                        <h2>{getTranslation('notice board', 'Notice Board')}</h2>
                        <p>
                        {language === 'bn' 
                            ? companyInfomation?.notice_bn || '' 
                            : companyInfomation?.notice || ''}
                            <br />
                       
                        </p>
                        <p> {language === 'bn' 
                            ? 'আপডেট থাকুন: সর্বশেষ খবর এবং আপডেটের জন্য সোশ্যাল মিডিয়াতে আমাদের অনুসরণ করুন।' 
                            : 'Stay Updated: Follow us on social media for the latest news and updates.'}</p>
                    </div>
                    <div className="col-md-6 notice-cont ps-5"  data-aos="fade-right">
                        <h3>{getTranslation('a notice board from higher othority', 'A Notice Board from Higher Othority')}</h3>
                        <p>{getTranslation('They Will Give many Notice Bord About The Organization, & Everyone should be maintain this rules and regulations.')}</p>
                        <p className='pt-3'>
                            {getTranslation('Welcome to PSVO BD! This notice board provides essential updates, events, and guidelines for all members, staff, and volunteers. Stay informed and adhere to the rules to ensure a safe, inclusive, and productive environment for all.')}
                        </p>
                        <div className="img-sec text-center pt-3">
                        {companyInfomation && companyInfomation.logo ? (
                                <img  src={companyInfomation.logo} style={{ width: '300px', }} alt="Company Logo" />
                            ) : (
                                <img  src={logo}  style={{ width: '300px', }} alt="" />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NoticeBoard

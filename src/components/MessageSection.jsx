import React, { useContext, useEffect } from 'react'
import chairmanImage from '../assets/images/chairman.png'
import "aos/dist/aos.css";
import AOS from "aos";
import AuthContext from '../Context/AuthContext';
import star from '../assets/images/star.svg';
function MessageSection() {
    const { companyInfomation, getTranslation } = useContext(AuthContext);
    const language = localStorage.getItem('language') || 'en'; 
    useEffect(() => {
        AOS.init({
          duration: 1000, 
          offset: 100, 
        });
      }, []);
    return (
        <div className="message-section">
            <div className="container">
                <div className="row"  data-aos="fade-right">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="message-base">
                            <div className="image-sec">
                                <div className="d-flex mS">
                                    {companyInfomation && companyInfomation.logo ? (
                                        <img  src={companyInfomation.chairman_image} alt="Company Logo" />
                                    ) : (
                                        <img src={chairmanImage} alt="" />
                                    )}

                                    <h5 className="stacked-text">
                                        Chariman  Message
                                    </h5>

                                    <div className="white-sec"></div>
                                </div>
                            </div>
                            <div className="message-sec text-center">
                                <h5>Ashik Hasan</h5>
                                <p style={{ color: '#505050', }}>Chairman</p>
                                <p className='messageSec'>
                                    {language === 'bn'
                                        ? (companyInfomation?.chairman_text_bn?.slice(0, 250) || '') + 
                                        (companyInfomation?.chairman_text_bn?.length > 250 ? '...' : '')
                                        : (companyInfomation?.chairman_text?.slice(0, 250) || '') + 
                                        (companyInfomation?.chairman_text?.length > 250 ? '...' : '')}
                                    </p>

                                <div className="d-flex text-center star-sec">
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 ">
                        <div className="message-base">
                            <div className="image-sec">
                                <div className="d-flex mS">
                                    {companyInfomation && companyInfomation.logo ? (
                                        <img  src={companyInfomation.secretary_image} alt="Company Logo" />
                                    ) : (
                                        <img src={chairmanImage} alt="" />
                                    )}

                                    <h5 className="stacked-text">
                                        Secretary  Message
                                    </h5>

                                    <div className="white-sec"></div>
                                </div>
                            </div>
                            <div className="message-sec text-center">
                                <h5>Ashik Hasan</h5>
                                <p style={{ color: '#505050', }}>Chairman</p>
                                <p className='messageSec'>
                                    {language === 'bn'
                                        ? (companyInfomation?.secretary_text_bn?.slice(0, 250) || '') + 
                                        (companyInfomation?.secretary_text_bn?.length > 250 ? '...' : '')
                                        : (companyInfomation?.secretary_text?.slice(0, 250) || '') + 
                                        (companyInfomation?.secretary_text?.length > 250 ? '...' : '')}
                                    </p>

                                <div className="d-flex text-center star-sec">
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
        // <div className="message-section">
        //     <div className="container">
        //         <div className="row"  data-aos="fade-right">
        //             <div className="col-lg-6 col-sm-12">
        //                     {companyInfomation && companyInfomation.logo ? (
        //                         <img style={{ maxWidth: '100%', borderRadius: '10px' }} src={companyInfomation.chairman_image} alt="Company Logo" />
        //                     ) : (
        //                         <img src={chairmanImage} alt="" />
        //                     )}
        //             </div>
        //             <div className="col-lg-6 col-sm-12">
        //                 <div className=''>
        //                     <div className="">
        //                         <h2>{getTranslation('chairmen sms', 'Chairman sms')}</h2>
        //                         <p> {language === 'bn' 
        //                             ? companyInfomation?.chairman_text_bn || '' 
        //                             : companyInfomation?.chairman_text || ''}</p>
        //                     </div>
                    
        //                 </div>
        //             </div>
        //         </div>
               
        //     </div>
        //     <div className="sec-message">
        //         <div className="container">
        //             <div className="row message-section2"   data-aos="fade-left">
                        
        //                 <div className="col-lg-6 col-sm-12 ">
        //                     <div className=''>
        //                         <div className="">
        //                             <div className="w-100 text-end">
        //                                 <h2 className='text-end w-100' style={{ border: 'none' }}><span style={{borderBottom: '2px solid black',padding: '10px'}}>{getTranslation('secretary sms', 'Secretary SMS')}</span></h2>
        //                             </div>
        //                             <p> {language === 'bn' 
        //                                 ? companyInfomation?.secretary_text_bn || '' 
        //                                 : companyInfomation?.secretary_text || ''}</p>
        //                         </div>
                        
        //                     </div>
        //                 </div>
        //                 <div className="col-lg-6 col-sm-12">
        //                     {companyInfomation && companyInfomation.logo ? (
        //                             <img style={{ maxWidth: '100%', borderRadius: '10px' }} src={companyInfomation.secretary_image} alt="Company Logo" />
        //                         ) : (
        //                         <img src={chairmanImage} alt="" />
        //                     )}
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
     
    )
}

export default MessageSection
 
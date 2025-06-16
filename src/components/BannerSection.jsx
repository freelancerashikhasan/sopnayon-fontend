import React, { useContext, useEffect } from 'react'
import bannerImage from '../assets/images/slider1.png'
import "aos/dist/aos.css";
import AOS from "aos";
import AuthContext from '../Context/AuthContext';
import MarqueeNotice from './MarqueeNotice';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import mask from './../assets/images/mask.png';
import arrowRight from './../assets/icon/arrowRight.svg';
import teamBg from './../assets/images/teamBg.png';
import memberBg from './../assets/images/memberBg.png';
import donorBg from './../assets/images/donorBg.png';
import projectBg from './../assets/images/projectBg.png';

function BannerSection() {
    const { getTranslation } = useContext(AuthContext);
    useEffect(() => {
        AOS.init({
          duration: 1000, 
          offset: 100, 
        });
      }, []);
    return (

        <div className='banner-section' >
            
            <div className=""  data-aos="fade-down">
                <div className="banner">
                    <img className='mask' src={mask} alt="" />
                    <div className='bannerText '>
                        <h1>{getTranslation('Empowering Communities, Transforming Lives!', 'Empowering Communities, Transforming Lives!')}</h1>
                        <p>{getTranslation('At Shawpnwon Foundation, we are dedicated to creating positive change in the lives of individuals and families. Through compassionate support, resources, and advocacy, we work together to build stronger communities and brighter futures for everyone.', 'At Shawpnwon Foundation, we are dedicated to creating positive change in the lives of individuals and families. Through compassionate support, resources, and advocacy, we work together to build stronger communities and brighter futures for everyone.')}</p>
                        <button className='bannerBtn'>{getTranslation('Explore Us', 'Explore Us')}
                            <img  src={arrowRight} alt="" />
                        </button>
                    </div>
                    <Carousel 
                        showThumbs={false} 
                        showStatus={false} 
                        autoPlay 
                        infiniteLoop 
                        interval={3000} 
                        stopOnHover
                    >
                        <div>
                        <img className='banenr-image' src={bannerImage} alt="" />
                        </div>
                        <div>
                        <img className='banenr-image' src={bannerImage} alt="" />
                        </div>
                        <div>
                        <img className='banenr-image' src={bannerImage} alt="" />
                        </div>
                    </Carousel>
                </div>
                <div className="container mt-5">
                    <div className="row w-100">
                        <div className="col-lg-8 col-md-12 col-sm-12 pt-2">
                            <div className="row">
                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <div className="banner-card-body text-center" style={{ backgroundImage: `url(${teamBg})` }}>
                                            <h2>124<span>+</span></h2>
                                            <p>{getTranslation('team member', 'Team Member')}</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-8 col-md-8 col-sm-6 pt-2">
                                        <div className="banner-card-body text-center" style={{ backgroundImage: `url(${donorBg})` }}>
                                            <h2>50<span>+</span></h2>
                                            <p>{getTranslation('donor member', 'Donor Member')}</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6 pt-2">
                                        <div className="banner-card-body text-center" style={{ backgroundImage: `url(${projectBg})` }}>
                                            <h2>24<span>+</span></h2>
                                            <p>{getTranslation('project', 'Project')}</p>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 pt-2">
                            <div className="banner-card-body2 text-center" style={{ backgroundImage: `url(${memberBg})` }}>
                                <h2>520<span>+</span></h2>
                                <p>{getTranslation('all member', 'All Member')}</p>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerSection

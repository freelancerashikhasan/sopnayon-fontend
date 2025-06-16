import React, { useContext, useEffect } from 'react'
import Map from './Map'
import "aos/dist/aos.css";
import AOS from "aos";
import AuthContext from '../Context/AuthContext';
function MapSection() {
    const { companyInfomation, getTranslation } = useContext(AuthContext);
    useEffect(() => {
        AOS.init({
          duration: 1000, 
          offset: 100, 
        });
      }, []);
    return (
       <div className="map-section" data-aos="fade-down">
            <div className="container">
                <h3 className='map-title'><span>{getTranslation('our google map location', 'Our Google Map Location')}</span></h3>
                <div className="map-container" style={{ width: '100%', height: '450px' }}>
                    <iframe
                        title="Google Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3635.3619360335897!2d90.28559937591002!3d24.333881866125143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375613475007fc2d%3A0xed603862f82d9064!2zVGFtYXQgQmF6YXIg4Kak4Ka-4Kau4Ka-4KafIOCmrOCmvuCmnOCmvuCmsA!5e0!3m2!1sen!2sbd!4v1736168700243!5m2!1sen!2sbd"
                        width="100%"
                        height="100%"
                        style={{ border: '0',borderRadius: '10px' }}
                        allowFullScreen=""
                        loading="lazy"
                        aria-hidden="false"
                        tabIndex="0"
                    ></iframe>
                </div>
            </div>
       </div>
    )
}

export default MapSection

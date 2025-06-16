import React, { useContext, useEffect, useState } from 'react';
import "aos/dist/aos.css";
import AOS from "aos";
import AuthContext from '../Context/AuthContext';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';  // Import the skeleton styles

function GallarySection() {
    const { url,getTranslation } = useContext(AuthContext);
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true); // Initialize with true to show loading state

    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 100,
        });
    }, []);

    useEffect(() => {
        axios.get(`${url}/gallary`)
        .then(response => {
            const data = response.data;
            setBlogs(data);
            setLoading(false);  // Set loading to false after data is fetched
        })
        .catch(error => {
            console.error('Fetching gallery images failed:', error);
            setLoading(false);
        });
    }, [url]);

    return (
        <div className='gallary-section' data-aos="fade-down">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h3 className='py-5'><span>{getTranslation('our gallary', 'Our Gallary')}</span></h3>
                    </div>
                    {/* Loop through the blog data and display images or skeletons */}
                    {loading
                        ? // Show skeletons when loading
                          Array(6).fill().map((_, index) => (
                            <div key={index} className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                                <Skeleton height={200} className="shadow-1-strong rounded mb-4" />
                                <Skeleton height={200} className="shadow-1-strong rounded mb-4" />
                            </div>
                          ))
                        : // Show actual images after loading
                          blogs.map((blog, index) => {
                              if (index % 2 === 0) {
                                  return (
                                      <div key={index} className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                                          <img
                                              src={blog.image || "default-image-url.jpg"}  // Fallback to default if no image
                                              className="w-100 shadow-1-strong rounded mb-4"
                                              alt={`Gallery Image ${index + 1}`}
                                          />
                                          {blogs[index + 1] && (
                                              <img
                                                  src={blogs[index + 1].image || "default-image-url.jpg"}
                                                  className="w-100 shadow-1-strong rounded mb-4"
                                                  alt={`Gallery Image ${index + 2}`}
                                              />
                                          )}
                                      </div>
                                  );
                              }
                              return null;
                          })}
                </div>
            </div>
        </div>
    );
}

export default GallarySection;

import React, { useContext, useEffect, useState } from 'react';
import "aos/dist/aos.css";
import AOS from "aos";
import axios from 'axios';
import AuthContext from '../Context/AuthContext';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function Comitee() {
    const { url } = useContext(AuthContext);
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 100,
        });
    }, []);

    useEffect(() => {
        axios.get(`${url}/member`)
            .then(response => {
                setBlogs(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Fetching committee members failed:', error);
                setLoading(false);
            });
    }, [url]);

    return (
        <div className='comitee-section' style={{ minHeight: '40rem' }}>
            <div className="container-block container">
                <p className="text-blk team-head-text">
                    Our Comitee
                </p>
                <div className="responsive-container-block teamcard-container" data-aos="fade-up">
                    {loading ? (
                        // Show skeleton loaders while loading
                        Array(3).fill().map((_, index) => (
                            <div className="col-lg-4 col-md-6 blog-c" key={index}>
                                <div className="blog-card">
                                    <div className="blog-sec">
                                        <Skeleton height={200} className="rounded" />
                                    </div>
                                    <div className="blog-content">
                                        <Skeleton width="50%" className="tag" />
                                        <Skeleton height={30} width="80%" />
                                        <Skeleton count={3} />
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        blogs.map((blog, index) => (
                            <div key={index} className="responsive-cell-block wk-desk-3 wk-mobile-12 wk-tab-4 wk-ipadp-4 team-card-container">
                                <div className="team-card">
                                    <div className="team-img-wrapper">
                                        <img 
                                            className="team-img" 
                                            style={{ borderRadius: "10px" }}
                                            src={blog.image || ""} 
                                            alt={blog.name || "Committee Member"} 
                                        />
                                    </div>
                                    <div className="team-card-content">
                                        <p className="text-blk name">
                                            {blog.name || 'No Name Available'}
                                        </p>
                                        <p className="text-blk position">
                                            {blog.designation || 'No Designation Available'}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}

export default Comitee;

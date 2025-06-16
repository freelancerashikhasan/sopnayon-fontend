import React, { useContext, useEffect, useState } from 'react';
import "aos/dist/aos.css";
import AOS from "aos";
import AuthContext from '../Context/AuthContext';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';  // Import the skeleton styles

function BlogSection() {
    const { url,getTranslation } = useContext(AuthContext);
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true); 
    const language = localStorage.getItem('language') || 'en'; 
    useEffect(() => {
        AOS.init({
            duration: 1000, 
            offset: 100, 
        });
    }, []);

    useEffect(() => {
        axios.get(`${url}/blogs`)
            .then(response => {
                const data = response.data;
                setBlogs(data);
                setLoading(false);  // Set loading to false after data is fetched
            })
            .catch(error => {
                console.error('Fetching blog posts failed:', error);
                setLoading(false);
            });
    }, [url]);

    return (
        <div className='blog-section' data-aos="fade-up">
            <div className="container">
                <h4><span>{getTranslation('all blog post', 'All Blog Posts')}</span></h4>
                <div className="row">
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
                        // Show the actual blog content after loading
                        blogs.map((blog, index) => (
                            <div className="col-lg-4 col-md-6 blog-c" key={index}>
                                <div className="blog-card">
                                    <div className="blog-sec">
                                        <img
                                            src={blog.image || 'default-image-url.jpg'}
                                            alt={blog.title || 'Blog'}
                                            style={{ maxHeight: '350px', borderRadius: '15px' }}
                                        />
                                    </div>
                                    <div className="blog-content">
                                        <p className='tag'>{blog.date}</p>
                                        <h3>
                                        {language === 'bn' 
                                            ? blog.title_bn || '' 
                                            : blog.title || ''}
                                        </h3>
                                        <p> {language === 'bn' 
                                            ? (blog.description_bn.length > 250 
                                                ? blog.description_bn.substring(0, 250) + '...' 
                                                : blog.description_bn) 
                                            : (blog.description.length > 250 
                                                ? blog.description.substring(0, 250) + '...' 
                                                : blog.description)}
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

export default BlogSection;

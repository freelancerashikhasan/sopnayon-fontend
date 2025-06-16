import React from 'react'
import BannerSection from '../components/BannerSection'
import '../assets/styles/home.css'
import AboutSection from './../components/AboutSection';
import MessageSection from './../components/MessageSection';
import NoticeBoard from './../components/NoticeBoard';
import MapSection from '../components/MapSection';
import BlogSection from '../components/BlogSection';
import GallarySection from '../components/GallaySection';
import DonateSection from '../components/DonateSection';
import MarqueeNotice from '../components/MarqueeNotice';
function Home() {
    return (
        <div>
            <MarqueeNotice/>
           <BannerSection />
           <AboutSection />
           <MessageSection />
           <NoticeBoard />
           <MapSection />
           <BlogSection />
           <GallarySection />
           <DonateSection />
        </div>
    )
}

export default Home

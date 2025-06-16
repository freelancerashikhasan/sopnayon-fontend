import React, { useContext } from 'react';
import AuthContext from '../Context/AuthContext';

const MarqueeNotice = () => {
    const { companyInfomation } = useContext(AuthContext);
    const language = localStorage.getItem('language') || 'en'; 

    const getPlainText = (text) => {
        const doc = new DOMParser().parseFromString(text, 'text/html');
        return doc.body.textContent || doc.body.innerText || '';
    };

    const noticeText = language === 'bn'
        ? companyInfomation?.member_notice_bn
        : companyInfomation?.member_notice;

    if (!noticeText) return null;

    return (
        <div className='container' style={{
            width: '100%',
            backgroundColor: '#000000',
            padding: '10px 0',
            textAlign: 'center',
            overflow: 'hidden',
        }}>
            <p style={{
                fontSize: '20px',
                fontWeight: 'bold',
                color: '#FFFFFF',
                whiteSpace: 'nowrap',
                animation: 'marquee 15s linear infinite',
            }}>
                {getPlainText(noticeText)} 
            </p>
            <style>
                {`
                    @keyframes marquee {
                        0% {
                            transform: translateX(100%);
                        }
                        100% {
                            transform: translateX(-100%);
                        }
                    }
                `}
            </style>
        </div>
    );
};

export default MarqueeNotice;

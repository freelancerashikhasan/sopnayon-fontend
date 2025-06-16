import logo from '../assets/images/logo.png'
import languageIcon from '../assets/icon/language.png'
import accountIcon from '../assets/icon/user.png'
import '../assets/styles/header.css'
import { NavLink, useLocation } from 'react-router-dom'
import AuthContext from '../Context/AuthContext'
import { useContext, useState } from 'react'
function Header() {
    const { companyInfomation,getTranslation } = useContext(AuthContext);
    const location = useLocation();
    const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');
    const toggleLanguage = () => {
        const newLanguage = language === 'en' ? 'bn' : 'en';
        setLanguage(newLanguage);
        localStorage.setItem('language', newLanguage); 
        window.location.reload();
    };

    return (
       <div className='header'>
        <div className="container">
            <nav className="navbar navbar-expand-lg sticky-top">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">
                           {companyInfomation && companyInfomation.logo ? (
                                <img className='headerImage' src={companyInfomation.logo} alt="Company Logo" />
                            ) : (
                                <img className='headerImage' src={logo} alt="Default Logo" /> // Fallback logo
                            )}
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            {location.pathname !== '/account' && (
                             <>
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex w-100 justify-content-between">
                                    <li className="nav-item">
                                        <NavLink className="nav-link active" aria-current="page" to="/">{getTranslation('home', 'Home')}</NavLink>
                                    </li>
                                    <li className="nav-item">
                                    <NavLink className="nav-link" aria-current="page" to="/about">{getTranslation('about us', 'About Us')}</NavLink>
                                    </li>
                                    <li className="nav-item">
                                    <NavLink className="nav-link" aria-current="page" to="/comitee">{getTranslation('comitee', 'Comitee')}</NavLink>
                                    </li>
                                    <li className="nav-item">
                                    <NavLink className="nav-link" aria-current="page" to="/comitee">{getTranslation('success', 'Success')}</NavLink>
                                    </li>
                                    <li className="nav-item">
                                    <NavLink className="nav-link" aria-current="page" to="/comitee">{getTranslation('work', 'Work')}</NavLink>
                                    </li>
                                    <li className="nav-item">
                                    <NavLink className="nav-link" aria-current="page" to="/terms-and-condition">{getTranslation('terms and condition', 'Terms and Condition')}</NavLink>
                                    </li>
                                    <li className="nav-item">
                                    <NavLink className="nav-link" aria-current="page" to="/blog">{getTranslation('blog', 'Blog')}</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" aria-current="page" to="/gallary">{getTranslation('gallary', 'Gallary')}</NavLink>
                                    </li>
                                </ul>
                                </>
                             )}
                        <div className={`d-flex justify-content-end ${location.pathname == '/account' ? 'w-100' : ''}`}>

                            <a className='language-btn' onClick={(e) => { 
                               toggleLanguage();
                            }}>
                                <img src={languageIcon} alt="" />
                            </a>
                            <NavLink to="/login" className='language-btn' style={{  width: '150px' }}>
                            <img src={accountIcon} alt="" /> <span className='text-white'>{getTranslation('profile', 'Profile')}</span>
                            </NavLink>
                        </div>
                    </div>
                   
                </div>
            </nav>
        </div>
       </div>
    )
}

export default Header

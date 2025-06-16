import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
// Create a Context for authentication
const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [authToken, setAuthToken] = useState(localStorage.getItem('authToken') || null);
    const [userEmail, setUserEmail] = useState('');
    const [companyInfomation, setCompanyInformation] = useState(null);
    const [siteKeyword, setSiteKeyword] = useState(null);
    const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');

    // const url = 'https://backend.psvobd.com/api';
    const url = 'http://127.0.0.1:8000/api';

    useEffect(() => {
        
        // Fetch from API if not in local storage
        axios.get(`${url}/company-information`)
            .then(response => {
                const data = response.data;
                setCompanyInformation(data);
                localStorage.setItem('companyInformation', JSON.stringify(data));
            })
            .catch(error => {
                console.error('Fetching company information failed:', error);
            });
    }, []);
    useEffect(() => {
        
        // Fetch from API if not in local storage
        axios.get(`${url}/site-keyword`)
            .then(response => {
                localStorage.removeItem('siteKeyword');
                const data = response.data;
                setSiteKeyword(data); // Update state
                localStorage.setItem('siteKeyword', JSON.stringify(data));
            })
            .catch(error => {
                console.error('Fetching company information failed:', error);
            });
    }, []);
    const getTranslation = (keyword, fallback = keyword) => {
        if (!siteKeyword) return fallback;
        const match = siteKeyword.find((item) => item.keyword === keyword);
        if (!match) return fallback;
        return match[language] || fallback;
    };
    useEffect(() => {
        if (authToken) {
            axios.get(`${url}/user`, {
                headers: { Authorization: `Bearer ${authToken}` }
            })
            .then(response => {
                setUserEmail(response.data.email);
                localStorage.setItem('userData', JSON.stringify(response.data.member));
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
                setAuthToken(null);
                localStorage.removeItem('authToken');
            });
        }
    }, [authToken]);

    const login = (input) => {
        return axios.post(`${url}/login`, input)
            .then(response => {
                const token = response.data.token;
                localStorage.setItem('authToken', token);
                setAuthToken(token);
                setUserEmail(response.data.user.email);
                toast.success('Login Successful');
            })
            .catch(error => {
                console.error('Login failed:', error);
                throw error;
            });
    };
    const register = (input) => {
        return axios.post(`${url}/register`, input)
            .then(response => {
                toast.success('Registration Successful');
                window.location.href = '/login';
            })
            .catch(error => {
                console.error('Login failed:', error);
                throw error;
            });
    };

    const logout = () => {
        if (authToken) {
            return axios.post(`${url}/logout`, {}, {
                headers: { Authorization: `Bearer ${authToken}` }
            })
            .then(() => {
                setAuthToken(null);
                setUserEmail('');
                localStorage.removeItem('authToken');
                toast.error('Logged out Successfully!');
            })
            .catch(error => {
                console.error('Error logging out:', error);
            });
        }
    };
    return (
        <AuthContext.Provider value={{ authToken, userEmail, login,register, logout, companyInfomation, url, getTranslation }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;

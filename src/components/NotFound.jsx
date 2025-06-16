import React from 'react';

const NotFound = () => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      fontFamily: "'Arial', sans-serif",
      textAlign: 'center',
      color: '#333',
    },
    errorCode: {
      fontSize: '96px',
      fontWeight: 'bold',
      color: '#FF6F61',
      margin: '0',
    },
    message: {
      fontSize: '24px',
      margin: '10px 0',
    },
    backButton: {
      marginTop: '20px',
      padding: '10px 20px',
      fontSize: '16px',
      color: '#fff',
      backgroundColor: '#FF6F61',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      textDecoration: 'none',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.errorCode}>404</h1>
      <p style={styles.message}>Oops! The page you are looking for does not exist.</p>
      <a href="/" style={styles.backButton}>
        Go Back Home
      </a>
    </div>
  );
};

export default NotFound;

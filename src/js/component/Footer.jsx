import React from 'react';

const Footer = () => {
    //make it dynamic

    const todayDate = new Date();
    const currentYear = todayDate.getFullYear();

    return (
        <div className='container'>
            <footer className='text-center text-light'>{`Copyright @ Your Website ${currentYear}`}</footer>
        </div>
    );
};

export default Footer;

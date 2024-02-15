'use client'
import React, { useState } from 'react';
import lightImage from '@/assets/img/sun.png';
import Image from "next/image"
const SwitchDark = () => {
  const [isDark, setIsDark] = useState(false);

  const theme = isDark ? 'dark' : 'light';

  const handleThemeSwitch = () => {
    localStorage.setItem('theme-color', theme);
    document.querySelector('body').classList.add(theme);

    if (isDark) {
      document.querySelector('body').classList.remove('light');
      setIsDark(false);
    } else {
      document.querySelector('body').classList.remove('dark');
      setIsDark(true);
    }
  };

  return (
    <>
    <label className={`theme-switcher-label d-flex  ${isDark ? 'active' : ''}`}>
      <input
        type='checkbox'
        onClick={handleThemeSwitch}
        className='theme-switcher'
      />
      <div className='switch-handle'>
        <span className='light-text'>
          <Image src={lightImage} alt='swicher' className='filter_1' />
        </span>
        <span className='dark-text'>
          <i className='fa fa-moon-o' aria-hidden='true'></i>
        </span>
      </div>
    </label>
 
    
    </>
  );
};

export default SwitchDark;

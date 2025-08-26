'use client';
import React, { useState } from 'react';
import '@/public/styles/header.css'; 
import Image from 'next/image';

const Header = () => {
  const [menuExpanded, setMenuExpanded] = useState(false);

  const toggleMenu = () => {
    setMenuExpanded(prev => !prev);
  };

  return (
    <header className="siteHeader" data-expanded={menuExpanded}>
      <div className="siteHeader--container">
        <a className="homeLink" href="/">
        <Image src='/images/cgh-logo.svg'  alt="CGH logo"
            width="330"
            height="14"
            decoding="async"
            ></Image>
         
        </a>
        <nav>
          <button
            aria-controls="primary-menu"
            aria-label={menuExpanded ? 'Close' : 'Open'}
            className="menu-toggle"
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className="menu" id="primary-menu">
            <li><a href="/work/logos">Work</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

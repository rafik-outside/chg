'use client';
import React, { useState } from 'react';
import '@/public/styles/header.css'; 
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [menuExpanded, setMenuExpanded] = useState(false);

  const toggleMenu = () => {
    setMenuExpanded(prev => !prev);
  };

  return (
    <header className="siteHeader" data-expanded={menuExpanded}>
      <div className="siteHeader--container">
        <Link className="homeLink" href="/">
        <Image src='/images/cgh-logo.svg'  alt="CGH logo"
            width="330"
            height="14"
            decoding="async"
            ></Image>
         
        </Link>
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
            <li>
              <Link href="/work/logos">Work</Link>
              </li>
              <li>
              <Link href="/contact">Contact</Link>
              </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

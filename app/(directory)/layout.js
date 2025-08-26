'use client';
import { useEffect, useState } from 'react'; 
import "@/public/styles/global.css";
import '@/public/styles/header.css'; 

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

export default function RootLayout({ children }) {
  const [isShrunk, setIsShrunk] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsShrunk(true); 
      } else {
        setIsShrunk(false); 
      }
    };

    
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  return (
    <html lang="en">
      <head>
      <title>Chermayeff &amp; Geismar &amp; Haviv  </title>
      <link rel="icon" href="/images/favicon.ico" type="image/png" />
      </head>
      <body className={`chermayeff camphorregular ${isShrunk ? 'js-shrunkNav' : ''}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

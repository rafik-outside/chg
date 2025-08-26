'use client';
import MainContainer from '../components/common/MainContainer';
import Image from 'next/image';
import '@/public/styles/contact.css';
import { useState } from 'react';
import ContactModal from './ContactModal';


export default function ContactPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);


    return (
        <MainContainer id={`contact`} className={`pageType-page`}>
            <div className="content--container contact--container js-fade__slow">
                <div className="row">
                    <div className="columns columns--4 columns--12--small">
                        <h1>Contact</h1>
                        <p>
                            <strong>Work Inquiries</strong><br />
                            <a href="mailto:info@cghnyc.com" rel="noopener" target="_blank">info@cghnyc.com</a><br />
                            212.532.4595
                        </p>
                        <p>
                            <strong>Press Inquiries</strong><br />
                            Christopher Nutter<br />
                            917.770.0350<br />
                            <a href="mailto:press@cghnyc.com" rel="noopener" target="_blank">press@cghnyc.com</a>
                        </p>
                        <p>
                            <strong>Chermayeff & Geismar & Haviv</strong><br />
                            27 West 24th Street, Suite 900<br />
                            New York, NY 10010
                        </p>
                        <p>
                            <a href="https://twitter.com/cghnyc" rel="noopener" target="_blank">Twitter</a><br />
                            <a href="https://www.instagram.com/chermayeff_geismar_haviv/" rel="noopener" target="_blank">Instagram</a><br />
                            <a href="https://www.facebook.com/cghnyc" rel="noopener" target="_blank">Facebook</a>
                        </p>
                         <div >
                        <button
                            onClick={() => setIsModalOpen(true)}
                            style={{
                                padding: '12px 24px',
                                fontSize: '16px',
                                backgroundColor: '#0066cc',
                                color: 'white',
                                border: 'none',
                                borderRadius: '6px',
                                cursor: 'pointer',
                                marginTop: '20px',
                                margin: '0'
                            }}
                        >
                            Contact Us
                        </button>

                        <ContactModal
                            isOpen={isModalOpen} 
                            onClose={() => setIsModalOpen(false)}
                        />
                    </div>
                    </div>
                   

                    <div className="columns columns--8 columns--12--small">
                        <Image
                            src="/images/contact-collage.webp"
                            alt="Ivan Chermayeff - Il Furioso"
                            width="1860"
                            height="1213"
                        />

                    </div>
                </div>
            </div>
        </MainContainer >
    );
}

import '@/public/styles/footer.css'; 
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="site-footer--container">
        <section className="site-footer--links">
          <ul>
            <li><Link  href="/">Home</Link></li>
            <li><Link  href="/work/logos">Work</Link></li>
            <li><Link  href="/contact">Contact</Link></li>
          </ul>
        </section>

        <section className="site-footer--address">
          <span>
            <strong>Chermayeff &amp; Geismar &amp; Haviv</strong><br />
            27 West 24th Street, Suite 900<br />
            New York, NY 10010<br />
            212.532.4595
          </span>
        </section>

        <section className="site-footer--contact">
          <ul>
            <li>
              <span>
                <strong>Work Inquiries</strong><br />
                <a href="mailto:info@cghnyc.com" target="_blank" rel="noopener noreferrer">
                  info@cghnyc.com
                </a>
              </span>
            </li>
            <li>
              <span>
                <strong>Press Inquiries</strong><br />
                Christopher Nutter<br />
                917.770.0350<br />
                <a href="mailto:press@cghnyc.com" target="_blank" rel="noopener noreferrer">
                  press@cghnyc.com
                </a>
              </span>
            </li>
          </ul>
        </section>

        <section className="site-footer--social">
          <ul>
            <li><a href="https://twitter.com/cghnyc" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://www.instagram.com/chermayeff_geismar_haviv/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://www.facebook.com/cghnyc" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          </ul>
        </section>
      </div>
    </footer>
  );
}

export default Footer;

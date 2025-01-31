import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h4>Tentang Kami</h4>
                    <p>
                        Donasi Sosial adalah platform yang menghubungkan para donatur dengan mereka yang membutuhkan.
                        Kami berkomitmen untuk memberikan bantuan kepada korban bencana dengan transparansi dan kecepatan.
                    </p>
                </div>

                <div className="footer-section">
                    <h4>Kontak</h4>
                    <p>Email: <a href="mailto:support@donasisosial.com">support@donasisosial.com</a></p>
                    <p>Telepon: <a href="tel:+6208123456789">+62 0812-3456-789</a></p>
                    <p>Alamat: Jakarta, Indonesia</p>
                </div>

                <div className="footer-section">
                    <h4>Tautan Cepat</h4>
                    <ul>
                        <li><Link to="/">Beranda</Link></li>
                        <li><Link to="/donate">Donasi</Link></li>
                        <li><Link to="/request">Minta Bantuan</Link></li>
                        <li><Link to="/dashboard">Dashboard</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Ikuti Kami</h4>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <img src="/assets/images/facebook-icon.png" alt="Facebook" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <img src="/assets/images/instagram-icon.png" alt="Instagram" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <img src="/assets/images/twitter-icon.png" alt="Twitter" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Donasi Sosial. Semua Hak Dilindungi.</p>
            </div>
        </footer>
    );
};

export default Footer;

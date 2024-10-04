import React from 'react';
import FooterCss from './Footer.module.css';
import '@fortawesome/fontawesome-free/css/all.css';

function Footer() {
    return (
        <footer className={FooterCss.footer}>
            <div className={FooterCss.container}>
                <div className={FooterCss.column}>
                    <h3>About Amigos</h3>
                    <p>&copy; 2024 Amigos. All rights reserved.</p>
                </div>

                <div className={FooterCss.column}>
                    <h3>Customer Reviews</h3>
                    <p>Rating · 4.7 (273 Reviews)</p>
                </div>

                <div className={FooterCss.column}>
                    <h3>Contact Us</h3>
                    <p>
                        Phone: <a href="tel:+15416044033">04-604-4033</a>
                    </p>
                    <div className={FooterCss.socialLinks}>
                        <a href="https://www.facebook.com/AmigosBurgerBar" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="https://www.tiktok.com/@amigos_burger_bar1" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-tiktok"></i>
                        </a>
                        <a href="https://www.instagram.com/amigos_burger_bar/?hl=en" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>

                <div className={FooterCss.column}>
                    <h3>Opening Hours</h3>
                    <p>
                        Tuesday–Sunday: 12:30 pm–12 am <br />
                        Monday: 12:30 pm–12 am <br />
                    </p>
                </div>
            </div>

        </footer>
    );
}

export default Footer;



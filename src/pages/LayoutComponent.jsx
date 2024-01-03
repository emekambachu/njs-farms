import {Link, Outlet} from "react-router-dom";
import {
    faClock,
    faEnvelope,
    faEnvelopeOpen,
    faLocation,
    faMobile,
    faPaperPlane
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const LayoutComponent = () => {
    const year = new Date().getFullYear();

    return (
        <>
            <div className="preloader">
                <img className="preloader__image" width="55" src="/public/images/loader.png" alt=""/>
            </div>
            <div className="page-wrapper">
                <header className="main-header">
                    <div className="topbar">
                        <div className="container">
                            <div className="topbar__left">
                                <div className="topbar__social">
                                    <a href="#" className="fa fa-facebook-square"></a>
                                    <a href="#" className="fa fa-twitter"></a>
                                    <a href="#" className="fa fa-pinterest-p"></a>
                                    <a href="#" className="fa fa-instagram"></a>
                                </div>
                                <p>Welcome to Nichola J Stein Farm</p>
                            </div>
                            <div className="topbar__right">
                                <a href="mailto:info@njsfarm.com">
                                    <FontAwesomeIcon
                                        icon={faEnvelopeOpen}
                                        className="text-white"
                                    />
                                    <span>info@njsfarm.com</span>
                                </a>
                                <a href="#">
                                    <FontAwesomeIcon
                                        icon={faClock}
                                        className="text-white"
                                    />
                                    Mon - Sat 8:00 - 6:30, Sunday - CLOSED
                                </a>
                            </div>
                        </div>
                    </div>
                    <nav className="main-menu">
                        <div className="container">
                            <div className="logo-box">
                                <a href="/" aria-label="logo image">
                                    <img src="/images/logo.png" width="153" alt=""/></a>
                                <span className="fa fa-bars mobile-nav__toggler"></span>
                            </div>
                            <ul className="main-menu__list">
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/about">About</Link>
                                </li>
                                <li>
                                    <Link to="/gallery">Gallery</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Contact</Link>
                                </li>
                            </ul>

                            <div className="main-header__info">
                                <a href="tel:682 214 3661" className="main-header__info-phone">
                                    <FontAwesomeIcon
                                        icon={faMobile}
                                        className="text-white"
                                    />
                                    <span className="main-header__info-phone-content">
                                        <span className="main-header__info-phone-text">Call Anytime</span>
                                        <span className="main-header__info-phone-title">+1(518) 692 4744</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </nav>
                </header>
                <div className="stricky-header stricked-menu main-menu">
                    <div className="sticky-header__content"></div>
                </div>

                <Outlet />

                <footer className="site-footer">
                    <div className="container">
                        <div className="row">

                            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4">
                                <div className="footer-widget">
                                    <a href="" className="footer-widget__Logo">
                                        <img src="/images/logo.png" width="153" alt=""/>
                                    </a>

                                    <form action="#" data-url="YOUR_MAILCHIMP_URL" className="mc-form">
                                        <input type="email" name="EMAIL" placeholder="Email Address"/>
                                            <button type="submit">
                                                <FontAwesomeIcon
                                                    icon={faPaperPlane}
                                                    style={{ color: '#255946' }}
                                                />
                                            </button>
                                    </form>
                                    <div className="mc-form__response"></div>
                                    <div className="footer__social">
                                        <a href="#" className="fa fa-facebook-square"></a>
                                        <a href="#" className="fa fa-twitter"></a>
                                        <a href="#" className="fa fa-instagram"></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4">
                                <div className="footer-widget footer-widget__links-widget">
                                    <h3 className="footer-widget__title">Links</h3>
                                    <ul className="list-unstyled footer-widget__links">
                                        <li>
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li>
                                            <Link to="/about">About</Link>
                                        </li>
                                        <li>
                                            <Link to="/gallery">Gallery</Link>
                                        </li>
                                        <li>
                                            <Link to="/contact">Gallery</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4">
                                <h3 className="footer-widget__title">Contact</h3>
                                <ul className="list-unstyled footer-widget__contact">
                                    <li>
                                        <FontAwesomeIcon
                                            icon={faMobile}
                                            className="text-white mr-1"
                                        />
                                        <a href="tel:682 214 3661">+1(518) 692 4744</a>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon
                                            icon={faEnvelope}
                                            className="text-white mr-1"
                                        />
                                        <a href="mailto:info@njsfarm.com">info@njsfarm.com</a>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon
                                            icon={faLocation}
                                            className="text-white mr-1"
                                        />
                                        <a href="#">Zurich, Switzerland</a>
                                        <a href="#">New York, United States</a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </footer>

                <div className="bottom-footer">
                    <div className="container">
                        <p>© Copyright {year} by Nichola J Stein Farm</p>
                        <div className="bottom-footer__links">
                            <a href="#">Terms & Conditions</a>
                            <a href="#">Privacy Policy</a>
                            <a href="#">Sitemap</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mobile-nav__wrapper">
                <div className="mobile-nav__overlay mobile-nav__toggler"></div>

                <div className="mobile-nav__content">
                    <span className="mobile-nav__close mobile-nav__toggler">
                        <i className="far fa-times"></i>
                    </span>
                    <div className="logo-box">
                        <a href="/" aria-label="logo image">
                            <img src="/images/logo.png" width="155" alt="" /></a>
                    </div>

                    <div className="mobile-nav__container"></div>

                    <ul className="mobile-nav__contact list-unstyled">
                        <li>
                            <i className="agrikon-icon-email"></i>
                            <a href="mailto:info@njsfarm.com">info@njsfarm.com</a>
                        </li>
                        <li>
                            <i className="agrikon-icon-telephone"></i>
                            <a href="tel:682 214 3661">+1(518) 692 4744</a>
                        </li>
                    </ul>
                    <div className="mobile-nav__top">
                        <div className="mobile-nav__language">
                            <img src="/images/resources/flag-1-1.jpg" alt=""/>
                                <label className="sr-only" for="language-select">select language</label>

                                <select className="selectpicker" id="language-select">
                                    <option value="english">English</option>
                                    <option value="arabic">Arabic</option>
                                </select>
                        </div>
                        <div className="mobile-nav__social">
                            <a href="#" aria-label="twitter"><i className="fa fa-twitter"></i></a>
                            <a href="#" aria-label="facebook"><i className="fa fa-facebook-square"></i></a>
                            <a href="#" aria-label="instagram"><i className="fa fa-instagram"></i></a>
                        </div>
                    </div>
                </div>

            </div>

            <div className="search-popup">
                <div className="search-popup__overlay search-toggler"></div>
                <div className="search-popup__content">
                    <form action="#">
                        <label htmlFor="search" className="sr-only">search here</label>
                        <input type="text" id="search" placeholder="Search Here..." />
                        <button type="submit" aria-label="search submit" className="thm-btn">
                            <FontAwesomeIcon
                                icon={faPaperPlane}
                                style={{ color: '#255946' }}
                            />
                        </button>
                    </form>
                </div>
            </div>

            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" data-target="html" className="scroll-to-target scroll-to-top"><i className="fa fa-angle-up"></i></a>
        </>
    )
}
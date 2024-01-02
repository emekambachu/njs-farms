import {Link, Outlet} from "react-router-dom";

export const LayoutComponent = () => {
    return (
        <>
            <div className="preloader">
                <img className="preloader__image" width="55" src="/assets/images/loader.png" alt=""/>
            </div>
            <div className="page-wrapper">
                <header className="main-header">
                    <div className="topbar">
                        <div className="container">
                            <div className="topbar__left">
                                <div className="topbar__social">
                                    <a href="#" className="fab fa-facebook-square"></a>
                                    <a href="#" className="fab fa-twitter"></a>
                                    <a href="#" className="fab fa-pinterest-p"></a>
                                    <a href="#" className="fab fa-instagram"></a>
                                </div>
                                <p>Welcome to True Grow Farms</p>
                            </div>
                            <div className="topbar__right">
                                <a href="mailto:info@truegrowfarms.com">
                                    <i className="agrikon-icon-email"></i>
                                    <span>info@truegrowfarms.com</span>
                                </a>
                                <a href="#"><i className="agrikon-icon-clock"></i>Mon - Sat 8:00 - 6:30, Sunday - CLOSED</a>
                            </div>
                        </div>
                    </div>
                    <nav className="main-menu">
                        <div className="container">
                            <div className="logo-box">
                                <a href="/" aria-label="logo image">
                                    <img src="/assets/images/true_grow_farms_logo.png" width="153" alt=""/></a>
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
                                    <i className="agrikon-icon-phone-call"></i>
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
                                        <img src="/assets/images/true_grow_farms_logo.png" width="153" alt=""/>
                                    </a>

                                    <form action="#" data-url="YOUR_MAILCHIMP_URL" className="mc-form">
                                        <input type="email" name="EMAIL" placeholder="Email Address"/>
                                            <button type="submit">
                                                <i className="agrikon-icon-right-arrow"></i>
                                            </button>
                                    </form>
                                    <div className="mc-form__response"></div>
                                    <div className="footer__social">
                                        <a href="#" className="fab fa-facebook-square"></a>
                                        <a href="#" className="fab fa-twitter"></a>
                                        <a href="#" className="fab fa-instagram"></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-2">
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

                            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                                <div className="footer-widget">
                                    <h3 className="footer-widget__title">News</h3>
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                                <h3 className="footer-widget__title">Contact</h3>
                                <ul className="list-unstyled footer-widget__contact">
                                    <li>
                                        <i className="agrikon-icon-telephone"></i>
                                        <a href="tel:682 214 3661">+1(518) 692 4744</a>
                                    </li>
                                    <li>
                                        <i className="agrikon-icon-email"></i>
                                        <a href="mailto:info@truegrowfarms.com">info@truegrowfarms.com</a>
                                    </li>
                                    <li>
                                        <i className="agrikon-icon-pin"></i>
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
                        <p>© Copyright {{ date('Y') }} by True Grow Farms</p>
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
                    <span className="mobile-nav__close mobile-nav__toggler"><i className="far fa-times"></i></span>
                    <div className="logo-box">
                        <a href="{{ url('/') }}" aria-label="logo image">
                            <img src="{{ asset('assets/images/true_grow_farms_logo.png') }}" width="155" alt="" /></a>
                    </div>

                    <div className="mobile-nav__container"></div>

                    <ul className="mobile-nav__contact list-unstyled">
                        <li>
                            <i className="agrikon-icon-email"></i>
                            <a href="mailto:info@truegrowfarms.com">info@truegrowfarms.com</a>
                        </li>
                        <li>
                            <i class="agrikon-icon-telephone"></i>
                            <a href="tel:682 214 3661">+1(518) 692 4744</a>
                        </li>
                    </ul>
                    <div class="mobile-nav__top">
                        <div class="mobile-nav__language">
                            <img src="{{ asset('assets/images/resources/flag-1-1.jpg') }}" alt="">
                                <label class="sr-only" for="language-select">select language</label>

                                <select class="selectpicker" id="language-select">
                                    <option value="english">English</option>
                                    <option value="arabic">Arabic</option>
                                </select>
                        </div>
                        <div class="mobile-nav__social">
                            <a href="#" aria-label="twitter"><i class="fab fa-twitter"></i></a>
                            <a href="#" aria-label="facebook"><i class="fab fa-facebook-square"></i></a>
                            <a href="#" aria-label="instagram"><i class="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>

            </div>

            <div class="search-popup">
                <div class="search-popup__overlay search-toggler"></div>

                <div class="search-popup__content">
                    <form action="#">
                        <label for="search" class="sr-only">search here</label>
                        <input type="text" id="search" placeholder="Search Here..." />
                        <button type="submit" aria-label="search submit" class="thm-btn">
                            <i class="fa fa-search"></i>
                        </button>
                    </form>
                </div>

            </div>

            <a href="#" data-target="html" class="scroll-to-target scroll-to-top"><i class="fa fa-angle-up"></i></a>
        </>
    )
}
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTractor, faWheatAwn} from "@fortawesome/free-solid-svg-icons";

export const AboutComponent = () => {
    return (
        <>
            <section className="page-header">
                <div
                    className="page-header__bg"
                    style={{ backgroundImage: "url('/images/backgrounds/page-header-bg-1-1.jpg')" }}>
                </div>

                <div className="container">
                    <ul className="thm-breadcrumb list-unstyled">
                        <li><a href="/">Home</a></li>
                        <li>/</li>
                        <li><span>About</span></li>
                    </ul>
                    <h2>About Us</h2>
                </div>
            </section>

            <section className="service-one">
                <div className="container">
                    <div className="row">
                        <div
                            className="col-md-12 col-lg-4 wow fadeInUp"
                            data-wow-duration="1500ms"
                        >
                            <div className="service-one__box">
                                <img src="/images/services/service-1-1.jpg" alt=""/>
                                    <div className="service-one__box-content">
                                        <h3><a href="">Agriculture Leader</a></h3>
                                    </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-4 wow fadeInUp" data-wow-duration="1500ms">
                            <div className="service-one__box">
                                <img src="/images/services/service-1-2.jpg" alt=""/>
                                    <div className="service-one__box-content">
                                        <h3><a href="">Quality Standards</a></h3>
                                    </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-4 wow fadeInUp" data-wow-duration="1500ms">
                            <div className="service-one__box">
                                <img src="/images/services/service-1-3.jpg" alt=""/>
                                    <div className="service-one__box-content">
                                        <h3><a href="">Organic Services</a></h3>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-one">
                <img src="/images/icons/about-bg-icon-1-1.png" className="about-one__bg-shape-1" alt=""/>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="about-one__images">
                                    <img src="/images/resources/about-1-1.jpg" alt=""/>
                                        <img src="/images/resources/about-1-2.jpg" alt=""/>
                                            <div className="about-one__count wow fadeInLeft" data-wow-duration="1500ms">
                                                <span>Trusted by</span>
                                                <h4>8900</h4>
                                            </div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="about-one__content">
                                    <div className="block-title text-left">
                                        <div className="block-title__image"></div>
                                        <p>Welcome to Nichola J Stein Farm</p>
                                        <h3>Better Agriculture for
                                            Better Future</h3>
                                    </div>
                                    <div className="about-one__tagline">
                                        <p>We have 30 years of agriculture & eco farming experience globaly</p>
                                    </div>
                                    <div className="about-one__summery">
                                        <p>Our very first community supporting agriculture (CSA) farm which been growing food, fun, and community spirit from the ground up for 34 years.<br/>
                                            We set the tone and standards of home grown local, organic and regenerative community. Our little urban farm has been home for three generations of families sharing the livingness of our sacred soil’s celebration.</p>
                                    </div>
                                    <div className="about-one__icon-row">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="about-one__box">
                                                    <FontAwesomeIcon
                                                        icon={faTractor}
                                                        className="fa-2x mr-1"
                                                        style={{ color: "#319147" }}
                                                    />
                                                    <h4><a href="">Professional Farmers</a></h4>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="about-one__box">
                                                    <FontAwesomeIcon
                                                        icon={faWheatAwn}
                                                        className="fa-2x mr-1"
                                                        style={{ color: "#319147" }}
                                                    />
                                                    <h4><a href="">Organic & Eco Solutions</a></h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>

            <section className="about-three">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="about-three__image">
                                <img src="/images/njs_ceo.jpeg" alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-three__content">
                                <div className="block-title">
                                    <div className="block-title__image"></div>
                                    <p>Get to know us</p>
                                    <h3>Our CEO</h3>
                                </div>
                                <div className="about-three__summery">
                                    <p>Nichola J. Stein, Our CEO and Livestock investor, explores how agricultural innovation is contributing to Zurich farmers combat climate challenges on his 13,000-acre farm.</p>
                                    <p>Nichola had a remarkable educational experience in Management and Agriculture. He studied Business Administration in HWZ University of Applied Sciences, Zurich. He got his Bachelor's degree in Business Administration and Management and a Masters degree in Agricultural Business and Management.</p>
                                    <p>Nichola relies on innovation in agricultural technology to farm sustainably and look after the environment. This helps reduce the impact climate change has on farming and allows them to grow high-quality crops despite the changes. He says "says leaving a legacy means leaving the land better than it was before".</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="call-to-action__three jarallax"
                     data-jarallax=""
                     data-speed="0.3"
                     data-imgPosition="50% 50%">
                <img className="call-to-action__three__bg jarallax-img"
                     src="/images/backgrounds/cta-1-bg-1.jpg" alt="parallax-image" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 wow fadeInLeft" data-wow-duration="1500ms">
                            <div className="call-to-action__three-image">
                                <img src="/images/resources/cta-3-1.jpg" alt=""/>
                                    <img src="/images/resources/cta-3-2.jpg" alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="call-to-action__three-content">
                                <h3>Providing High Quality Products</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="gray-boxed-wrapper home-one__boxed">
                <img src="/images/icons/home-1-blog-bg.png" alt="" className="home-one__boxed-bg"/>
                    <div className="blog-home__slogan">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-9">
                                    <div className="blog-home__slogan-main">
                                        <FontAwesomeIcon
                                            icon={faWheatAwn}
                                            className="fa-2x mr-1"
                                            style={{ color: "#319147" }}
                                        />
                                        <div className="blog-home__slogan-content">
                                            <h3>We Care About Our Agriculture Growth</h3>
                                            <p>Helping farmers to emerging markets maximize their profits. We use agronomic machine learning, remote sensing, and mobile phones to deliver financing, farm products.<br/>
                                                Customized advice to smallholder farmers with radical efficiency and scalability agricultural methods used.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="blog-home__slogan-image">
                                        <img src="/images/resources/blog-cta-1.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>

            <div className="client-carousel client-carousel__has-border-top">
                <div className="container">

                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-3">
                            <div className="contact-two__content">
                                <div className="block-title">
                                    <div className="block-title__image"></div>
                                    <h3>Partners</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="thm-swiper__slider swiper-container"
                         data-swiper-options='{"spaceBetween": 140, "slidesPerView": 5, "autoplay": { "delay": 5000 }, "breakpoints": {
                "0": {
                    "spaceBetween": 30,
                    "slidesPerView": 2
                },
                "375": {
                    "spaceBetween": 30,
                    "slidesPerView": 2
                },
                "575": {
                    "spaceBetween": 30,
                    "slidesPerView": 3
                },
                "767": {
                    "spaceBetween": 50,
                    "slidesPerView": 4
                },
                "991": {
                    "spaceBetween": 50,
                    "slidesPerView": 5
                },
                "1199": {
                    "spaceBetween": 100,
                    "slidesPerView": 5
                }
            }}'>
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <img src="/images/partners/1.png" alt=""/>
                            </div>
                            <div className="swiper-slide">
                                <img src="/images/partners/2.png" alt=""/>
                            </div>
                            <div className="swiper-slide">
                                <img src="/images/partners/3.png" alt=""/>
                            </div>
                            <div className="swiper-slide">
                                <img src="/images/partners/4.png" alt=""/>
                            </div>
                            <div className="swiper-slide">
                                <img src="/images/partners/5.png" alt=""/>
                            </div>
                            <div className="swiper-slide">
                                <img src="/images/partners/6.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
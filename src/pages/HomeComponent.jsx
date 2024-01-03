import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAppleWhole,
    faArrowLeft,
    faArrowRight,
    faCarrot,
    faCow, faLeaf, faStar,
    faTractor,
    faWheatAwn
} from "@fortawesome/free-solid-svg-icons";

export const HomeComponent = () => {
    return (
        <>
            <section className="main-slider">
                <div className="swiper-container thm-swiper__slider" data-swiper-options='{
        "slidesPerView": 1,
        "loop": true,
        "effect": "fade",
        "autoplay": {
            "delay": 5000
        },
        "navigation": {
            "nextEl": "#main-slider__swiper-button-next",
            "prevEl": "#main-slider__swiper-button-prev"
        }
    }'>
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div
                                className="image-layer"
                                style={{ backgroundImage: "url('/images/main-slider/main-slider-1-1.jpg')" }}
                            >
                            </div>

                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-7 col-lg-7">
                                        <span className="tagline">Welcome to Nichola J Stein Farm</span>
                                        <h2><span>Agriculture</span> <br/>
                                            & Eco Farming</h2>
                                        <a href="/about" className=" thm-btn">Discover More</a>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="image-layer" style={{ backgroundImage: "url('/images/main-slider/main-slider-1-2.jpg')" }}>
                            </div>

                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-7 col-lg-7">
                                        <span className="tagline">Welcome to Nichola J Stein Farm</span>
                                        <h2><span>Agriculture</span><br/>
                                            & Eco Farming</h2>
                                        <a href="/about" className=" thm-btn">Discover More</a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="main-slider__nav">
                        <div className="swiper-button-prev" id="main-slider__swiper-button-next">
                            <i className="fa fa-angle-right"></i>
                        </div>
                        <div className="swiper-button-next" id="main-slider__swiper-button-prev">
                            <i className="fa fa-angle-left"></i>
                        </div>
                    </div>
                </div>
            </section>

            <section className="service-one">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-4 wow fadeInUp" data-wow-duration="1500ms">
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
                                            We set the tone and standards of home grown local, organic and regenerative community. Our little urban farm has been home for three generations of families sharing the livingness of our sacred soil’s celebration..</p>
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
                                    <a href="/about" className="thm-btn">Discover More</a>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>

            <section className="service-two">
                <div className="service-two__bottom-curv"></div>
                <div className="container">
                    <div className="block-title text-center">
                        <div className="block-title__image"></div>
                        <p>Our Services list</p>
                        <h3>What We’re Offering</h3>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="service-two__card">
                                <div className="service-two__card-image">
                                    <img src="/images/services/service-2-1.jpg" alt=""/>
                                </div>
                                <div className="service-two__card-content">
                                    <div className="service-two__card-icon">
                                        <FontAwesomeIcon
                                            icon={faWheatAwn}
                                            className="text-white"
                                        />
                                    </div>
                                    <h3><a href="">Agriculture Products</a></h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="service-two__card">
                                <div className="service-two__card-image">
                                    <img src="/images/services/service-2-2.jpg" alt=""/>
                                </div>
                                <div className="service-two__card-content">
                                    <div className="service-two__card-icon">
                                        <FontAwesomeIcon
                                            icon={faAppleWhole}
                                            className="text-white"
                                        />
                                    </div>
                                    <h3><a href="">Organic Products</a></h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="service-two__card">
                                <div className="service-two__card-image">
                                    <img src="/images/services/service-2-3.jpg" alt=""/>
                                </div>
                                <div className="service-two__card-content">
                                    <div className="service-two__card-icon">
                                        <FontAwesomeIcon
                                            icon={faCarrot}
                                            className="text-white"
                                        />
                                    </div>
                                    <h3><a href="">Fresh Vegetables</a></h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="service-two__card">
                                <div className="service-two__card-image">
                                    <img src="/images/services/service-2-4.jpg" alt=""/>
                                </div>
                                <div className="service-two__card-content">
                                    <div className="service-two__card-icon">
                                        <FontAwesomeIcon
                                            icon={faCow}
                                            className="text-white"
                                        />
                                    </div>
                                    <h3><a href="">Dairy Products</a></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="projects-one project-one__home-one">
                <div className="container">
                    <div className="block-title text-center">
                        <div className="block-title__image"></div>
                        <p>Closed projects</p>
                        <h3>Latest Projects List</h3>
                    </div>
                    <div className="thm-swiper__slider swiper-container" data-swiper-options='{"spaceBetween": 0, "slidesPerView": 1, "loop": true, "slidesPerGroup": 1, "pagination": {
            "el": "#projects-one__swiper-pagination",
            "type": "bullets",
            "clickable": true
        },
        "breakpoints": {
            "0": {
                "spaceBetween": 0,
                "slidesPerView": 1,
                "slidesPerGroup": 1
            },
            "640": {
                "spaceBetween": 30,
                "slidesPerView": 2,
                "slidesPerGroup": 2
            },
            "992": {
                "spaceBetween": 30,
                "slidesPerView": 2,
                "slidesPerGroup": 2
            }
        }}'>
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="projects-one__single">
                                    <img src="/images/projects/project-2-1.jpg" alt=""/>
                                        <div className="projects-one__content">
                                            <h3>Harvest Innovation</h3>
                                            <a href="" className="projects-one__button">
                                                <FontAwesomeIcon
                                                    icon={faArrowRight}
                                                    className="text-white"
                                                />
                                            </a>
                                        </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="projects-one__single">
                                    <img src="/images/projects/project-2-2.jpg" alt=""/>
                                        <div className="projects-one__content">
                                            <h3>Harvest Innovation</h3>
                                            <a href="" className="projects-one__button">
                                                <FontAwesomeIcon
                                                    icon={faArrowLeft}
                                                    className="text-white"
                                                />
                                            </a>
                                        </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="projects-one__single">
                                    <img src="/images/projects/project-2-3.jpg" alt=""/>
                                        <div className="projects-one__content">
                                            <h3>Harvest Innovation</h3>
                                            <a href="" className="projects-one__button">
                                                <FontAwesomeIcon
                                                    icon={faArrowRight}
                                                    className="text-white"
                                                />
                                            </a>
                                        </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="projects-one__single">
                                    <img src="/images/projects/project-2-4.jpg" alt=""/>
                                        <div className="projects-one__content">
                                            <h3>Harvest Innovation</h3>
                                            <a href="" className="projects-one__button">
                                                <FontAwesomeIcon
                                                    icon={faArrowRight}
                                                    className="text-white"
                                                />
                                            </a>
                                        </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="projects-one__single">
                                    <img src="/images/projects/project-2-2.jpg" alt=""/>
                                        <div className="projects-one__content">
                                            <h3>Harvest Innovation</h3>
                                            <a href="" className="projects-one__button">
                                                <FontAwesomeIcon
                                                    icon={faArrowRight}
                                                    className="text-white"
                                                />
                                            </a>
                                        </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="projects-one__single">
                                    <img src="/images/projects/project-2-4.jpg" alt=""/>
                                        <div className="projects-one__content">
                                            <h3>Harvest Innovation</h3>
                                            <a href="" className="projects-one__button">
                                                <FontAwesomeIcon
                                                    icon={faArrowRight}
                                                    className="text-white"
                                                />
                                            </a>
                                        </div>
                                </div>
                            </div>
                        </div>

                        <div
                            className="swiper-pagination"
                            id="projects-one__swiper-pagination">
                        </div>

                    </div>
                </div>
            </div>

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
                                    <p>Nichola relies on innovatsion in agricultural technology to farm sustainably and look after the environment. This helps reduce the impact climate change has on farming and allows them to grow high-quality crops despite the changes. He says "says leaving a legacy means leaving the land better than it was before".</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="call-to-action__three jarallax"
                data-jarallax=""
                data-speed="0.3"
                data-imgPosition="50% 50%"
            >
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
                                <h3>Providing High Quality
                                    Products</h3>
                                <a href="/about" className="thm-btn">Discover More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="testimonials-one">
                <img src="/images/icons/testimonials-bg-1-1.png" className="testimonials-one__bg" alt=""/>
                    <div className="container">
                        <h2 className="testimonials-one__title">Testimonials</h2>
                        <div id="testimonials-one__carousel" className="testimonials-one__carousel swiper-container">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="testimonials-one__icons">
                                        <FontAwesomeIcon
                                            icon={faStar}
                                            style={{color: '#f7c35f'}}
                                        />
                                        <FontAwesomeIcon
                                            icon={faStar}
                                            style={{color: '#f7c35f'}}
                                        />
                                        <FontAwesomeIcon
                                            icon={faStar}
                                            style={{color: '#f7c35f'}}
                                        />
                                        <FontAwesomeIcon
                                            icon={faStar}
                                            style={{color: '#f7c35f'}}
                                        />
                                        <FontAwesomeIcon
                                            icon={faStar}
                                            style={{color: '#f7c35f'}}
                                        />
                                    </div>
                                    <p>
                                        This is due to their excellent service, competitive pricing and customer support. It’s throughly
                                        refresing to get such a personal touch. Duis aute lorem ipsum is simply free text irure dolor in
                                        reprehenderit in esse nulla pariatur.
                                    </p>
                                </div>

                                <div className="swiper-slide">
                                    <div className="testimonials-one__icons">
                                        <FontAwesomeIcon
                                            icon={faStar}
                                            style={{color: '#f7c35f'}}
                                        />
                                        <FontAwesomeIcon
                                            icon={faStar}
                                            style={{color: '#f7c35f'}}
                                        />
                                        <FontAwesomeIcon
                                            icon={faStar}
                                            style={{color: '#f7c35f'}}
                                        />
                                        <FontAwesomeIcon
                                            icon={faStar}
                                            style={{color: '#f7c35f'}}
                                        />
                                        <FontAwesomeIcon
                                            icon={faStar}
                                            style={{color: '#f7c35f'}}
                                        />
                                    </div>
                                    <p>This is due to their excellent service, competitive pricing and customer support. It’s throughly
                                        refresing to get such a personal touch. Duis aute lorem ipsum is simply free text irure dolor in
                                        reprehenderit in esse nulla pariatur.</p>
                                </div>

                                <div className="swiper-slide">
                                    <div className="testimonials-one__icons">
                                        <FontAwesomeIcon
                                            icon={faStar}
                                            style={{color: '#f7c35f'}}
                                        />
                                        <FontAwesomeIcon
                                            icon={faStar}
                                            style={{color: '#f7c35f'}}
                                        />
                                        <FontAwesomeIcon
                                            icon={faStar}
                                            style={{color: '#f7c35f'}}
                                        />
                                        <FontAwesomeIcon
                                            icon={faStar}
                                            style={{color: '#f7c35f'}}
                                        />
                                        <FontAwesomeIcon
                                            icon={faStar}
                                            style={{color: '#f7c35f'}}
                                        />
                                    </div>
                                    <p>This is due to their excellent service, competitive pricing and customer support. It’s throughly
                                        refresing to get such a personal touch. Duis aute lorem ipsum is simply free text irure dolor in
                                        reprehenderit in esse nulla pariatur.</p>
                                </div>

                            </div>
                        </div>
                        <div id="testimonials-one__thumb" className="swiper-container">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="testimonials-one__image">
                                        <img src="/images/resources/testimonials-1-1.jpg" alt=""/>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="testimonials-one__image">
                                        <img src="/images/resources/testimonials-1-2.jpg" alt=""/>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="testimonials-one__image">
                                        <img src="/images/resources/testimonials-1-3.jpg" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="testimonials-one__meta" className="testimonials-one__carousel swiper-container">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="testimonials-one__meta">
                                        <h4>Jessica Brown</h4>
                                        <span>Customer</span>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="testimonials-one__meta">
                                        <h4>Caleb Hoffman</h4>
                                        <span>Customer</span>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="testimonials-one__meta">
                                        <h4>Bradley Kim</h4>
                                        <span>Customer</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-pagination" id="testimonials-one__swiper-pagination"></div>
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
                                            icon={faLeaf}
                                            style={{color: '#f7c35f', fontSize: '2.5rem'}}
                                        />
                                        <div className="blog-home__slogan-content">
                                            <h3>We Care About Our Agriculture Growth</h3>
                                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                                                suffered in some form, by injected humour words.</p>
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

            <section className="contact-two">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-5">
                            <div className="contact-two__image">
                                <div className="contact-two__image-bubble-1"></div>
                                <div className="contact-two__image-bubble-2"></div>
                                <div className="contact-two__image-bubble-3"></div>
                                <img src="/images/resources/contact-1-1.jpg" className="img-fluid" alt=""/>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-3">
                            <div className="contact-two__content">
                                <div className="block-title">
                                    <div className="block-title__image"></div>
                                    <p>Contact now</p>
                                    <h3>Leave Us A Message</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-4">
                            {/*<div className="text-center text-white p-3" style="width: 70%; margin: 4px auto; background-color: #3e976c;">*/}
                            {/*    <a href="#" className="close" data-dismiss="alert" aria-label="close">×</a>*/}
                            {/*</div>*/}
                            <form className="contact-one__form contact-form-validated">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <input type="text" name="name" placeholder="Full Name"/>
                                    </div>
                                    <div className="col-lg-12">
                                        <input type="text" name="email" placeholder="Email Address"/>
                                    </div>
                                    <div className="col-lg-12">
                                        <input type="text" name="mobile" placeholder="Phone Number"/>
                                    </div>
                                    <div className="col-lg-12">
                                        <textarea name="description" placeholder="Write Message"></textarea>
                                    </div>
                                    <div className="col-lg-12">
                                        <button type="submit" className="thm-btn">Send Message</button>
                                    </div>
                                </div>
                            </form>
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
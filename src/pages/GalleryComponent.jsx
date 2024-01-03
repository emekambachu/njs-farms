export const GalleryComponent = () => {
    return (
        <>
            <section className="page-header">
                <div
                    className="page-header__bg"
                     style={{ backgroundImage: "url('/images/backgrounds/page-header-bg-1-1.jpg')" }}
                ></div>

                <div className="container">
                    <ul className="thm-breadcrumb list-unstyled">
                        <li><a href="/">Home</a></li>
                        <li>/</li>
                        <li><span>Gallery</span></li>
                    </ul>
                    <h2>Gallery</h2>
                </div>
            </section>

            <div className="projects-one">
                <div className="container">
                    <div className="row">

                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <div className="projects-one__single">
                                <img src="/images/projects/project-1-1.jpg" alt=""/>
                                    <div className="projects-one__content">
                                        <h3>Harvest Innovation</h3>
                                        <a href="" className="projects-one__button">
                                            <i className="agrikon-icon-right-arrow"></i>
                                        </a>
                                    </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <div className="projects-one__single">
                                <img src="/images/projects/project-1-2.jpg" alt=""/>
                                    <div className="projects-one__content">
                                        <h3>Harvest Innovation</h3>
                                        <a href="" className="projects-one__button">
                                            <i className="agrikon-icon-right-arrow"></i>
                                        </a>
                                    </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <div className="projects-one__single">
                                <img src="/images/projects/project-1-3.jpg" alt=""/>
                                    <div className="projects-one__content">
                                        <h3>Harvest Innovation</h3>
                                        <a href="" className="projects-one__button">
                                            <i className="agrikon-icon-right-arrow"></i>
                                        </a>
                                    </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <div className="projects-one__single">
                                <img src="/images/projects/project-1-4.jpg" alt=""/>
                                    <div className="projects-one__content">
                                        <h3>Harvest Innovation</h3>
                                        <a href="" className="projects-one__button">
                                            <i className="agrikon-icon-right-arrow"></i>
                                        </a>
                                    </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <div className="projects-one__single">
                                <img src="/images/projects/project-1-5.jpg" alt=""/>
                                    <div className="projects-one__content">
                                        <h3>Harvest Innovation</h3>
                                        <a href="" className="projects-one__button">
                                            <i className="agrikon-icon-right-arrow"></i>
                                        </a>
                                    </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <div className="projects-one__single">
                                <img src="/images/projects/project-1-6.jpg" alt=""/>
                                    <div className="projects-one__content">
                                        <h3>Harvest Innovation</h3>
                                        <a href="" className="projects-one__button">
                                            <i className="agrikon-icon-right-arrow"></i>
                                        </a>
                                    </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

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
                                <h3>Providing High Quality Products</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
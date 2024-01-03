export const ContactComponent = () => {
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
                        <li><span>Contact us</span></li>
                    </ul>
                    <h2>Contact us</h2>
                </div>
            </section>

            <section className="contact-one">
                <div className="container">
                    <div className="row">

                        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-4">
                            <div className="contact-one__content">
                                <div className="block-title">
                                    <div className="block-title__image"></div>
                                    <p>Contact now</p>
                                    <h3>Leave A Message</h3>
                                </div>
                                <div className="contact-one__summery">
                                    <p></p>
                                </div>
                                <div className="contact-one__social">
                                    <a href="#">
                                        <i className="fa fa-facebook-square"></i>
                                    </a>
                                    <a href="#">
                                        <i className="fa fa-twitter"></i>
                                    </a>
                                    <a href="#">
                                        <i className="fa fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-8">
                            {/*<div*/}
                            {/*    className="text-center text-white p-3"*/}
                            {/*    style={{ width: '70%', margin: '4px auto', backgroundColor: '#3e976c' }}>*/}
                            {/*    <a href="#" className="close" data-dismiss="alert" aria-label="close">×</a>*/}
                            {/*</div>*/}

                            <form action="" className="contact-one__form contact-form-validated" noValidate="novalidate">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <input type="text" name="name" placeholder="Full Name"/>
                                    </div>
                                    <div className="col-lg-6">
                                        <input type="text" name="email" placeholder="Email Address"/>
                                    </div>
                                    <div className="col-lg-6">
                                        <input type="text" name="mobile" placeholder="Phone Number"/>
                                    </div>
                                    <div className="col-lg-6">
                                        <input type="text" name="subject" placeholder="Subject"/>
                                    </div>
                                    <div className="col-lg-12">
                                        <textarea name="description" placeholder="Write Message"></textarea>
                                    </div>
                                    <div className="col-lg-12">
                                        <button type="submit" className="thm-btn">Send a Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </section>

            <section className="contact-infos">
                <div className="container">
                    <div
                        className="inner-container wow fadeInUp animated"
                        data-wow-duration="1500ms"
                        style={{ visibility: 'visible', animationDuration: '1500ms', animationName: 'fadeInUp' }}>
                        <div className="row no-gutters">
                            <div className="col-sm-12 col-md-12 col-lg-6">
                                <div className="contact-infos__single">
                                    <h3>Visit Company</h3>
                                    <p>New York. United States of America.</p>
                                    <p>Zurich. Switzerland.</p>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-6">
                                <div className="contact-infos__single">
                                    <h3>Call or Email</h3>
                                    <p><a href="mailto:info@njsfarm.com">info@njsfarm.com</a> <br/>
                                        <a href="mailto:support@njsfarm.com">support@njsfarm.com</a><br/>
                                        <a href="tel:666-888-0000">682 214 3661</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
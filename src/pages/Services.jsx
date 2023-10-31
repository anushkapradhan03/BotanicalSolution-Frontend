// Components
import Breadcrumb from '../components/breadcrumbs/breadcrumb'
import ServicesSection from '../components/sections/services'

// Icons
import { FaLuggageCart } from 'react-icons/fa'
import { BsArrowRight, BsFlower3, BsShop } from 'react-icons/bs'

export default function Services() {
    return (
        <>
            <Breadcrumb>
                <div className="page-header d-flex align-items-center" >
                    <div className="container position-relative">
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-6 text-center">
                                <h2>Services</h2>
                                <p>
                                    Odio et unde deleniti. Deserunt numquam exercitationem.
                                    Officiis quo odio sint voluptas consequatur ut a odio
                                    voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi
                                    ratione sint. Sit quaerat ipsum dolorem.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Breadcrumb>


            <section id="featured-services" className="featured-services">
                <div className="container">

                    <div className="row gy-4">

                        <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up">
                            <div className="icon flex-shrink-0"><i className="fa-solid fa-cart-flatbed"><FaLuggageCart /></i></div>
                            <div>
                                <h4 className="title">Air Quality Index</h4>
                                <p className="description">The Air Quality Index (AQI) is a numerical scale that measures the level of air pollution in a particular location.</p>
                                <a href="service-details.html" className="readmore stretched-link"><span>Learn More</span><i
                                    className="bi bi-arrow-right"><BsArrowRight /></i></a>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="100">
                            <div className="icon flex-shrink-0"><i className="bi bi-flower3"><BsFlower3 /></i></div>
                            <div>
                                <h4 className="title">Plant Recommendation</h4>
                                <p className="description">Plant Recommendations are  made considering the factors such as the climate, soil type, sunlight exposure, and other environmental conditions, as well as the intended use of the plants.</p>
                                <a href="service-details.html" className="readmore stretched-link"><span>Learn More</span><i
                                    className="bi bi-arrow-right"><BsArrowRight /></i></a>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="200">
                            <div className="icon flex-shrink-0"><i className="bi bi-shop"><BsShop /></i></div>
                            <div>
                                <h4 className="title">Plant Store</h4>
                                <p className="description">The goal is to provide customers with quality plants and supplies to help them create and maintain beautiful and healthy gardens and green spaces.</p>
                                <a href="service-details.html" className="readmore stretched-link"><span>Learn More</span><i
                                    className="bi bi-arrow-right"><BsArrowRight /></i></a>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            <ServicesSection />

            {/* <section id="service" className="services pt-0">
                <div className="container" data-aos="fade-up">

                    <div className="section-header">
                        <span>Our Services</span>
                        <h2>Our Services</h2>

                    </div>

                    <div className="row gy-4">

                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                            <div className="card">
                                <div className="card-img">
                                    <img src="/src/assets/img/img5.jpg" alt="" className="img-fluid" />
                                </div>
                                <h3><a href="service-details.html" className="stretched-link">Air Quality Index</a></h3>
                                <p>Cumque eos in qui numquam. Aut aspernatur perferendis sed atque quia voluptas quisquam repellendus
                                    temporibus itaqueofficiis odit</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                            <div className="card">
                                <div className="card-img">
                                    <img src="/src/assets/img/img4.jpg" alt="" className="img-fluid" />
                                </div>
                                <h3><a href="service-details.html" className="stretched-link">Plant Recommendation</a></h3>
                                <p>Asperiores provident dolor accusamus pariatur dolore nam id audantium ut et iure incidunt molestiae
                                    dolor ipsam ducimus occaecati nisi</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                            <div className="card">
                                <div className="card-img">
                                    <img src="/src/assets/img/img6.jpg" alt="" className="img-fluid" />
                                </div>
                                <h3><a href="service-details.html" className="stretched-link">Plant Store</a></h3>
                                <p>Dicta quam similique quia architecto eos nisi aut ratione aut ipsum reiciendis sit doloremque oluptatem
                                    aut et molestiae ut et nihil</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
                            <div className="card">
                                <div className="card-img">
                                    <img src="/src/assets/img/img7.jpg" alt="" className="img-fluid" />
                                </div>
                                <h3><a href="service-details.html" className="stretched-link">Gardening Tips</a></h3>
                                <p>Dicta quam similique quia architecto eos nisi aut ratione aut ipsum reiciendis sit doloremque oluptatem
                                    aut et molestiae ut et nihil</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
                            <div className="card">
                                <div className="card-img">
                                    <img src="/src/assets/img/img8.jpg" alt="" className="img-fluid" />
                                </div>
                                <h3><a href="service-details.html" className="stretched-link">Feedback</a></h3>
                                <p>Illo consequuntur quisquam delectus praesentium modi dignissimos facere vel cum onsequuntur maiores
                                    beatae consequatur magni voluptates</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
                            <div className="card">
                                <div className="card-img">
                                    <img src="/src/assets/img/img9.jpg" alt="" className="img-fluid" />
                                </div>
                                <h3><a href="service-details.html" className="stretched-link">Enviorment Analysis</a></h3>
                                <p>Quas assumenda non occaecati molestiae. In aut earum sed natus eatae in vero. Ab modi quisquam aut
                                    nostrum unde et qui est non quo nulla</p>
                            </div>
                        </div>

                    </div>

                </div>
            </section> */}


            {/* <section id="features" className="features">
                <div className="container">
                    <div className="row gy-4 align-items-center features-item" data-aos="fade-up">
                        <div className="col-md-5">
                            <img src="/src/assets/img/features-1.jpg" className="img-fluid" alt="" />
                        </div>
                        <div className="col-md-7">
                            <h3>
                                Voluptatem dignissimos provident quasi corporis voluptates sit
                                assumenda.
                            </h3>
                            <p className="fst-italic">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <ul>
                                <li>
                                    <i className="bi bi-check"></i> Ullamco laboris nisi ut aliquip ex
                                    ea commodo consequat.
                                </li>
                                <li>
                                    <i className="bi bi-check"></i> Duis aute irure dolor in
                                    reprehenderit in voluptate velit.
                                </li>
                                <li>
                                    <i className="bi bi-check"></i> Ullam est qui quos consequatur eos
                                    accusamus.
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="row gy-4 align-items-center features-item" data-aos="fade-up">
                        <div className="col-md-5 order-1 order-md-2">
                            <img src="/src/assets/img/features-2.jpg" className="img-fluid" alt="" />
                        </div>
                        <div className="col-md-7 order-2 order-md-1">
                            <h3>Corporis temporibus maiores provident</h3>
                            <p className="fst-italic">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <p>
                                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                                aute irure dolor in reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt
                                mollit anim id est laborum
                            </p>
                        </div>
                    </div>

                    <div className="row gy-4 align-items-center features-item" data-aos="fade-up">
                        <div className="col-md-5">
                            <img src="/src/assets/img/features-3.jpg" className="img-fluid" alt="" />
                        </div>
                        <div className="col-md-7">
                            <h3>
                                Sunt consequatur ad ut est nulla consectetur reiciendis animi
                                voluptas
                            </h3>
                            <p>
                                Cupiditate placeat cupiditate placeat est ipsam culpa. Delectus
                                quia minima quod. Sunt saepe odit aut quia voluptatem hic
                                voluptas dolor doloremque.
                            </p>
                            <ul>
                                <li>
                                    <i className="bi bi-check"></i> Ullamco laboris nisi ut aliquip ex
                                    ea commodo consequat.
                                </li>
                                <li>
                                    <i className="bi bi-check"></i> Duis aute irure dolor in
                                    reprehenderit in voluptate velit.
                                </li>
                                <li>
                                    <i className="bi bi-check"></i> Facilis ut et voluptatem aperiam.
                                    Autem soluta ad fugiat.
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="row gy-4 align-items-center features-item" data-aos="fade-up">
                        <div className="col-md-5 order-1 order-md-2">
                            <img src="/src/assets/img/features-4.jpg" className="img-fluid" alt="" />
                        </div>
                        <div className="col-md-7 order-2 order-md-1">
                            <h3>
                                Quas et necessitatibus eaque impedit ipsum animi consequatur
                                incidunt in
                            </h3>
                            <p className="fst-italic">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <p>
                                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                                aute irure dolor in reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt
                                mollit anim id est laborum
                            </p>
                        </div>
                    </div>
                </div>
            </section> */}


            {/* <section id="testimonials" className="testimonials">
                <div className="container">
                    <div className="slides-1 swiper" data-aos="fade-up">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="testimonial-item">
                                    <img src="/src/assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="" />
                                    <h3>Saul Goodman</h3>
                                    <h4>Ceo &amp; Founder</h4>
                                    <div className="stars">
                                        <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i
                                            className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                                    </div>
                                    <p>
                                        <i className="bi bi-quote quote-icon-left"></i>
                                        Proin iaculis purus consequat sem cure digni ssim donec
                                        porttitora entum suscipit rhoncus. Accusantium quam,
                                        ultricies eget id, aliquam eget nibh et. Maecen aliquam,
                                        risus at semper.
                                        <i className="bi bi-quote quote-icon-right"></i>
                                    </p>
                                </div>
                            </div>

                            <div className="swiper-slide">
                                <div className="testimonial-item">
                                    <img src="/src/assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt="" />
                                    <h3>Sara Wilsson</h3>
                                    <h4>Designer</h4>
                                    <div className="stars">
                                        <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i
                                            className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                                    </div>
                                    <p>
                                        <i className="bi bi-quote quote-icon-left"></i>
                                        Export tempor illum tamen malis malis eram quae irure esse
                                        labore quem cillum quid cillum eram malis quorum velit fore
                                        eram velit sunt aliqua noster fugiat irure amet legam anim
                                        culpa.
                                        <i className="bi bi-quote quote-icon-right"></i>
                                    </p>
                                </div>
                            </div>

                            <div className="swiper-slide">
                                <div className="testimonial-item">
                                    <img src="/src/assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt="" />
                                    <h3>Jena Karlis</h3>
                                    <h4>Store Owner</h4>
                                    <div className="stars">
                                        <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i
                                            className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                                    </div>
                                    <p>
                                        <i className="bi bi-quote quote-icon-left"></i>
                                        Enim nisi quem export duis labore cillum quae magna enim
                                        sint quorum nulla quem veniam duis minim tempor labore quem
                                        eram duis noster aute amet eram fore quis sint minim.
                                        <i className="bi bi-quote quote-icon-right"></i>
                                    </p>
                                </div>
                            </div>

                            <div className="swiper-slide">
                                <div className="testimonial-item">
                                    <img src="/src/assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt="" />
                                    <h3>Matt Brandon</h3>
                                    <h4>Freelancer</h4>
                                    <div className="stars">
                                        <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i
                                            className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                                    </div>
                                    <p>
                                        <i className="bi bi-quote quote-icon-left"></i>
                                        Fugiat enim eram quae cillum dolore dolor amet nulla culpa
                                        multos export minim fugiat minim velit minim dolor enim duis
                                        veniam ipsum anim magna sunt elit fore quem dolore labore
                                        illum veniam.
                                        <i className="bi bi-quote quote-icon-right"></i>
                                    </p>
                                </div>
                            </div>

                            <div className="swiper-slide">
                                <div className="testimonial-item">
                                    <img src="/src/assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt="" />
                                    <h3>John Larson</h3>
                                    <h4>Entrepreneur</h4>
                                    <div className="stars">
                                        <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i
                                            className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                                    </div>
                                    <p>
                                        <i className="bi bi-quote quote-icon-left"></i>
                                        Quis quorum aliqua sint quem legam fore sunt eram irure
                                        aliqua veniam tempor noster veniam enim culpa labore duis
                                        sunt culpa nulla illum cillum fugiat legam esse veniam culpa
                                        fore nisi cillum quid.
                                        <i className="bi bi-quote quote-icon-right"></i>
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
            </section> */}


            {/* <section id="faq" className="faq">
                <div className="container" data-aos="fade-up">
                    <div className="section-header">
                        <span>Frequently Asked Questions</span>
                        <h2>Frequently Asked Questions</h2>
                    </div>

                    <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="200">
                        <div className="col-lg-10">
                            <div className="accordion accordion-flush" id="faqlist">
                                <div className="accordion-item">
                                    <h3 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#faq-content-1">
                                            <i className="bi bi-question-circle question-icon"></i>
                                            Non consectetur a erat nam at lectus urna duis?
                                        </button>
                                    </h3>
                                    <div id="faq-content-1" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                                        <div className="accordion-body">
                                            Feugiat pretium nibh ipsum consequat. Tempus iaculis urna
                                            id volutpat lacus laoreet non curabitur gravida. Venenatis
                                            lectus magna fringilla urna porttitor rhoncus dolor purus
                                            non.
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h3 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#faq-content-2">
                                            <i className="bi bi-question-circle question-icon"></i>
                                            Feugiat scelerisque varius morbi enim nunc faucibus a
                                            pellentesque?
                                        </button>
                                    </h3>
                                    <div id="faq-content-2" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                                        <div className="accordion-body">
                                            Dolor sit amet consectetur adipiscing elit pellentesque
                                            habitant morbi. Id interdum velit laoreet id donec
                                            ultrices. Fringilla phasellus faucibus scelerisque
                                            eleifend donec pretium. Est pellentesque elit ullamcorper
                                            dignissim. Mauris ultrices eros in cursus turpis massa
                                            tincidunt dui.
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h3 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#faq-content-3">
                                            <i className="bi bi-question-circle question-icon"></i>
                                            Dolor sit amet consectetur adipiscing elit pellentesque
                                            habitant morbi?
                                        </button>
                                    </h3>
                                    <div id="faq-content-3" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                                        <div className="accordion-body">
                                            Eleifend mi in nulla posuere sollicitudin aliquam ultrices
                                            sagittis orci. Faucibus pulvinar elementum integer enim.
                                            Sem nulla pharetra diam sit amet nisl suscipit. Rutrum
                                            tellus pellentesque eu tincidunt. Lectus urna duis
                                            convallis convallis tellus. Urna molestie at elementum eu
                                            facilisis sed odio morbi quis
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h3 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#faq-content-4">
                                            <i className="bi bi-question-circle question-icon"></i>
                                            Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?
                                        </button>
                                    </h3>
                                    <div id="faq-content-4" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                                        <div className="accordion-body">
                                            <i className="bi bi-question-circle question-icon"></i>
                                            Dolor sit amet consectetur adipiscing elit pellentesque
                                            habitant morbi. Id interdum velit laoreet id donec
                                            ultrices. Fringilla phasellus faucibus scelerisque
                                            eleifend donec pretium. Est pellentesque elit ullamcorper
                                            dignissim. Mauris ultrices eros in cursus turpis massa
                                            tincidunt dui.
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h3 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#faq-content-5">
                                            <i className="bi bi-question-circle question-icon"></i>
                                            Tempus quam pellentesque nec nam aliquam sem et tortor
                                            consequat?
                                        </button>
                                    </h3>
                                    <div id="faq-content-5" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                                        <div className="accordion-body">
                                            Molestie a iaculis at erat pellentesque adipiscing
                                            commodo. Dignissim suspendisse in est ante in. Nunc vel
                                            risus commodo viverra maecenas accumsan. Sit amet nisl
                                            suscipit adipiscing bibendum est. Purus gravida quis
                                            blandit turpis cursus in
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
        </>
    )
}

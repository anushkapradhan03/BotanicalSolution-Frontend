// Components
import Breadcrumb from '../components/breadcrumbs/breadcrumb'

// Sections
import AboutSection from '../components/sections/about'

export default function About() {
    return (
        <>
            <Breadcrumb >
                <div className="page-header d-flex align-items-center" >
                    <div className="container position-relative">
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-6 text-center">
                                <h2>About</h2>
                                <p>Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Breadcrumb>

            <AboutSection />

            {/* <section id="stats-counter" className="stats-counter pt-0">
        <div className="container" data-aos="fade-up">

          <div className="row gy-4">

            <div className="col-lg-3 col-md-6">
              <div className="stats-item text-center w-100 h-100">
                <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span>
                <p>Clients</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="stats-item text-center w-100 h-100">
                <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter"></span>
                <p>Projects</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="stats-item text-center w-100 h-100">
                <span data-purecounter-start="0" data-purecounter-end="1453" data-purecounter-duration="1" className="purecounter"></span>
                <p>Hours Of Support</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="stats-item text-center w-100 h-100">
                <span data-purecounter-start="0" data-purecounter-end="32" data-purecounter-duration="1" className="purecounter"></span>
                <p>Workers</p>
              </div>
            </div>

          </div>

        </div>
      </section> */}


            {/* <section id="team" className="team pt-0">
        <div className="container" data-aos="fade-up">

          <div className="section-header">
            <span>Our Team</span>
            <h2>Our Team</h2>

          </div>

          <div className="row" data-aos="fade-up" data-aos-delay="100">

            <div className="col-lg-4 col-md-6 d-flex">
              <div className="member">
                <img src="/src/assets/img/team/team-1.jpg" className="img-fluid" alt="" />
                <div className="member-content">
                  <h4>Walter White</h4>
                  <span>Web Development</span>
                  <p>
                    Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut aut aut
                  </p>
                  <div className="social">
                    <a href="" className="twitter"><BsTwitter /><i className="bi bi-twitter"></i></a>
                    <a href="" className="facebook"><BsFacebook /><i className="bi bi-facebook"></i></a>
                    <a href="" className="instagram"><BsInstagram /><i className="bi bi-instagram"></i></a>
                    <a href="" className="linkedin"><BsLinkedin /><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>


            <div className="col-lg-4 col-md-6 d-flex">
              <div className="member">
                <img src="/src/assets/img/team/team-2.jpg" className="img-fluid" alt="" />
                <div className="member-content">
                  <h4>Sarah Jhinson</h4>
                  <span>Marketing</span>
                  <p>
                    Repellat fugiat adipisci nemo illum nesciunt voluptas repellendus. In architecto rerum rerum temporibus
                  </p>
                  <div className="social">
                    <a href="" className="twitter"><BsTwitter /><i className="bi bi-twitter"></i></a>
                    <a href="" className="facebook"><BsFacebook /><i className="bi bi-facebook"></i></a>
                    <a href="" className="instagram"><BsInstagram /><i className="bi bi-instagram"></i></a>
                    <a href="" className="linkedin"><BsLinkedin /><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex">
              <div className="member">
                <img src="/src/assets/img/team/team-3.jpg" className="img-fluid" alt="" />
                <div className="member-content">
                  <h4>William Anderson</h4>
                  <span>Content</span>
                  <p>
                    Voluptas necessitatibus occaecati quia. Earum totam consequuntur qui porro et laborum toro des clara
                  </p>
                  <div className="social">
                    <a href="" className="twitter"><BsTwitter /><i className="bi bi-twitter"></i></a>
                    <a href="" className="facebook"><BsFacebook /><i className="bi bi-facebook"></i></a>
                    <a href="" className="instagram"><BsInstagram /><i className="bi bi-instagram"></i></a>
                    <a href="" className="linkedin"><BsLinkedin /><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
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
                    <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                  </div>
                  <p>
                    <i className="bi bi-quote quote-icon-left"></i>
                    Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
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
                    <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                  </div>
                  <p>
                    <i className="bi bi-quote quote-icon-left"></i>
                    Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
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
                    <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                  </div>
                  <p>
                    <i className="bi bi-quote quote-icon-left"></i>
                    Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
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
                    <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                  </div>
                  <p>
                    <i className="bi bi-quote quote-icon-left"></i>
                    Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
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
                    <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                  </div>
                  <p>
                    <i className="bi bi-quote quote-icon-left"></i>
                    Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
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
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-1">
                      <i className="bi bi-question-circle question-icon"></i>
                      Non consectetur a erat nam at lectus urna duis?
                    </button>
                  </h3>
                  <div id="faq-content-1" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                    <div className="accordion-body">
                      Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-2">
                      <i className="bi bi-question-circle question-icon"></i>
                      Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?
                    </button>
                  </h3>
                  <div id="faq-content-2" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                    <div className="accordion-body">
                      Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-3">
                      <i className="bi bi-question-circle question-icon"></i>
                      Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi?
                    </button>
                  </h3>
                  <div id="faq-content-3" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                    <div className="accordion-body">
                      Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-4">
                      <i className="bi bi-question-circle question-icon"></i>
                      Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?
                    </button>
                  </h3>
                  <div id="faq-content-4" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                    <div className="accordion-body">
                      <i className="bi bi-question-circle question-icon"></i>
                      Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-5">
                      <i className="bi bi-question-circle question-icon"></i>
                      Tempus quam pellentesque nec nam aliquam sem et tortor consequat?
                    </button>
                  </h3>
                  <div id="faq-content-5" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                    <div className="accordion-body">
                      Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in
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
import { useNavigate, Link } from 'react-router-dom';

import axios from 'axios';

import swal from 'sweetalert';

// Components
import Hero from './components/heros/hero.jsx'
import Services from './components/sections/services.jsx';

// Styles
import './App.css';

// Icons
import { BsArrowRight, BsBroadcast, BsFullscreenExit, BsDiagram3, BsFlower3, BsShop } from 'react-icons/bs';
import { FaLuggageCart } from 'react-icons/fa';

export default function App() {

  const navigate = useNavigate();

  async function search(userAddress) {
    console.log(userAddress)

    const locality = userAddress.locality.trim().replace(/\b\w/g, function (match) {
      return match.toUpperCase();
    });
    const city = userAddress.city.trim().replace(/\b\w/g, function (match) {
      return match.toUpperCase();
    })
    const state = userAddress.state;
    const country = userAddress.country;

    const url = "http://api.positionstack.com/v1/forward?access_key=b3dc10dcb07c78b11e261278750c357f&query=" + locality + ", " + city + "&region=" + state + "&country=IN";
    console.log(url)

    await axios({
      url: 'https://plantify-backend.onrender.com/api/geocode/forward',
      method: 'POST',
      headers: {
        "Access-Control-Allow-Origin": "*", // Required for CORS support to work
      },
      data: {
        "webaddress": url.toString()
      }
    })
      .then(function (response) {
        console.log(response.data);
        if (response.data.data.data.length > 0) {
          const latitude = response.data.data.data[0].latitude;
          const longitude = response.data.data.data[0].longitude;
          navigate(`/location/${latitude}/${longitude}`)
        }
        else {
          navigate(`/location`)
        }
      })
      .catch(function (error) {
        console.log(error);
        swal({
          title: "Please retry",
          text: "Somthing Went Wrong!",
          icon: "error",
        });
      })

  }

  return (
    <>

      <Hero searchfunction={search} />

      <section id="featured-services" className="featured-services">
        <div className="container">

          <div className="row gy-4">

            <div className="col-lg-6 col-md-6 service-item d-flex" data-aos="fade-up">
              <div className="icon flex-shrink-0"><i className="fa-solid fa-cart-flatbed"><FaLuggageCart /></i></div>
              <div>
                <h4 className="title">Air Quality Index</h4>
                <p className="description">The Air Quality Index (AQI) is a numerical scale that measures the level of air pollution in a particular location.</p>
                <Link to={'https://cpcb.nic.in/National-Air-Quality-Index/'} className="readmore stretched-link"><span>Learn More</span><i
                  className="bi bi-arrow-right"><BsArrowRight /></i></Link >
              </div>
            </div>

            <div className="col-lg-6 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="100">
              <div className="icon flex-shrink-0"><i className="bi bi-flower3"><BsFlower3 /></i></div>
              <div>
                <h4 className="title">Plant Recommendation</h4>
                <p className="description">Plant Recommendations are  made considering the factors such as the climate, soil type, sunlight exposure, and other environmental conditions, as well as the intended use of the plants.</p>
                <Link to={'/pr'} className="readmore stretched-link"><span>Learn More</span><i
                  className="bi bi-arrow-right"><BsArrowRight /></i></Link>
              </div>
            </div>

            {/* <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="200">
              <div className="icon flex-shrink-0"><i className="bi bi-shop"><BsShop /></i></div>
              <div>
                <h4 className="title">Plant Store</h4>
                <p className="description">The goal is to provide customers with quality plants and supplies to help them create and maintain beautiful and healthy gardens and green spaces.</p>
                <Link to={'/plantstore'} className="readmore stretched-link"><span>Learn More</span><i
                  className="bi bi-arrow-right"><BsArrowRight /></i></Link>
              </div>
            </div> */}

          </div>

        </div>
      </section>

      <section id="about" className="about pt-0">
        <div className="container" data-aos="fade-up">

          <div className="row gy-4">
            <div className="col-lg-6 position-relative align-self-center order-lg-last order-first">
              <img src="images/garden.jpeg" className="img-fluid" alt="" />
              <a href="https://www.youtube.com/watch?v=GjLWR8N6DHo" className="glightbox play-btn"></a>
            </div>
            <div className="col-lg-6 content order-last order-lg-first">
              <h3>About Us</h3>
              <p>
                We at Botanical Solution aim to simplify the process of selecting plants and help users create a healthy and
                thriving garden. Additionally, the app also provides users with the option to purchase plants and
                gardening accessories, making the process of gardening even more convenient.
              </p>
              <ul>
                <li data-aos="fade-up" data-aos-delay="100">
                  <i className="bi bi-diagram-3"><BsDiagram3 /></i>
                  <div>
                    <h5>Sustainability</h5>
                    <p>Botanical Solution promotes sustainable gardening practices that reduce environmental impact and promote biodiversity.
                      By encouraging the use of native plants and minimizing the use of chemical pesticides and fertilizers, Botanical Solution can help users create gardens that are both beautiful and ecologically responsible.</p>
                  </div>
                </li>
                <li data-aos="fade-up" data-aos-delay="200">
                  <i className="bi bi-fullscreen-exit"><BsFullscreenExit /></i>
                  <div>
                    <h5>Accessibility</h5>
                    <p>Botanical Solution aims to make gardening accessible to everyone, regardless of their level of experience or expertise. By providing personalized plant recommendations and expert advice, Botanical Solution can help users overcome common gardening challenges and enjoy the benefits of gardening, such as improved mental health and a connection to nature.</p>
                  </div>
                </li>
                <li data-aos="fade-up" data-aos-delay="300">
                  <i className="bi bi-broadcast"><BsBroadcast /></i>
                  <div>
                    <h5>Feedback</h5>
                    <p> Botanical Solution feedback a sense of feedback among its users, encouraging them to share their gardening experiences, tips, and advice. By connecting users with like-minded individuals, Botanical Solution can help build a community of gardeners who share a passion for gardening and a commitment to sustainable practices.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      <Services />
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
                <h3><a href="service-details.html" className="stretched-link">Community</a></h3>
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


      <section id="call-to-action" className="call-to-action">
        <div className="container" data-aos="zoom-out">

          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h3>Find your perfect Plant match</h3>
              <p></p>
              <a className="cta-btn" href="#hero">Find Now</a>
            </div>
          </div>

        </div>
      </section>


      <section id="features" className="features">
        <div className="container">

          <div className="row gy-4 align-items-center features-item" data-aos="fade-up">

            <div className="col-md-5">
              <img src="images/features/personalised.jpg" className="img-fluid" alt="" />
            </div>
            <div className="col-md-7">
              <h3>Personalized plant recommendations</h3>
              <p className="fst-italic">
              Botanical Solution takes into account various factors specific to a user(&apos;)s location and environment to recommend plants that will thrive in their garden.
              </p>
              {/* <ul>
                  <li><i className="bi bi-check"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                  <li><i className="bi bi-check"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                  <li><i className="bi bi-check"></i> Ullam est qui quos consequatur eos accusamus.</li>
                </ul> */}
            </div>
          </div>

          {/* <div className="row gy-4 align-items-center features-item" data-aos="fade-up">
            <div className="col-md-5 order-1 order-md-2">
              <img src="images/features/mobile.jpg" className="img-fluid" alt="" />
            </div>
            <div className="col-md-7 order-2 order-md-1">
              <h3>Convenient plant shopping</h3>
              <p className="fst-italic">
                Users can easily purchase plants and gardening accessories directly from the app, saving them time and effort.
              </p> */}
              {/* <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                  voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum
                </p> */}
            {/* </div>
          </div> */}

          <div className="row gy-4 align-items-center features-item" data-aos="fade-up">
            <div className="col-md-5 order-1 order-md-2">
              <img src="images/features/time.jpg" className="img-fluid" alt="" />
            </div>
            <div className="col-md-7 order-2 order-md-1">
              <h3>Saves time and money</h3>
              <p className="fst-italic">
                By using Botanical Solution, users can avoid the trial and error of choosing plants that may not thrive in their environment. This can save them time and money, as well as provide them with a more satisfying gardening experience.
              </p>
              {/* <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                  voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum
                </p> */}
            </div>
          </div>

          <div className="row gy-4 align-items-center features-item" data-aos="fade-up">
            <div className="col-md-5">
              <img src="images/features/gardening.jpg" className="img-fluid" alt="" />
            </div>
            <div className="col-md-7">
              <h3>Expert gardening advice</h3>
              <p>Plantify provides users with detailed information about each recommended plant, including tips for planting,
                watering, and general care. Additionally, users can access gardening tips and advice for each recommended plant, making it easier to maintain a healthy garden.</p>
              {/* <ul>
                  <li><i className="bi bi-check"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                  <li><i className="bi bi-check"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                  <li><i className="bi bi-check"></i> Facilis ut et voluptatem aperiam. Autem soluta ad fugiat.</li>
                </ul> */}
            </div>
          </div>

        </div>
      </section>


      {/* <section id="pricing" className="pricing pt-0">
          <div className="container" data-aos="fade-up">

            <div className="section-header">
              <span>Pricing</span>
              <h2>Pricing</h2>

            </div>

            <div className="row gy-4">

              <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                <div className="pricing-item">
                  <h3>Free Plan</h3>
                  <h4><sup>$</sup>0<span> / month</span></h4>
                  <ul>
                    <li><i className="bi bi-check"></i> Quam adipiscing vitae proin</li>
                    <li><i className="bi bi-check"></i> Nec feugiat nisl pretium</li>
                    <li><i className="bi bi-check"></i> Nulla at volutpat diam uteera</li>
                    <li className="na"><i className="bi bi-x"></i> <span>Pharetra massa massa ultricies</span></li>
                    <li className="na"><i className="bi bi-x"></i> <span>Massa ultricies mi quis hendrerit</span></li>
                  </ul>
                  <a href="#" className="buy-btn">Buy Now</a>
                </div>
              </div>

              <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
                <div className="pricing-item featured">
                  <h3>Business Plan</h3>
                  <h4><sup>$</sup>29<span> / month</span></h4>
                  <ul>
                    <li><i className="bi bi-check"></i> Quam adipiscing vitae proin</li>
                    <li><i className="bi bi-check"></i> Nec feugiat nisl pretium</li>
                    <li><i className="bi bi-check"></i> Nulla at volutpat diam uteera</li>
                    <li><i className="bi bi-check"></i> Pharetra massa massa ultricies</li>
                    <li><i className="bi bi-check"></i> Massa ultricies mi quis hendrerit</li>
                  </ul>
                  <a href="#" className="buy-btn">Buy Now</a>
                </div>
              </div>

              <div className="col-lg-4" data-aos="fade-up" data-aos-delay="300">
                <div className="pricing-item">
                  <h3>Developer Plan</h3>
                  <h4><sup>$</sup>49<span> / month</span></h4>
                  <ul>
                    <li><i className="bi bi-check"></i> Quam adipiscing vitae proin</li>
                    <li><i className="bi bi-check"></i> Nec feugiat nisl pretium</li>
                    <li><i className="bi bi-check"></i> Nulla at volutpat diam uteera</li>
                    <li><i className="bi bi-check"></i> Pharetra massa massa ultricies</li>
                    <li><i className="bi bi-check"></i> Massa ultricies mi quis hendrerit</li>
                  </ul>
                  <a href="#" className="buy-btn">Buy Now</a>
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
                      <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i
                        className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                    </div>
                    <p>
                      <i className="bi bi-quote quote-icon-left"></i>
                      Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium
                      quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
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
                      Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis
                      quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
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
                      Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim
                      tempor labore quem eram duis noster aute amet eram fore quis sint minim.
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
                      Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit
                      minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
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
                      Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa
                      labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
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
                        Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur
                        gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h3 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#faq-content-2">
                        <i className="bi bi-question-circle question-icon"></i>
                        Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?
                      </button>
                    </h3>
                    <div id="faq-content-2" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                      <div className="accordion-body">
                        Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id
                        donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque
                        elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h3 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#faq-content-3">
                        <i className="bi bi-question-circle question-icon"></i>
                        Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi?
                      </button>
                    </h3>
                    <div id="faq-content-3" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                      <div className="accordion-body">
                        Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar
                        elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque
                        eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis
                        sed odio morbi quis
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
                        Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id
                        donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque
                        elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h3 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#faq-content-5">
                        <i className="bi bi-question-circle question-icon"></i>
                        Tempus quam pellentesque nec nam aliquam sem et tortor consequat?
                      </button>
                    </h3>
                    <div id="faq-content-5" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                      <div className="accordion-body">
                        Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in.
                        Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est.
                        Purus gravida quis blandit turpis cursus in
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
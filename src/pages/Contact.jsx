// Components
import Breadcrumb from '../components/breadcrumbs/breadcrumb'

// Icons
import { BsEnvelope, BsGeoAlt, BsPhone } from 'react-icons/bs'

export default function Contact() {
    return (
        <>
            <Breadcrumb>
                <div className="page-header d-flex align-items-center">
                    <div className="container position-relative">
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-6 text-center">
                                <h2>Contact</h2>
                                <p>We appreciate you reaching out to us via our website. We are currently in the process of enhancing our services and making important updates. If you have any inquiries, suggestions, or simply want to get in touch, kindly provide us with your name, email address, and a message below. We will be sure to respond promptly.</p>
                                <p>Thank you for your interest and understanding.
                                    <br />
                                    Best regards,</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Breadcrumb>

            <section id="contact" className="contact">
                <div className="container" data-aos="fade-up">

                    <div>
                        <iframe id='map' className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2269.7929914763686!2d77.35992160210533!3d23.310086676420013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c6633e4585727%3A0x296f51f7ef0498c7!2sRajiv%20Gandhi%20Proudyogiki%20Vishwavidyalaya!5e0!3m2!1sen!2sin!4v1681935295509!5m2!1sen!2sin" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                    <div className="row gy-4 mt-4">

                        <div className="col-lg-4">

                            <div className="info-item d-flex">
                                <i className="bi bi-geo-alt flex-shrink-0"><BsGeoAlt /></i>
                                <div>
                                    <h4>Location:</h4>
                                    <p>RGPV, Airport Rd, Abbas Nagar, Gandhi Nagar, Bhopal, 462033, Madhya Pradesh, India</p>
                                </div>
                            </div>

                            <div className="info-item d-flex">
                                <i className="bi bi-envelope flex-shrink-0"><BsEnvelope /></i>
                                <div>
                                    <h4>Email:</h4>
                                    <p>Support@Botanical Solution.com</p>
                                </div>
                            </div>

                            <div className="info-item d-flex">
                                <i className="bi bi-phone flex-shrink-0"><BsPhone /></i>
                                <div>
                                    <h4>Call:</h4>
                                    <p>+91 12345 67891</p>
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-8 border p-4">
                            <h3 className="text-center mb-5">Contact To Us</h3>
                            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                                    </div>
                                    <div className="col-md-6 form-group mt-3 mt-md-0">
                                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                                </div>
                                <div className="form-group mt-3">
                                    <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                                </div>
                                <div className="my-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message"></div>
                                    <div className="sent-message">Your message has been sent. Thank you!</div>
                                </div>
                                <div className="text-center"><button type="submit">Send Message</button></div>
                            </form>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

import { NavLink } from 'react-router-dom'

import { BsTwitter, BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs'

export default function footer() {
    return (
        <footer id="footer" className="footer">

            <div className="container">
                <div className="row gy-4">
                    <div className="col-lg-5 col-md-12 footer-info">
                        <a href="index.html" className="logo d-flex align-items-center">
                            <span>Botanical Solution</span>
                        </a>
                        <p>Botanical solution operates on principles of sustainability, accessibility, Feedback, and education, helping to promote a healthier and more connected society through the joys of gardening..</p>
                        <div className="social-links d-flex mt-4">
                            <a href="#" className="twitter"><BsTwitter /><i className="bi bi-twitter"></i></a>
                            <a href="#" className="facebook"><BsFacebook /><i className="bi bi-facebook"></i></a>
                            <a href="#" className="instagram"><BsInstagram /><i className="bi bi-instagram"></i></a>
                            <a href="#" className="linkedin"><BsLinkedin /><i className="bi bi-linkedin"></i></a>
                        </div>
                    </div>

                    <div className="col-lg-2 col-6 footer-links">
                        <h4>Useful Links</h4>
                        <ul>
                            <li><NavLink to={"/"}>Home</NavLink></li>
                            <li><NavLink to={"about"}>About Us</NavLink></li>
                            <li><NavLink to={"services"}>Services</NavLink></li>
                            <li><NavLink to={"pricing"}>Pricing</NavLink></li>
                            <li><a href="#">Terms of service</a></li>
                            <li><a href="#">Privacy policy</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-2 col-6 footer-links">
                        <h4>Our Services</h4>
                        <ul>
                            <li><a href="#">Air Quality Index</a></li>
                            <li><a href="#">Plant Recommandation</a></li>
                            <li><a href="#">Gardening Tips</a></li>
                            <li><a href="#">Feedback</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                        <h4>Contact Us</h4>
                        <p>
                            RGPV<br />
                            Airport Rd, Abbas Nagar, Gandhi Nagar<br />
                            Bhopal, 462033<br />
                            Madhya Pradesh, India <br /><br />
                            <strong>Phone:</strong> +91 12345 67891<br />
                            <strong>Email:</strong> support@BotanicalSolution.com<br />
                        </p>

                    </div>

                </div>
            </div>

            <div className="container mt-4">
                <div className="copyright">
                    &copy; Copyright <strong><span>BotanicalSolution</span></strong>. All Rights Reserved
                </div>
                {/* <div className="credits">
                    All the links in the footer should remain intact.
                    You can delete the links only if you purchased the pro version.
                    Licensing information: https://bootstrapmade.com/license/
                    Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/logis-bootstrap-logistics-website-template/
                    Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                </div> */}
            </div>

        </footer>
    )
}

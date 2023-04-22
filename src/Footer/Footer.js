import './Footer.css'
import { Link } from 'react-router-dom';


export function Footer() {

    return (

        <>
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-6">
                        <h6>About</h6>
                        <p class="text-justify">Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative to help the
                            upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or
                            snippets as the code wants to be simple. We will help programmers build up concepts in different
                            programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android,
                            SQL and Algorithm.</p>
                    </div>

                    <div class="col-xs-6 col-md-3">
                        <h6>Categories</h6>
                        <ul class="footer-links">
                            <li><Link >C</Link></li>
                            <li><Link >UI Design</Link></li>
                            <li><Link >PHP</Link></li>
                            <li><Link >Java</Link></li>
                            <li><Link >Android</Link></li>
                            <li><Link >Templates</Link></li>
                        </ul>
                    </div>

                    <div class="col-xs-6 col-md-3">
                        <h6>Quick Links</h6>
                        <ul class="footer-links">
                            <li><Link >About Us</Link></li>
                            <li><Link >Contact Us</Link></li>
                            <li><Link >Contribute</Link></li>
                            <li><Link >Privacy Policy</Link></li>
                            <li><Link >Sitemap</Link></li>
                        </ul>
                    </div>
                </div>

            </div>
            <div class="container">
                <div class="row">
                    <div class="col-md-8 col-sm-6 col-xs-12">
                        <p class="copyright-text">Copyright &copy; 2017 All Rights Reserved by
                            <Link href="#">Scanfcode</Link>.
                        </p>
                    </div>

                    <div class="col-md-4 col-sm-6 col-xs-12">
                        <ul class="wrapper">
                            <li class="icon facebook">
                                <span class="tooltip">Facebook</span>
                                <span><i class="bi bi-facebook"></i></span>
                            </li>
                            <li class="icon twitter">
                                <span class="tooltip">Twitter</span>
                                <span><i class="bi bi-twitter"></i></span>
                            </li>
                            <li class="icon instagram">
                                <span class="tooltip">Instagram</span>
                                <span><i class="bi bi-instagram"></i></span>
                            </li>
                            <li class="icon github">
                                <span class="tooltip">Github</span>
                                <span><i class="bi bi-github"></i></span>
                            </li>
                            <li class="icon youtube">
                                <span class="tooltip">Youtube</span>
                                <span><i class="bi bi-youtube"></i></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>

    );

}
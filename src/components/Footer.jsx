import React from 'react';

import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="w3l-footer-main">
      <div className="w3l-sub-footer-content">
        <section className="_form-3">
          <div className="form-main">
            <div className="container">
              <div className="middle-section grid-column top-bottom">
                <div className="image grid-three-column">
                  <img src="assets/images/subscribe.png" alt="Subscribe" className="img-fluid radius-image-full" />
                </div>
                <div className="text-grid grid-three-column">
                  <h2>Subscribe our Newsletter to receive latest updates from us</h2>
                  <p>We won’t give you spam mails.</p>
                </div>
                <div className="form-text grid-three-column">
                  <form action="/" method="GET">
                    <input type="email" name="placeholder" placeholder="Enter Your Email" required />
                    <button type="submit" className="btn btn-style btn-primary">Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="footer-14">
          <div id="footers14-block">
            <div className="container">
              <div className="footers20-content">
                <div className="d-grid grid-col-4 grids-content">
                  <div className="column">
                    <h4>Our Address</h4>
                    <p>
                      <span className="fa fa-map-marker"></span>
                      Addis Ababa, Ethiopia
                    </p>
                  </div>
                  <div className="column">
                    <h4>Call Us</h4>
                    <p>Mon - Fri 10:30 - 18:00</p>
                    <p>
                      <span className="fa fa-phone"></span>
                      <Link to="tel:+251-918-922-547"> +251-918-922-547</Link>
                    </p>
                  </div>
                  <div className="column">
                    <h4>Mail Us</h4>
                    <p>
                      <Link to="mailto:abrahammekuria73@gmail.com">
                        <span className="fa fa-envelope"></span>
                        Abraham Mekuria
                      </Link>
                    </p>
                  </div>
                  <div className="column">
                    <h4>Follow Us On</h4>
                    <ul>
                      <li><Link to="#facebook" aria-label="Facebook"><span className="fa fa-facebook" aria-hidden="true"></span></Link></li>
                      <li><Link to="#linkedin" aria-label="LinkedIn"><span className="fa fa-linkedin" aria-hidden="true"></span></Link></li>
                      <li><Link to="#twitter" aria-label="Twitter"><span className="fa fa-twitter" aria-hidden="true"></span></Link></li>
                      <li><Link to="#google" aria-label="Google Plus"><span className="fa fa-google-plus" aria-hidden="true"></span></Link></li>
                      <li><Link to="#github" aria-label="GitHub"><span className="fa fa-github" aria-hidden="true"></span></Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="footers14-bottom d-flex">
                <div className="copyright">
                  <p>© 2024 የወንጌላዊ አለምነህ ጀንበሩ ማስታወሻ. All rights reserved. Design by <Link to="https://github.com/21yene" target="_blank" rel="noopener noreferrer">Agarfan Friends</Link></p>
                </div>
              </div>
            </div>
          </div>

          <script>
            {`
              window.onscroll = function() {scrollFunction()};
              function scrollFunction() {
                if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                  document.getElementById("movetop").style.display = "block";
                } else {
                  document.getElementById("movetop").style.display = "none";
                }
              }
              function topFunction() {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
              }
            `}
          </script>
        </footer>
      </div>
    </div>
  );
}

export default Footer;

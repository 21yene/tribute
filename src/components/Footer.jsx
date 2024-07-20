import React from 'react';

function Footer() {
  return (
    <div className="w3l-footer-main">
      <div className="w3l-sub-footer-content">
        <section className="_form-3">
          <div className="form-main">
            <div className="container">
              <div className="middle-section grid-column top-bottom">
                <div className="image grid-three-column">
                  <img src="assets/images/subscribe.png" alt="" className="img-fluid radius-image-full" />
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
                    <p>Mon - Fri 10:30 -18:00</p>
                    <p>
                      <span className="fa fa-phone"></span>
                      <a href="tel:+251-918-922-547"> +251-918-922-547</a>
                    </p>
                  </div>
          
                  <div className="column">
                    <h4>Mail Us</h4>
                    <p>
                      <a href="mailto:abrahammekuria73@gmail.com">
                        <span className="fa fa-envelope"></span>
                        Abraham mekuria
                      </a>
                    </p>
                  </div>
                  <div className="column">
                    <h4>Follow Us On</h4>
                    <ul>
                      <li><a href="#facebook"><span className="fa fa-facebook" aria-hidden="true"></span></a></li>
                      <li><a href="#linkedin"><span className="fa fa-linkedin" aria-hidden="true"></span></a></li>
                      <li><a href="#twitter"><span className="fa fa-twitter" aria-hidden="true"></span></a></li>
                      <li><a href="#google"><span className="fa fa-google-plus" aria-hidden="true"></span></a></li>
                      <li><a href="#github"><span className="fa fa-github" aria-hidden="true"></span></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="footers14-bottom d-flex">
                <div className="copyright">
                  <p>© 2024 የወንጌላዊ አለምነህ ጀንበሩ ማስታወሻ. All rights reserved. Design by <a href="https://github.com/21yene" target="_blank" rel="noopener noreferrer">Agarfan Friends</a></p>
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

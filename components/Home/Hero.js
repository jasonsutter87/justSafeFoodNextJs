import React from 'react';

const HeroSection = () => {
  return (
    <section id="inner-full-size-hero">
      <div className="site-container-1340">
        <div className="row">
          <div className="col-12 col-lg-6 content">
            <h1>Get Early Access</h1>
            <h6>We’re launching our early access release this November, if you’re interested in working with us, please don’t hesitate to reach out.</h6>

            <div className="py-4">
              <a href="/contact" className="btn-primary btn-size-lg">Get Connected</a>
            </div>
          </div>
        </div>
      </div>
      <div className="inner-hero-photo">
        <img src="/images/assets/start-now/justsafefood-start-now-marquee-phase1.webp" alt="Image of a restaurant worker cleaning a table." />
      </div>
    </section>
  );
};

export default HeroSection;

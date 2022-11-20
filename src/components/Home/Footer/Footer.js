import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer-section-main">
      <div className="footer-section">
        <div className="col-md-6 footer-text">
          <h3>
            Let us handle your <br /> project, professionally.
          </h3>
          <small>
            With well written codes, we build amazing apps for all <br />{" "}
            platforms, mobile and web apps in general.
          </small>
        </div>
        <div className="col-md-6 form-div">
          <form>
            <div class="form-group">
              <input
                type="email"
                class="form-control padding-15"
                placeholder="Your email address"
              />
            </div>

            <div class="form-group">
              <input
                type="name"
                class="form-control padding-15"
                placeholder="Your name / company's name"
              />
            </div>

            <div class="form-group">
              <textarea
                class="form-control padding-15"
                rows="3"
                placeholder="Your message"
              ></textarea>
            </div>
            <button type="submit" className="btn-brand">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Footer;

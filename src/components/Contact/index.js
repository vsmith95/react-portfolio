import React, { useState } from "react";
import { validateEmail } from "../../utility/emailValidate";
import "../../assets/css/style.css"

const Contact = () => {
  return (
    <section>
      <div className="section-title">
        <h2>
          Contact Me
        </h2>
      </div>
      <div className="bio">
        <div className="cards work-card">
          <a >vaughnsmith95@gmail.com</a>
        </div>
      </div>
    </section>
  )
};

export default Contact;
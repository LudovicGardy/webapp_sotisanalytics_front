import React from "react";
import "./Parallax_profile.css";

function Profile() {
  return (
    <div className="parallax-profile-content">
      <div className="parallax-profile-content-img">
        <img
          src="/images/gardy_black_bg.jpg"
          alt="Portrait of Ludovic Gardy"
        />
      </div>
      <div className="services-quote-text parallax-profile-quote-text">
        <figure className="services-figure figure-large">
          <blockquote className="blockquote">
            <p>
              I specialize in creating innovative algorithms and efficient data pipelines
              to address complex challenges and unlock key insights for business growth.
              In my work, whether in collaboration or solo, I emphasize transparency and
              keep you fully informed about your project's progress and my recommendations.
            </p>

            <p>
              Committed to excellence, I constantly refine my skills to deliver top-quality
              products. My passion and determination, bolstered by a robust network of engineers
              and specialists, enable me to effectively understand and resolve any challenges
              encountered.
            </p>

            <figcaption className="figcaption">
              <span className="figcaption-span-services" style={{ backgroundColor: "white" }}>
                Ludovic Gardy
              </span>
            </figcaption>
          </blockquote>
        </figure>
      </div>
    </div>
  );
}

export default Profile;

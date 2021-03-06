import React from "react";

import logoFb from "../img/logo/logo-fb.svg";
import logoTwitter from "../img/logo/logo_twitter.svg";
import logoYoutube from "../img/logo/logo_yt.svg";
import pokesong from "../soundtrack/pokemon.mp3";

import "./Footer.css";

const Footer = (props) => {
    return (
      <footer
        id="footer"
        style={props.appear ? { opacity: 1 } : { opacity: 0 }}
      >
        <div className="flex-footer">
          <div className="flex-list">
            <ul>
              <li>
                {" "}
                <a href="R">Contact Us</a>
              </li>
              <li>
                <a href="R">Sponsors</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="R">Legal Mentions</a>
              </li>
              <li>
                <a href="R">Nintendo France</a>
              </li>
            </ul>
          </div>

          <hr />
          <audio src={pokesong} controls autoPlay></audio>
          <hr />

          <div className="flex-logoReseau">
            <a
              href="https://www.facebook.fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="logo-fb" src={logoFb} alt="Logo facebook" />
            </a>

            <a
              href="https://twitter.com/explore"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="logo-twitter"
                src={logoTwitter}
                alt="Logo twitter"
              />
            </a>

            <a
              href="https://www.youtube.fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img
                className="logo-youtube"
                src={logoYoutube}
                alt="Logo youtube"
              />{" "}
            </a>
          </div>
        </div>
      </footer>
    );
}

export default Footer;

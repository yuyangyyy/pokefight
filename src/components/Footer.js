import React from 'react';
import logo from '../LogoPoke.png';
import logoFb from '../logo-fb.svg';
import logoTwitter from '../logo_twitter.svg';
import logoYoutube from '../logo_yt.svg';


import './Footer.css';



class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="flex-footer">


                    <div className="flex-list">
                        <ul>
                            <li>Contact Us</li>
                            <li>Sponsors</li>
                        </ul>
                        <ul>
                            <li>Legal Mention</li>
                            <li>Nintendo France</li>
                        </ul>
                    </div>

                    <hr></hr>
                    <img className="logo-poke" src={logo} alt="Logo pokemon" />
                    <hr></hr>

                    <div className="flex-logoReseau"> 
                        <img className="logo-fb" src={logoFb} alt="Logo facebook" />
                        <img className="logo-twitter" src={logoTwitter} alt="Logo twitter" />
                        <img className="logo-youtube" src={logoYoutube} alt="Logo youtube" />
                    </div>


                </div>
            </footer>

        )
    }
}


export default Footer;
import React from 'react';
import logo from '../LogoPoke.png';
// import logobis from '../LogoPokeBlanc.png';
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
                            <li> <a href="R" >Contact Us</a></li>
                            <li><a href="R" >Sponsors</a></li>
                        </ul>
                        <ul>
                            <li><a href="R" >Legal Mentions</a></li>
                            <li><a href="R" >Nintendo France</a></li>
                        </ul>
                    </div>

                    <hr />
                    <img className="logo-poke" src={logo} alt="Logo pokemon" />
                    <hr />

                    <div className="flex-logoReseau">
                        <a href="https://www.facebook.fr" target="_blank" rel="noopener noreferrer"><img className="logo-fb" src={logoFb} alt="Logo facebook" /></a>


                        <a href="https://twitter.com/explore" target="_blank" rel="noopener noreferrer"><img className="logo-twitter" src={logoTwitter} alt="Logo twitter" /></a>


                        <a href="https://www.youtube.fr" target="_blank" rel="noopener noreferrer"> <img className="logo-youtube" src={logoYoutube} alt="Logo youtube" /> </a>
                    </div>


                </div>
            </footer>

        )
    }
}


export default Footer;
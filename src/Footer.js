import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';


function Footer() {
    return (
        <div className="footer">
            <div className="footer-content">
                {/* Section de contact */}
                <div className="footer-section">
                    <h4>Kontakt</h4>

                    <span>Email: astrid.thom1@gmx.de</span>
                    <span>Email: herzogmoffo@gmail.com</span>
                    <span>Postanschrift: Bessemerstr 9, 90411 Nürnberg</span>
                    <span>Telefonnummer: +49 176 43546046</span>
                    <span>oder: +49 15223755363</span>
                </div>
                
                {/* Section de services */}
=======
                    <span>Email:  kontakt@all-activity-group.de </span>
                    <span>Postanschrift : Luitpold str 11.  92637 Weiden</span>
                    <span>Telefonnummer:+49 176 76707335 </span>
                    
                    
                </div>
                <div className="footer-section social-media-section">
                    <h4>Folgen Sie uns</h4>
                    <a href="https://www.facebook.com/profile.php?id=61553730392193" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    </div>
                   
                <div className="footer-section">
                    <h4>Dienstleistungen</h4>
                    <ul>
                        <li>Netzwerk Spezialist</li>
                        <li>IT Administrator Spezialist</li>
                        <li>Netzwerk Sicherheit mit Firewall</li>
                        <li>Netzwerk Sicherheit mit BSI Grundschutz</li>
                        <li>Netzwerksicherheit mit Pentest nach BSI Grundschutz</li>
                        <li>Cloud Computing</li>
                        <li>Cloud Computing und Datenschutz</li>
                    </ul>
                </div>
                
                {/* Section des heures d'ouverture */}
                <div className="footer-section">
                    <h4>Öffnungszeiten</h4>
                    <span>Montag-Freitag</span>
                    <span>von 7 bis 20 Uhr</span>
                </div>
            </div>
      
    );
}

export default Footer;

import React, { useState } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';


function Footer() {


    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };


    return (
        <div className="footer1">
            <div className="footer-content1">
                <div className="footer-section1">
                    <h4>Kontakt</h4>
                    <span>Email: astrid.thom1@gmx.de</span>
                    <span>Email: info@thom-consulting.tech</span>
                    <span>Postanschrift: Bessemerstr 9, 90411 Nürnberg</span>
                    <span>Telefonnummer: +49 176 43546046</span>
                    <span>oder: +49 15223755363</span>
                </div>
                    
                
                <div className="footer-section social-media-section1">
                    <h4>Folgen Sie uns</h4>
                    <a href="https://www.facebook.com/profile.php?id=61556030981917" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                   
                    </div>
                   
                <div className="footer-section1">
                    <h4>Dienstleistungen</h4>
                    <ul>
                        <li>Beratung zu TISAX</li> 
                        <li>Beratung zu CISSP</li>
                        <li>ISO 27001 Consulting</li>
                        <li>IT Administrator </li>
                        <li>Netzwerk Sicherheit </li>
                        <li>Netzwerk Sicherheit mit BSI Grundschutz</li>
                        <li>Cloud Computing</li>
                        <li>Cloud Computing und Datenschutz</li>
                    </ul>
                </div>
                
                {/* Section des heures d'ouverture */}
                <div className="footer-section1">
                    <h4>Öffnungszeiten</h4>
                    <span>Montag-Freitag</span>
                    <span>von 9 bis 17 Uhr</span>
                    </div>

         
                    <div className="backlinkcontenar">
            <div className="backlink">
            <li><Link to="/Datenschutzerklaerung" onClick={toggleMenu}>Impressum</Link></li>
            <li><Link to="/Datenschutzerklaerung" onClick={toggleMenu}>Unternehmen Politik</Link></li>
            <li><Link to="/Datenschutzerklaerung" onClick={toggleMenu}>Datenschutzerklärung</Link></li>
                    <li><Link to="/Datenschutzerklaerung" onClick={toggleMenu}>AGB</Link></li>

                    </div>
            </div>
                
            </div>
            </div>
            
            
            
    );
}

export default Footer;

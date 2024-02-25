import React from "react";
import './Datenschutzerklaerung.css';

function Datenschutzerklaerung(){
    return(
        <div className="Datenschutzerklaerung-page">
            <div className="Datenschutzerklaerung-text">
                <h2>AT-CONSULTING</h2>

                <p>Datenschutzerklärung für AT-CONSULTING</p>

                <p><strong>Verantwortliche Stelle:</strong></p>
                <p>AT-CONSULTING<br />
                   Bessemer Str. 9, Nürnberg<br />
                   Tel: 07643546046<br />
                   Email:info@thom-consulting.tech</p>

                <p><strong>Erhebung personenbezogener Daten:</strong></p>
                <p>Wir erheben und verarbeiten personenbezogene Daten der Kunden im Rahmen der Auftragsverarbeitung gemäß Art. 26 DSGVO. Die Grundsätze der Datenverarbeitung nach Art. 5 DSGVO werden eingehalten. Diese umfassen:</p>

                <ul>
                    <li>Rechtmäßigkeit, Verarbeitung nach Treu und Glauben, Transparenz</li>
                    <li>Zweckbindung</li>
                    <li>Datenminimierung</li>
                    <li>Richtigkeit</li>
                    <li>Speicherbegrenzung</li>
                    <li>Integrität und Vertraulichkeit</li>
                </ul>

                <p><strong>Die Sicherheit der Verarbeitung erfolgt gemäß Art. 32 DSGVO durch geeignete technische und organisatorische Maßnahmen. Diese Maßnahmen umfassen:</strong></p>
                
                <ul>
                    <li>Pseudonymisierung und Verschlüsselung personenbezogener Daten</li>
                    <li>Gewährleistung der Vertraulichkeit, Integrität, Verfügbarkeit und Belastbarkeit der Systeme</li>
                    <li>Fähigkeit zur raschen Wiederherstellung nach einem Zwischenfall</li>
                    <li>Regelmäßige Überprüfung und Bewertung der Maßnahmen</li>
                </ul>

                <p><strong>Der Umgang mit Risiken wird durch eine angemessene Schutzstufe und Berücksichtigung möglicher Risiken geregelt. Zugangsregeln zum Schutz personenbezogener Daten stellen sicher, dass berechtigte Personen diese nur gemäß den Anweisungen verarbeiten.</strong></p>

                <p><strong>Verwendung personenbezogener Daten:</strong></p>
                <p>Die gesammelten Daten dienen IT-Consulting-Dienstleistungen im Bereich Netzwerk, Sicherheit und Cloud. Die Rechtsgrundlage ergibt sich aus Vertragserfüllung und dem berechtigten Interesse an der Verbesserung der Dienstleistungen</p>
            </div>
        </div>
    );
}

export default Datenschutzerklaerung;
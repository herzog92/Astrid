import React, { useEffect, useRef } from 'react';
import './Home.css';

function Home ()  {
    const imageSources = [

        "/image031.webp",
        "/image032.webp",
        "/image033.webp",
        "/image034.webp",
        "/image035.webp",
        "/image036.webp",
        "/image037.webp",
        "/image038.webp",

    ];
    const sliderRef = useRef(null);

    useEffect(() => {
        // Défilement vers la droite après le montage du composant
        const slider = sliderRef.current;
        if (slider) {
            slider.scrollLeft = slider.scrollWidth;
        }
    }, []);
    const rectanglesData = [
        {
          id: 1,
          title: "     Regierungen & Behörden",
          text: "Im Regierungsbereich führen wir Funktionstests für Verwaltungsverfahren durch und setze dabei eine agile Methodik ein, um Effizienz und Transparenz zu verbessern. Unsere Erfahrung als leitender Tester umfasst umfassende Sicherheits- und Compliance-Audits, um die Integrität der Regierungsinformationssysteme zu gewährleisten. Als Berater tragen wir zur Optimierung von Informationsmanagementsystemen bei und stärke so die Fähigkeiten der Regierung, ihre Bürger effektiv und sicher zu bedienen. "
        },
        {
          id: 2,
          title: "Healthcare",
          text: "Als erfahrener , sind wir auf Funktionstests von medizinischen Verfahren spezialisiert und gewährleiste die Einhaltung strenger Qualitäts- und Sicherheitsstandards im Gesundheitswesen. Unsere Erfahrung als Qualitätsmanager im Gesundheitssektor umfasst auch umfassende Datenschutzaudits, um die Vertraulichkeit und Integrität sensibler medizinischer Informationen zu gewährleisten."
        },
        {
          id: 3,
          title: "Automobile industrie",
          text: "unsere Expertise erstreckt sich auf die Automobilindustrie, wo wir eine entscheidende Rolle als Qualitätssicherungsingenieur für Sicherheit spiele. wir führen Codeanalysen gemäß Spice-Standards durch und trage so zur Zuverlässigkeit von Embedded-Systemen bei. Unsere Position als leitender Tester umfasst gründliche Bewertungen, um die Einhaltung höchster Standards für die Automobilsicherheit sicherzustellen und so den Schutz von Fahrern und Insassen zu gewährleisten. "
        }
        // ... Vous pouvez ajouter plus d'objets ici
      ]
      

   
    return (
        <div className="home-container">
            <div className="acceuil">
            <img src="/image040.jpg" alt="Visual representation" className="acceuil-img" />

            </div>


            <div className=" sectiona1">
                <img src="/image039.webp" alt="Visual representation" className="section1-img" />
                <div className="sectiona1-text">
                    <h2>Willkommen bei ATS Ihr Experte für Informationssicherheit</h2>
                    Unsere Dienstleistungen umfassen umfassendes Changemanagement, Risikomanagement und Notfallmanagement, basierend auf den TISAX-Standard für Informationssicherheit der OEMs nach VDA-ISA 5.1 und 6.0. Unser Fokus liegt auf dem Management der Informationssicherheit nach ISO 27001 und der Vorbereitung auf die Zertifizierung. Hier sind einige unserer Schwerpunkte.
                </div>
            </div>

           

            <div className="section0021">
          <div className="section0021-text">
            <h2>Unsere Zertifikationen .</h2>
          </div>
        </div>

                    <div className=" sectiona8">

    <div className="image-slider">
        {imageSources.map((src, index) => (
            <img src={src} alt={`Visual representation ${index + 1}`} key={'first-' + index} />
        ))}
        {imageSources.map((src, index) => (
            <img src={src} alt={`Visual representation ${index + 1}`} key={'second-' + index} />
        ))}
    
</div>
</div>


            <div className="sectiona2">
                <div className="sectiona2-text">
                    <h2>Informationssicherheitsmanagement und Zertifizierungsvorbereitung</h2>
                    Unsere Experten unterstützen Sie bei der Umsetzung von Mindestanforderungen an die Führung, Organisation, Planung, Unterstützung, Betrieb und Verbesserung. Wir bereiten Ihr Unternehmen auf die ISO 27001-Zertifizierung vor und gewährleisten eine lückenlose Umsetzung.
                </div>
                <img src="/image012.webp" alt="Visual representation" className="section1-img" />
                </div>


            <div className="section001-style">
          <h1>Thom-Consulting</h1>
          <p>Unsere Beratungsdienste bei Thom-Consulting umfassen eine breite Palette von Fachgebieten in der Informationstechnologie, die Ihnen helfen, Ihre Unternehmensziele zu erreichen und Ihre IT-Infrastruktur zu optimieren. Wir bieten Expertise bei der Zertifizierung nach internationalen Standards wie TISAX und ISO 27001. Unsere zertifizierten CISSP-Experten stehen Ihnen zur Verfügung, um Ihre Informationssicherheitsstrategie zu entwickeln und zu implementieren. Mit unserer Erfahrung im Bereich IT-Administration helfen wir Ihnen, effiziente Prozesse zu etablieren und Ihre IT-Infrastruktur zu verwalten. Unsere Experten für Netzwerksicherheit bieten Lösungen zur Absicherung Ihrer Netzwerkinfrastruktur. Wir unterstützen Sie bei der Umsetzung des BSI-Grundschutzstandards, um eine angemessene Sicherheitsarchitektur für Ihr Unternehmen aufzubauen. Wir bieten Beratungsdienste für die sichere Nutzung von Cloud-Services und die Einhaltung der Datenschutzbestimmungen. Vertrauen Sie auf die Expertise von Thom-Consulting, um Ihre IT-Sicherheitsziele zu erreichen und Ihre Unternehmensdaten zu schützen.</p>
        </div>   


            <div className="section02">
                <div className="rectangle-container">
                  {rectanglesData.map(rectangle => (
                    <div key={rectangle.id} className="rectangle">
                      <h2>{rectangle.title}</h2>
                      <p>{rectangle.text}</p>
                    </div>
                  ))}
                </div>
              </div>

            <div className="sectiona3">
                <img src="/image005.webp" alt="Visual representation" className="section1-img"/>
                <div className="sectiona3-text">
                    <h2> Changemanagement und Risikomanagement.</h2>
                    Wir bieten Unterstützung bei der Implementierung von organisatorischen und technischen Vorgaben zur Steigerung der Informationssicherheit. Unsere Dienstleistungen umfassen die Überwachung von IT-Sicherheitsstrukturen, Risikobewertungen und die Begleitung von internen sowie externen Audits.
                </div>
            </div>
            </div>
    );
}

export default Home;
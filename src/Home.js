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
        
        // ... autres sources d'images ...

        "/image4.webp",
        "/image01.webp",
        "/image03.webp",
        "/image17.webp",
        "/image18.webp",
        "/image9.webp",
        "/image8.webp",
        "/image5.webp",
        "/image6.webp",
        "/image7.webp",

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
          text: "...................................... "
        },
        {
          id: 2,
          title: "Healthcare",
          text: "..............was hast du schon hier gemacht."
        },
        {
          id: 3,
          title: "Automobile industrie",
          text: "................................. "
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
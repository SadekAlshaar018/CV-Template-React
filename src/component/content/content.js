import React from 'react';
import '../../App.css';
import '../../js/fadeIn';


export default class Cont extends React.Component {
  render(){
    return(
 <div className="timeline" id="story">
   <ul>
     <li className="fade" id="develop">
       <div className="content">
         <h3>Front end developer bij <a href="#" target="__blank">Ask Phil </a>Amsterdam
            Develop Web Shop door Shopify platform</h3>
            <ul>
              <ol>
                <p>
                Online webshop maken met (<strong>liquid, JavaScript, React,HTML ,Sass,
                S‘CSS’</strong>)
                </p>
              </ol>
              <ol>
                <p>
                TODO lijst maken voor andere webshop online
                </p>
              </ol>
              <ol>
                <p>
                Gebruik backend technologie zoals (PHP, NodeJS, Ruby on rails)
                </p>
              </ol>
            </ul>
       </div>
       <div className="time">
         <h4> 2018 - heden</h4>
       </div>
     </li>
     <li className="fade1" id="ict">
       <div className="content">
         <h3>
         Vrijwilliger als ICT medewerker in <a href="">Lets Ruilen Winkel</a> Schiedam
         </h3>
           <ul>
            <h5>Reparatie alle computers</h5>
            <ol>Onderhoud alle software problemen</ol>
            <ol>In de gaten houden welke computer of laptop niet werkend zijn</ol>
           </ul>
       </div>
       <div className="time">
         <h4>2015 - 2016</h4>
       </div>
     </li>
     <li className="fade" id="ziek">
       <div className="content">
         <h3>Verpleger in het ziekenhuis</h3>
          <ul>
            <ol>Zieke mensen verzorgen</ol>
            <ol>De juiste medicijnen toe dienen</ol>
          </ul>
       </div>
       <div className="time">
         <h4>2014 – 2015</h4>
       </div>
     </li>
     <li className="fade" id="beheerder">
       <div className="content">
         <h3>ICT beheerder</h3>
          <h5>Onderhoud de computers en klanten en adviseren</h5>
            <ul>
              <ol>Klanten informeren en adviseren</ol>
              <ol>Onderhoud alle software problemen</ol>
            </ul>
       </div>
       <div className="time">
         <h4>2008 - 2014</h4>
       </div>
     </li>
     <li className="fade" id="monteur">
       <div className="content">
         <h3>Elektromonteur</h3>
          <h5>
            Afdeling storing en onderhoud Midden
          </h5>
          <ul>
            <ol>
              Onderhoud elektrisch apparaat zoals (wasmachine- alle huis apparaat)
            </ol>
            <ol>
              Ik werkte in afdeling storing en onderhoud Midden Binnen kleine bedrijf
            </ol>
          </ul>
       </div>
       <div className="time">
         <h4>2005 - 2008</h4>
       </div>
     </li>
     <li className="fade" id="opleid">
       <div className="content">
         <h3>Opleidingen</h3>
          <ul>
            <ol>
            <span><strong>2017 – 2018</strong></span><br />
              Bootcamp coding in Restart Network Rotterdam Cyber Security online cursus future Learn
            </ol>
            <ol>
            <span><strong>2006 - 2012</strong></span><br />
            International Public en private rechten Damascus en Cairo Universiteit</ol>
            <ol>
              <span><strong>2013 - 2014</strong></span><br />
            Rechten WO Damascus Universiteit (Certificaten)</ol>
            <ol>
              <span><strong>2003 – 2006</strong></span><br />
            Hoog School wetenschappelijk afdeling - Al Saada - Damascus (Diploma)</ol>
            <ol>
              <span><strong>2000 - 2003</strong></span><br />
            Middelbaar School Maliekieah Damascus (Diploma)</ol>
            <ol>
              <span><strong>1994 - 2000</strong></span><br />
            Basis school Tarshieha Damascus(Diploma)</ol>
          </ul>
       </div>
     </li>
     <li className="fade" id="vaar">
       <div className="content">
         <h3>Vaardigheden</h3>
          <ul>
            <ol>
            <strong>Computer</strong><br/>
            Ik heb uitstekende kennis van Windows, Mac OS
            </ol>
            <ol>
            <strong>Taal</strong><br/>
            Nederlands en Engels goed in woord en geschrift,Arabisch is mijn moeder taal.
            </ol>
            <ol>
            <strong>Referenties</strong><br/>
            Op aanvraag direct verkrijgbaar
            </ol>
          </ul>
       </div>
     </li>
   </ul>
 </div>
    );
  }
}

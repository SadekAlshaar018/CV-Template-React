import React from 'react';
import '../../App.css';


export default class Cover extends React.Component {

  render(){
    return(
      <div className="cover cb-slideshow">
        <ul>
             <li><span className="cover"></span></li>
             <li><span className="cover"></span></li>
             <li><span className="cover"></span></li>
             <li><span className="cover"></span></li>
             <li><span className="cover"></span></li>
             <li><span className="cover"></span></li>
         </ul>
      </div>
    );
  }
}

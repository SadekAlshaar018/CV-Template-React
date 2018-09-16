import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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

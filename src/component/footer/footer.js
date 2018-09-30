import React from 'react';
import '../../App.css';
import Nav from '../header/navbar';


export default class Footer extends React.Component {
  render(){
    return(
      <div id="contact">
        <div className="footer">
          <div className="footer__inner">
            <Nav />
          </div>
        </div>
        <small className="footer__copy"><p>@copy writer</p></small>
      </div>
    );
  }
}

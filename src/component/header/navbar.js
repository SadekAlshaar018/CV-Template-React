import React from 'react';
import '../../App.css';


export default  class Nav extends React.Component {

constructor(props){
  super(props);
  this.state = [
      {
       type: 'link',
       text: 'Home',
       url:'#'
     },
     {
        type: 'link',
        text: 'Story',
        url:'#story'
      },
      {
         type: 'link',
         text: 'Work',
         url:'#'
      },
      {
          type: 'link',
          text: 'Contact',
          url:'#contact'
      }
  ]


}

render(){
  return(
    <div className="App-header App__nav--links">
      <div className="App-header App__nav--links link">
        <a href={this.state[0].url} className="" target="__blank"><p>{this.state[0].text}</p></a>
      </div>
      <div className="App-header App__nav--links link">
        <a href={this.state[1].url}
        className="" ><p>{this.state[1].text}</p></a>
      </div>
      <div className="App-header App__nav--links link">
        <a href={this.state[2].url} className="" target="__blank"><p>{this.state[2].text}</p></a>
      </div>
      <div className="App-header App__nav--links link">
        <a href={this.state[3].url}
        className="" ><p>{this.state[3].text}</p></a>
      </div>
    </div>

   );
 }
}

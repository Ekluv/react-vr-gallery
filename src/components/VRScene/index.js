import React from 'react';
import ReactDOM from 'react-dom';
import 'aframe';
import {Entity, Scene} from 'aframe-react';


export default class VRScene extends React.Component {
  render () {
    return (
      
      <Scene>
      <a-assets>
        <img id="vrscene" crossOrigin="anonymous"/>
      </a-assets>
        
        <Entity primitive='a-sky' src={this.props.src} />
      </Scene>
    );
  }
}
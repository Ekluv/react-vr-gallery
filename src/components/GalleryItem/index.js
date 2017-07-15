import React from 'react';
import { Link } from 'react-router';
import './styles.css';


export default class GalleryItem extends React.Component {
    render() {
 
        return (
           <div className="gallery-item">
                <div style={{height: '170px'}}>
                <Link to={`/vr-view/${this.props.index}`}>
                    <img src={this.props.src} className="img-responsive" />
                </Link>
                </div>
                <div className="caption">{this.props.caption}</div>
            </div>
        );
    }
}


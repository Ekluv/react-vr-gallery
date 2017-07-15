import React from 'react';
import GalleryItem from '../GalleryItem';
import './styles.css';


export default class Gallery extends React.Component {
    constructor(props){
        super(props);
    }

    renderGallery() {
        return this.props.images.map((image, index) => {
            return (
                 <div className="col-md-4 col-sm-6 col-xs-12 gallery" key={index} >
                    <GalleryItem src={image.pano} caption={image.name} index={index} />
                </div>
            )
        });
    }


    render() {
        
        return (
            <div className="gallery-wrapper">
                <div className="row">
                    {this.renderGallery()}
                </div>
            </div>
        );
    }
}

Gallery.propTypes = {
  style: React.PropTypes.object,
  className: React.PropTypes.string,
};

import React, { Component } from 'react';
import ImageGalleryView from '../component/ImageGallery'

class ImageGallery extends Component {
    onImageClick = (e) => {
        
        if (e.target === e.currentTarget) {
            const img = e.target.attributes.data.nodeValue
            const alt = e.target.attributes.alt.nodeValue
            this.props.onClick()
            this.props.returnImg(img, alt)
        }
    }

    render() { 
        return (
            <ImageGalleryView
                images={this.props.images}
                onClick={this.onImageClick}/>
         );
    }
}
 
export default ImageGallery;
import ImageGalleryItem from "./ImageGalleryItem";
import './index.css';

function ImageGallery({ images, onClick }) {
    return (
        <ul className="ImageGallery">
                <ImageGalleryItem
                images={images}
                onClick={onClick}
                />
        </ul>
        );
}
 
export default ImageGallery;
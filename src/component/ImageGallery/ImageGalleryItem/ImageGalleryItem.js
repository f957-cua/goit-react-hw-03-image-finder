import './index.css';

function ImageGalleryItem({images, onClick}) {
    return (
        images.map(img => (
            <li
                key={img.id}
                className="ImageGalleryItem"
                >
                <img src={img.webformatURL}
                    alt={img.type}
                    className="ImageGalleryItem-image"
                    onClick={onClick}
                    data={img.largeImageURL}/>
            </li>
        ))
    );
}
 
export default ImageGalleryItem;
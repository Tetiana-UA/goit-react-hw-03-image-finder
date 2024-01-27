const ImageGalleryItem = ({id, smallUrl,tags}) => {
    return (
        <li 
        className="gallery-item"
        key={id}>
        <img 
        src={smallUrl}
        alt={tags} />
        </li>
    )
}
export default ImageGalleryItem;




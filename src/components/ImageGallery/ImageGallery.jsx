import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";

const ImageGallery = ({items}) => {

    return (
        <ul className="gallery">
    {items.map(({id,webformatURL,tags}) =>
        (<ImageGalleryItem
        key={id}
        id={id}
        tags={tags}
        smallUrl={webformatURL}
        />))}
        </ul>
    )
}
export default ImageGallery;
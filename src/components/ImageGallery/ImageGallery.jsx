import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import css from "./image-gallery.module.css";

const ImageGallery = ({items, showModal}) => {

    return (
        <ul className={css.imageGallery}>
    {items.map(({id,webformatURL,tags,showModal}) =>
        (<ImageGalleryItem
        showModal={showModal}
        key={id}
        id={id}
        tags={tags}
        smallUrl={webformatURL}
        />))}
        </ul>
    )
}
export default ImageGallery;
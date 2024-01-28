import css from "./image-gallery-item.module.css";

const ImageGalleryItem = ({id, smallUrl,tags}) => {
    return (
        <li 
        className={css.imageGalleryItem}
        key={id}>
        <img 
        className={css.photo}
        src={smallUrl}
        alt={tags} />
        </li>
    )
}
export default ImageGalleryItem;




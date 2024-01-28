import css from "./image-gallery-item.module.css";

const ImageGalleryItem = ({id, smallUrl,tags,showModal}) => {
    return (
        <li 
        className={css.imageGalleryItem}
        key={id}
        onClick={showModal}>
        <img 
        className={css.photo}
        src={smallUrl}
        alt={tags} />
        </li>
    )
}
export default ImageGalleryItem;




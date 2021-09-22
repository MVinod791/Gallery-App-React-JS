// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imagesList, updateImageGallery, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = imagesList

  const onClickThumbnailImage = () => {
    updateImageGallery(id)
  }

  const activeThumbnailClassName = isActive ? 'thumbnail active' : 'thumbnail'

  return (
    <li className="list-items">
      <button className="button" type="button">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`thumbnail-images ${activeThumbnailClassName}`}
          onClick={onClickThumbnailImage}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem

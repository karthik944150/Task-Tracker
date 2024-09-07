import './index.css'

const ImagesList = props => {
  const {imagesDetails} = props
  const {imageUrl} = imagesDetails
  return (
    <li>
      <img src={imageUrl} className="image" alt="img" />
    </li>
  )
}

export default ImagesList

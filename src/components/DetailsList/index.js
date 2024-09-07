import './index.css'

const DetailsList = props => {
  const {dataDetails} = props
  const {description} = dataDetails

  return (
    <li>
      <p className="description">{description}</p>
    </li>
  )
}

export default DetailsList

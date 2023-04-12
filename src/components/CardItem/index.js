import './index.css'

const Cards = props => {
  const {cardsDetails} = props
  const {title, description, imgUrl, className} = cardsDetails

  return (
    <li className={`${className} oneCard`}>
      <div className="listItems">
        <h1 className="title">{title}</h1>
        <p className="para">{description}</p>
        <img className="image" src={imgUrl} alt={title} />
      </div>
    </li>
  )
}

export default Cards

import './OfferCard.css'

function OfferCard({title, caption, imageURL, backgroundPosition}) {
  return (
    <div className="offer-item" style={{backgroundImage: `url(${imageURL})`, backgroundPosition: backgroundPosition}}>
        <div className="offer-info-wrapper">
            <div className="offer-info">
                <h3 className="offer-subtitle">{title}</h3>
                <p className="offer-caption">{caption}</p>
            </div>
        </div>
    </div>
  )
}

export default OfferCard
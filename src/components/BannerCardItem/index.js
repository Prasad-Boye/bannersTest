import './index.css'

const Banner = props => {
  const {bannerCard} = props
  const {headerText, description, className} = bannerCard
  return (
    <li className={className} id="card">
      <div>
        <h1>{headerText}</h1>
        <p className="para">{description}</p>
        <button className="button">Show More</button>
      </div>
    </li>
  )
}

export default Banner

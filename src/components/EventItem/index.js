// Write your code here
import './index.css'

const Eventitem = props => {
  const {eventsList, onRegistrationStatusChanged} = props
  const {imageUrl, name, location, registrationStatus} = eventsList

  const onclickButton = () => {
    onRegistrationStatusChanged(registrationStatus)
  }
  return (
    <li className="Eventitem_container">
      <button
        className="Eventitem_button"
        type="button"
        onClick={onclickButton}
      >
        <img src={imageUrl} alt="event" className="Eventitem_image" />
      </button>
      <p className="Eventitem_name">{name}</p>
      <p className="Eventitem_location">{location}</p>
    </li>
  )
}

export default Eventitem

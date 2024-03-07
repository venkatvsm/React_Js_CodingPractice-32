// Write your code here
import './index.css'

const registrationStatusEl = {
  yet_To_Registar: 'YET_TO_REGISTER',
  register: 'REGISTERED',
  registrationClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {registrationStatus} = props
  const renderYetToRegistar = () => (
    <div className="YetToRegistar_container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="YetToRegistar_image"
      />
      <p className="YetToRegistar_para">
        A live performance brings so much to your relationship with dance.
        seeing dance live can can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button type="button" className="YetToRegistar_button">
        Register Here
      </button>
    </div>
  )
  const renderRegister = () => (
    <div className="register_container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="register_image"
      />
      <h1 className="register_para">You have already registered for the event</h1>
    </div>
  )
  const renderRegistrationClosed = () => (
    <div className="registrationClosed_container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="registrationClosed_image"
      />
      <h1 className="registrationClosed_heading">
        Registrations Are Closed Now!
      </h1>
      <p className="registrationClosed_para">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )
  const renderNoActiveEvent = () => (
    <div className="NoActiveEvent_para">
      <p>Click on an event, to view its registration details</p>
    </div>
  )

  switch (registrationStatus) {
    case registrationStatusEl.yet_To_Registar:
      return renderYetToRegistar()
    case registrationStatusEl.register:
      return renderRegister()
    case registrationStatusEl.registrationClosed:
      return renderRegistrationClosed()
    default:
      return renderNoActiveEvent()
  }
}
export default ActiveEventRegistrationDetails

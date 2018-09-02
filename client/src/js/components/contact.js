import React from 'react';

class ContactGuest extends React.Component {
  state = {
    preference: 'mobile',
  }

  handleOptionsChange = (event) => {
    this.setState({
      preference: event.target.value,
    });
  }

  handleDetailsChange = (event) => {
    this.setState({
      contactDetails: event.target.value,
    });
  }

  render() {
    return (
      <form className="attendance-guest__contact-details">
        <div className="attendance-guest__contact-option">
          <input type="radio" value="mobile" name="contactType" onChange={this.handleOptionsChange} defaultChecked/>
          <label htmlFor="mobile">Mobile</label>
          <input type="radio" value="email" name="contactType" onChange={this.handleOptionsChange}/>
          <label htmlFor="email">Email</label>

          <div className="attendance-guest__contact-detail">
            <input
              className="attendance-guest__contact-detail-input"
              name="contact"
              placeholder={`Enter your ${this.state.preference}`}
              type={this.state.preference === 'mobile' ? 'text' : 'email' }
              pattern={this.state.preference === 'mobile' ? '[0-9]{10}' : ''}
              onChange={this.handleDetailsChange}
              required
            />
          </div>
        </div>
        <button
          className="attendance-guest__contact-button"
          onClick={() => this.props.addContactGuest(this.props.guestID, this.state.contactDetails)}
        >
          Contact Me!
        </button>
      </form>
    )
  }
}

export default ContactGuest;

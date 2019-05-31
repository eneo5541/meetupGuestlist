import React from 'react';
import * as style from '../styles/contact';

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
      <form css={style.contactDetails}>
        <div css={style.contactOption}>
          <input type="radio" value="mobile" name="contactType" onChange={this.handleOptionsChange} defaultChecked/>
          <label htmlFor="mobile">Mobile</label>
          <input type="radio" value="email" name="contactType" onChange={this.handleOptionsChange}/>
          <label htmlFor="email">Email</label>

          <div>
            <input
              css={style.contactDetailInput}
              name="contact"
              placeholder={`Enter your ${this.state.preference}`}
              type={this.state.preference === 'mobile' ? 'text' : 'email' }
              pattern={this.state.preference === 'mobile' && '[0-9]{10}' }
              onChange={this.handleDetailsChange}
              required
            />
          </div>
        </div>
        <button
          css={style.contactButton}
          onClick={() => this.props.addContactGuest(this.props.guestID, this.state.contactDetails)}
        >
          Contact Me!
        </button>
      </form>
    )
  }
}

export default ContactGuest;

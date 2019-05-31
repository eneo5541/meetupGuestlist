import React from 'react';
import PropTypes from 'prop-types';
import ContactGuest from './contact';
import * as style from '../styles/guest'

class Guest extends React.Component {
  state = {
    checked: false,
  }

  handleChange = () => {
    this.setState({ checked: !this.state.checked });
  }

  addContactGuest = () => {
    this.props.addContactGuest();
  }

  render() {
    return(
      <li>
        <div css={style.guest(this.props.arrived)}>
          <div css={style.avatarContainer}>
            <img css={style.avatar} alt={`Avatar of ${this.props.name}`} src={this.props.avatar || './assets/person.png'} />
          </div>
          <div css={style.guestDetails}>
            <div css={style.guestName}>
              {this.props.name}
            </div>
            <div>
              <input type="checkbox" onChange={this.handleChange} checked={this.state.checked} />
              <label htmlFor="jobs">Tell me about jobs at Domain</label>
            </div>
          </div>
          <div css={style.checkIn}>
            <button
              css={style.checkInButton(this.props.arrived)}
              onClick={() => { this.props.toggleAttendeeArrival(this.props.id, !this.props.arrived); }}
            >
              <span css={style.nameStatus}>{this.props.arrived ? ' Checked In!' : ' Sign me in!'}</span>
            </button>
          </div>
        </div>
        { this.state.checked &&
          <div css={style.contact}>
            <ContactGuest
              guestID={this.props.id}
              addContactGuest={this.props.addContactGuest}
            />
          </div>
        }
      </li>
    )
  }
}

Guest.propTypes = {
  arrived: PropTypes.bool,
  id: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
};

Guest.defaultProps = {
  arrived: false,
  avatar: null,
}

export default Guest;

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
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
        <div className={style.guest(this.props.arrived)}>
          <div className={style.avatarContainer}>
            <img className={style.avatar} alt={`Avatar of ${this.props.name}`} src={this.props.avatar || './assets/person.png'} />
          </div>
          <div className={style.guestDetails}>
            <div className={style.guestName}>
              {this.props.name}
            </div>
            <div>
              <input type="checkbox" onChange={this.handleChange} checked={this.state.checked} />
              <label htmlFor="jobs">Tell me about jobs at Domain</label>
            </div>
          </div>
          <div className={style.checkIn}>
            <button
              className={style.checkInButton(this.props.arrived)}
              onClick={() => { this.props.toggleAttendeeArrival(this.props.id, !this.props.arrived); }}
            >
              <span className={style.nameStatus}>{this.props.arrived ? ' Checked In!' : ' Sign me in!'}</span>
            </button>
          </div>
        </div>
        { this.state.checked &&
          <div className={style.contact}>
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

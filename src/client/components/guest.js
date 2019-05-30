import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ContactGuest from './contact';

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
        <div className={classnames('attendance-guest', {[`has-arrived`]: this.props.arrived })}>
          <div className="attendance-guest__avatar-container">
            <img className="attendance-guest__avatar" alt={`Avatar of ${this.props.name}`} src={this.props.avatar || './assets/person.png'} />
          </div>
          <div className="attendance-guest__details">
            <div className="attendance-guest__name">
              {this.props.name}
            </div>
            <div className="attendance-guest__jobs">
              <input type="checkbox" onChange={this.handleChange} checked={this.state.checked} />
              <label htmlFor="jobs">Tell me about jobs at Domain</label>
            </div>
          </div>
          <div className="attendance-guest__check-in">
            <button
              className={classnames('attendance-guest__check-in-button', {[`has-arrived`]: this.props.arrived })}
              onClick={() => { this.props.toggleAttendeeArrival(this.props.id, !this.props.arrived); }}
            >
              <span className="attendance-guest__name-status">{this.props.arrived ? ' Checked In!' : ' Sign me in!'}</span>
            </button>
          </div>
        </div>
        { this.state.checked &&
          <div className="attendance-guest__contact">
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

import React, { Component } from 'react';
import Menu from './menu';

const MEETUP_LOCAL_STORAGE = 'meetup-latest-event';

const loadObjectFromLocalStorage = (objectKey) => {
  const latestEvent = JSON.parse(localStorage.getItem(MEETUP_LOCAL_STORAGE));
  return latestEvent ? latestEvent[objectKey] : null;
}

class MeetupGuestlist extends Component {
  state = {
    currentEvent: {
      id: loadObjectFromLocalStorage('id'),
      name: loadObjectFromLocalStorage('name'),
      group: loadObjectFromLocalStorage('group'),
    },
    attendees: loadObjectFromLocalStorage('attendees') || [],
    searchString: '',
  };

  updateAttendeesList = () => {
    if(window.confirm('This will reload the current list of attendees. Are you sure you want to continue?')) {
      fetch('/api/getNextEvent')
        .then(res => res.json())
        .then(json => {
          this.setState({ currentEvent: json });
          return fetch(`/api/getEventAttendees/${json.id}`);
        })
        .then(res => res.json())
        .then(json => {
          this.saveAttendees(json);
          this.setState({ searchString: '' });
        });
    }
  }

  downloadAttendeesList = () => {
    const arrivedAttendees = this.state.attendees
      .filter(attendee => attendee.arrived)
      .map(attendee => attendee.name);
    const csvContent = `data:text/csv;charset=utf-8,${arrivedAttendees.join(',')}`;
    window.open(encodeURI(csvContent));
  }

  emailAttendeesList = () => {
    const emailRecipient = window.prompt('Which email should we send the guestlist to?');
    if (emailRecipient) {
      const arrivedAttendees = this.state.attendees
        .filter(attendee => attendee.arrived)
        .map(attendee => attendee.name);
      fetch('/api/sendEmailEventAttendees', {
        body: JSON.stringify({
          currentEvent: this.state.currentEvent.name,
          arrivedAttendees,
          emailRecipient,
        }),
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'user-agent': 'Mozilla/4.0 MDN Example',
          'content-type': 'application/json'
        },
        method: 'POST',
        mode: 'cors',
        redirect: 'follow',
        referrer: 'no-referrer',
      });
    }
  }

  addNewAttendee = () => {
    const newAttendee = window.prompt('Please enter your name');
    if (newAttendee) {
      const attendees = this.state.attendees.concat([{
        id: `${newAttendee}-${Date.now()}`,
        name: newAttendee,
        avatar: null,
        arrived: true,
      }]);
      this.saveAttendees(attendees);
    }
  }

  saveAttendees = (attendees) => {
    this.setState({ attendees });
    localStorage.setItem(MEETUP_LOCAL_STORAGE, JSON.stringify({
      id: this.state.currentEvent.id,
      name: this.state.currentEvent.name,
      attendees,
    }));
  }

  onSearch = (event) => {
    const searchString = event.target.value.toLowerCase();
    this.setState({ searchString });
  }

  toggleAttendeeArrival = (attendeeId, arrived) => {
    const attendees = this.state.attendees;
    const attendeeIndex = attendees.findIndex(attendee => attendee.id === attendeeId);

    if (attendees[attendeeIndex].arrived !== arrived) {
      attendees[attendeeIndex].arrived = arrived;
      this.saveAttendees(attendees);
    }
  }

  getAttendancePercentage = () => {
    const totalAttendees = this.state.attendees.length;
    const arrivedAttendees = this.state.attendees.filter(attendee => attendee.arrived).length;
    return (arrivedAttendees / totalAttendees) * 100
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.currentEvent.name}</h1>
        <input type="text" onChange={event => this.onSearch(event)} placeholder="Search for an attendee" />
        <button onClick={this.addNewAttendee}>Add new attendee</button>
        <Menu>
          <button onClick={this.updateAttendeesList}>Refresh attendees</button>
          <button onClick={this.downloadAttendeesList}>Download attendees</button>
          <button onClick={this.emailAttendeesList}>Email attendees</button>
        </Menu>
        <div className="attendee-capacity">
          {this.state.attendees.filter(attendee => attendee.arrived).length} / {this.state.attendees.length}
        </div>
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${this.getAttendancePercentage()}%` }} />
        </div>
        <ul>
          {this.state.attendees
            .filter(attendee => attendee.name.toLowerCase().indexOf(this.state.searchString) > -1)
            .map((attendee, key) => (
            <li key={key}>
              <button onClick={() => { this.toggleAttendeeArrival(attendee.id, !attendee.arrived); }}>
                <div className="avatar-container">
                  {attendee.avatar &&
                    <img className="avatar" alt={`Avatar of ${attendee.name}`} src={attendee.avatar} />
                  }
                </div>
                <div className="name">{attendee.name}</div>
                <span className="confirmation" role="img" aria-label={`${attendee.arrived ? 'Decline' : 'Confirm'} arrival of ${attendee.name}`}>
                  { attendee.arrived ? '❌' : '✅' }
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default MeetupGuestlist;

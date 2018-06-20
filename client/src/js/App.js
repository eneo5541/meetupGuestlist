import React, { Component } from 'react';

class App extends Component {
  state = {
    currentEvent: null,
    attendees: [],
    searchString: '',
  };

  componentDidMount() {
    this.updateAttendeesList();
  }

  updateAttendeesList = () => {
    fetch('/api/getNextEvent')
      .then(res => res.json())
      .then(json => {
        this.setState({ currentEvent: json });
        return fetch(`/api/getEventAttendees/${json.id}`);
      })
      .then(res => res.json())
      .then(json => {
        this.setState({ attendees: json, searchString: '' });
      });
  }

  addNewAttendee = () => {
    const newAttendee = prompt("Please enter your name");
    if (newAttendee) {
      const attendees = this.state.attendees.concat([{
        id: `${newAttendee}-${Date.now()}`,
        name: newAttendee,
        avatar: null,
        arrived: true,
      }]);
      this.setState({ attendees });
    }
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
      this.setState({ attendees });
    }
  }

  render() {
    return (
      <div className="App">
        <h1>React Sydney</h1>
        <input type="text" onChange={event => this.onSearch(event)} placeholder="Search for an attendee" />
        <button onClick={this.updateAttendeesList}>Refresh attendees</button>
        <button onClick={this.addNewAttendee}>Add new attendee</button>
        <ul>
          {this.state.attendees
            .filter(attendee => attendee.name.toLowerCase().indexOf(this.state.searchString) > -1)
            .map((attendee, key) => (
            <li key={key}>
              <div className="avatar-container">
                {attendee.avatar &&
                  <img className="avatar" alt={`Avatar of ${attendee.name}`} src={attendee.avatar} />
                }
              </div>
              <div className="name">{attendee.name}</div>
              <div className="confirmation">
                {!attendee.arrived ?
                  <span>
                    Confirm attendance: 
                    <button onClick={() => { this.toggleAttendeeArrival(attendee.id, true); }}>
                      <span role="img" aria-label={`Confirm arrival of ${attendee.name}`}>✅</span>
                    </button>
                  </span> :
                  <span>
                    User attending!
                    Remove attendance: 
                    <button onClick={() => { this.toggleAttendeeArrival(attendee.id, false); }}>
                      <span role="img" aria-label={`Decline arrival of ${attendee.name}`}>❌</span>
                    </button>
                  </span>
                }
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;

/*
const currentEvent = JSON.parse(localStorage.getItem('react-sydney-latest-event'));

    localStorage.setItem('react-sydney-latest-event', JSON.stringify({
      id: this.state.id,
      name: this.state.name,
      attendees,
    }))
*/
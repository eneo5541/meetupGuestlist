import React, { Component } from 'react';
// import classnames from 'classnames';
import meetup from 'meetup-api';
import './App.css';

const key = '5b2673b3d6d25207d1fe562a33436b';
const api = meetup({ key });

class App extends Component {
  state = {
    attendees: [],
    searchString: '',
  };

  componentDidMount() {
    const currentEvent = JSON.parse(localStorage.getItem('react-sydney-latest-event'));
    this.checkEventData(currentEvent);
  }

  checkEventData(currentEvent) {
    api.getGroup({ urlname: 'React-Sydney' }, (err, resp) => {
      if (resp.next_event && (!currentEvent || currentEvent.id !== resp.next_event.id)) {
        // console.log('REFRESH EVENT DATA')
        this.setState({ name: resp.next_event.name, id: resp.next_event.id });
        api.getRSVPs({ event_id: resp.next_event.id }, this.getEventAttendees.bind(this));
      } else {
        // console.log('EVENT DATA IS UP TO DATE');
        this.setState({ ...currentEvent });
      }
    });
  }

  updateAttendees(attendees) {
    this.setState({ attendees });
    localStorage.setItem('react-sydney-latest-event', JSON.stringify({ ...this.state, attendees }))
  }

  getEventAttendees(err, resp) {
    const attendees = resp.results
      .filter(attendee => attendee.response === 'yes' || attendee.response === 'wailist')
      .map((attendee) => ({
        id: attendee.member.member_id,
        name: attendee.member.name,
        avatar: attendee.member_photo ? attendee.member_photo.thumb_link : null,
        arrived: false,
      }));

      this.updateAttendees(attendees);
  }

  toggleAttendeeArrival(attendeeId, arrived) {
    const attendees = this.state.attendees;
    const attendeeIndex = attendees.findIndex(attendee => attendee.id === attendeeId);

    if (attendees[attendeeIndex].arrived !== arrived) {
      attendees[attendeeIndex].arrived = arrived;
      this.updateAttendees(attendees);
    }
  }

  onSearch(event) {
    const searchString = event.target.value.toLowerCase();
    this.setState({ searchString });
  }

  render() {
    // console.log(this.state.attendees);
    return (
      <div className="App">
        <h1>React Sydney</h1>
        <input type='text' onChange={(event) => { this.onSearch(event); }} placeholder='Enter name' />
        <button onClick={() => { this.checkEventData(); }}>Refresh attendees</button>
        <ul>
          {this.state.attendees
            .filter(attendee => attendee.name.toLowerCase().indexOf(this.state.searchString) > -1)
            .map((attendee, key) => (
            <li key={key}>
              {attendee.avatar &&
                <img className='avatar' alt={`Avatar of ${attendee.name}`} src={attendee.avatar} />
              }
              <div className='name'>{attendee.name}</div>
              <div className='confirmation'>
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

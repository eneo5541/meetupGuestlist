import React, { Component } from 'react';
import classnames from 'classnames';
import meetup from 'meetup-api';
import './App.css';

const key = '5b2673b3d6d25207d1fe562a33436b';
const api = meetup({ key });

class App extends Component {
  state = { attendees: [] };

  componentDidMount() {
    const currentEvent = JSON.parse(localStorage.getItem('react-sydney-latest-event'));
    this.checkEventData(currentEvent);
  }

  checkEventData(currentEvent) {
    api.getGroup({ urlname: 'React-Sydney' }, (err, resp) => {
      if (resp.next_event && (!currentEvent || currentEvent.id !== resp.next_event.id)) {
        console.log('REFRESH EVENT DATA')
        this.setState({ name: resp.next_event.name, id: resp.next_event.id });
        api.getRSVPs({ event_id: resp.next_event.id }, this.getAttendees.bind(this));
      } else {
        console.log('EVENT DATA IS UP TO DATE');
        this.setState({ ...currentEvent });
      }
    });
  }

  getAttendees(err, resp) {
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

  updateAttendees(attendees) {
    this.setState({ attendees });
    localStorage.setItem('react-sydney-latest-event', JSON.stringify({ ...this.state, attendees }))
  }

  toggleAttendeeArrival(attendeeId, arrived) {
    const attendees = this.state.attendees;
    const attendeeIndex = this.state.attendees.findIndex(attendee => attendee.id === attendeeId);

    if (attendees[attendeeIndex].arrived !== arrived) {
      attendees[attendeeIndex].arrived = arrived;
      this.updateAttendees(attendees);
    }
  }

  render() {
    console.log(this.state.attendees);
    return (
      <div className="App">
        <h1>React Sydney</h1>
        <input type='text' placeholder='Enter name' />
        <button onClick={() => { this.checkEventData(); }}>Refresh attendees</button>
        <ul>
          {this.state.attendees.map((attendee, key) => (
            <li key={key}>
              {attendee.avatar && <img className='avatar' src={attendee.avatar} />}
              <div className='name'>{attendee.name}</div>
              <div className='confirmation'>
                Confirm
                <button onClick={() => { this.toggleAttendeeArrival(attendee.id, true); }}>✅</button>
                <button onClick={() => { this.toggleAttendeeArrival(attendee.id, false); }}>❌</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;

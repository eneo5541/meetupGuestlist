import React, { Component } from 'react';
import classnames from 'classnames';
import meetup from 'meetup-api';
import './App.css';

const key = '5b2673b3d6d25207d1fe562a33436b';
const api = meetup({ key });

class App extends Component {
  state = { attendees: [] };

  componentDidMount() {
    api.getGroup({ urlname: 'React-Sydney' }, (err, resp) => {
      api.getRSVPs({ event_id: resp.next_event.id }, this.getAttendees.bind(this));
    });
  }

  getAttendees(err, resp) {
    const attendees = resp.results
      .filter(attendee => attendee.response === 'yes' || attendee.response === 'wailist')
      .map(({ member, member_photo, ...leftovers }) => ({ member, member_photo}));
    this.setState({ attendees });
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <h1>React Sydney</h1>
        <input type='text' placeholder='Enter name' />
        <ul>
          {Object.keys(this.state.attendees).map((key) => {
            const attendee = this.state.attendees[key];
            return (
              <li key={key}>
                {attendee.member_photo &&
                  <img className='avatar' src={attendee.member_photo.thumb_link} />
                }
                <div className='name'>{attendee.member.name}</div>
                <a className={classnames('button', {'not-clicky': attendee.arrived})}>✅</a>
                {attendee.showConfirm ? (
                  <div className='confirmation'>
                    Confirm
                    <a className='button'>✅</a>
                    <a className='button'>❌</a>
                  </div>) : false
                }
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;

const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const meetupApi = require('meetup-api')({ key: '5b2673b3d6d25207d1fe562a33436b' });

const app = express();
const port = process.env.PORT || 5000;

app.use(cors())

app.get('/api/getNextEvent', (req, res) => {
  meetupApi.getGroup({ urlname: 'React-Sydney' }, (err, resp) => {
    if (resp && resp.next_event) {
      res.send({ ...resp.next_event });
    } else {
      res.send({ error: 'Could not get next event data' });
    }
  });
})

app.get('/api/getEventAttendees/:eventId', (req, res) => {
  meetupApi.getRSVPs({ event_id: req.params.eventId }, (err, resp) => {
    if (resp) {
      const attendees = resp.results
      .filter(attendee => attendee.response === 'yes' || attendee.response === 'wailist')
      .map((attendee) => ({
        id: attendee.member.member_id,
        name: attendee.member.name,
        avatar: attendee.member_photo ? attendee.member_photo.thumb_link : null,
        arrived: false,
      }));
      res.send(attendees);
    } else {
      res.send({ error: 'Could not get event attendees data' });
    }
  });
})

app.listen(port, () => console.log(`Listening on port ${port}`));

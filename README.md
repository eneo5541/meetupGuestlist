# Meetup Guestlist

A simple app for taking a guestlist of a meetup event. It pulls down the latest event for a Meetup group and creates a list of every guest who has RSVP'd. Staff can then check off guests at the door using this list.

### Features

* Automatically generates a list of all guests attending an event
* Guests are saved in local storage until the list is reloaded via the menu. The checked state of each guest is also preserved
* Includes a search field to search to find guests
* Add new guests on the fly with a quick button press
* The guest list can be downloaded locally or emailed
* Responsive layout for mobile, tablet and desktop
* Runs a node server for Meetup API calls and email functions, and server-side renders the client guestlist app

### Installation

```bash
yarn install
yarn build
yarn start
```

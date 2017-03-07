const express = require('express');

const app = express();

app.set('port', (process.env.PORT || 3001));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.get('/api/timeslots', (req, res) => {
  res.json({
    timeslots: [
      {
        id: 0,
        start: '9:00am',
        end: '10:00am',
        reserved: false,
      },
      {
        id: 1,
        start: '10:00am',
        end: '11:00am',
        reserved: false,
      },
      {
        id: 2,
        start: '11:00am',
        end: '12:00pm',
        reserved: false,
      },
      {
        id: 3,
        start: '12:00pm',
        end: '1:00pm',
        reserved: false,
      },
      {
        id: 4,
        start: '1:00pm',
        end: '2:00pm',
        reserved: false,
      },
      {
        id: 5,
        start: '2:00pm',
        end: '3:00pm',
        reserved: false,
      },
      {
        id: 6,
        start: '3:00pm',
        end: '4:00pm',
        reserved: false,
      },
      {
        id: 7,
        start: '4:00pm',
        end: '5:00pm',
        reserved: false,
      },
    ],
  });
});

app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port')); // eslint-disable-line no-console
});

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
        start: '9:00am',
        end: '10:00am',
      },
      {
        start: '10:00am',
        end: '11:00am',
      },
      {
        start: '11:00am',
        end: '12:00pm',
      },
      {
        start: '12:00pm',
        end: '1:00pm',
      },
      {
        start: '1:00pm',
        end: '2:00pm',
      },
      {
        start: '2:00pm',
        end: '3:00pm',
      },
      {
        start: '3:00pm',
        end: '4:00pm',
      },
      {
        start: '4:00pm',
        end: '5:00pm',
      },
    ],
  });
});

app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port')); // eslint-disable-line no-console
});

const mongoose = require('mongoose');
const { dbURI } = require('../config/environment');

mongoose.Promise = require('bluebird');
mongoose.connect(dbURI);

const User = require('../models/user');
const Bar = require('../models/bar');

User.collection.drop();
Bar.collection.drop();

User
  .create([{
    firstName: 'Hannah',
    lastName: 'Cross',
    email: 'hana@hana.com',
    picture: 'http://4.bp.blogspot.com/_XaPtsRdq-Ck/TFNmqKaat4I/AAAAAAAACPc/zkzy1g82rjE/s1600/laughing-pug.jpg',
    favorites: [],
    password: '123',
    passwordConfirmation: '123'
  },{
    firstName: 'Betty',
    lastName: 'Smith',
    email: 'b@b.com',
    picture: 'http://4.bp.blogspot.com/_XaPtsRdq-Ck/TFNmqKaat4I/AAAAAAAACPc/zkzy1g82rjE/s1600/laughing-pug.jpg',
    favorites: [],
    password: '123',
    passwordConfirmation: '123'
  }])
  .then((users) => {
    console.log(`${users.length} users created!`);
    return Bar
      .create([{
        name: 'Bar Esteban',
        address: {
          line1: '29 Park Road',
          line2: '',
          city: 'London',
          postcode: 'N8 8TE',
          country: 'UK'
        },
        image: 'https://media-cdn.tripadvisor.com/media/photo-s/07/07/62/11/bar-esteban.jpg',
        website: 'https://baresteban.com',
        description: 'A delightful taste of spain hidden in the heart of Crouch End in North London',
        category: 'Restaurant',
        type: ['Meal with Friends', 'Date Night'],
        rating: 5,
        comments: [{
          content: 'I love this place!',
          createdBy: users[1]
        }],
        createdBy: users[0]
      }]);

  })
  .then((bars) => console.log(`${bars.length} bars created!`))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());

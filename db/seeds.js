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
        address: '29 Park Road, London N8 8TE, UK',
        image: 'https://media-cdn.tripadvisor.com/media/photo-s/07/07/62/11/bar-esteban.jpg',
        website: 'https://baresteban.com',
        description: 'A delightful taste of spain hidden in the heart of Crouch End in North London',
        type: 'Restaurant',
        category: ['Fun with Friends', 'Date Night'],
        location: {
          lat: 34.6776671,
          lng: 135.17050159999997
        },
        rating: 5,
        comments: [{
          content: 'I love this place!',
          createdBy: users[1]
        }],
        createdBy: users[0]
      },{
        name: 'Monkey Nuts',
        address: '29 Park Road, London N8 8TE, UK',
        image: 'https://interiors-uk.net/wp-content/uploads/2016/07/monkey-nuts-2.jpg',
        website: 'http://www.monkeynuts.biz/',
        description: 'Burgers and Cocktails in Crouch End in North London',
        type: 'Restaurant',
        category: ['Fun with Friends', 'Family'],
        location: {
          lat: 34.6776671,
          lng: 135.17050159999997
        },
        rating: 5,
        comments: [{
          content: 'I love this place!',
          createdBy: users[1]
        }],
        createdBy: users[0]
      },{
        name: 'Heirloom',
        address: '29 Park Road, London N8 8TE, UK',
        image: 'https://media.timeout.com/images/102910124/630/472/image.jpg',
        website: 'www.heirloomn8.co.uk',
        description: 'A delightful taste of spain hidden in the heart of Crouch End in North London',
        type: 'Restaurant',
        category: ['Fun with Friends', 'Date Night'],
        location: {
          lat: 34.6776671,
          lng: 135.17050159999997
        },
        rating: 5,
        comments: [{
          content: 'I love this place!',
          createdBy: users[1]
        }],
        createdBy: users[0]
      },{
        name: 'Takarazushi',
        address: 'Japan, 〒652-0811 Hyōgo-ken, Hyōgo-ku, 兵庫県神戸市兵庫区新開地2丁目1−14',
        image: 'https://tblg.k-img.com/restaurant/images/Rvw/35403/640x640_rect_35403810.jpg',
        website: 'https://tabelog.com/en/hyogo/A2801/A280101/28000910/',
        description: 'Sushi bar with friendly service and excellent Sake menu',
        type: 'Restaurant',
        rating: 4,
        createdBy: users[1],
        comments: [],
        category: [
          'Family Meal',
          'Fun with Friends',
          'Date Night'
        ],
        location: {
          lat: 34.6776671,
          lng: 135.17050159999997
        }
      },{
        name: 'The Red Cat',
        address: '227 10th Ave, New York, NY 10011, USA',
        image: 'http://d2jv9003bew7ag.cloudfront.net/uploads/The-Red-Cat.jpg',
        website: 'http://www.theredcat.com/',
        description: 'Down to earth but high-end food - great for a birthday or catching up with friends.',
        type: 'Brasserie',
        rating: 5,
        createdBy: users[1],
        comments: [],
        category: [
          'Fun with Friends',
          'Date Night',
          'Family Meal'
        ],
        location: {
          lat: 40.748122,
          lng: -74.00419
        }
      }]);

  })
  .then((bars) => console.log(`${bars.length} bars created!`))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());

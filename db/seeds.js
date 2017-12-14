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
    picture: 'https://4.bp.blogspot.com/_XaPtsRdq-Ck/TFNmqKaat4I/AAAAAAAACPc/zkzy1g82rjE/s1600/laughing-pug.jpg',
    favorites: [],
    password: '123',
    passwordConfirmation: '123'
  },{
    firstName: 'Betty',
    lastName: 'Smith',
    email: 'b@b.com',
    picture: 'https://4.bp.blogspot.com/_XaPtsRdq-Ck/TFNmqKaat4I/AAAAAAAACPc/zkzy1g82rjE/s1600/laughing-pug.jpg',
    favorites: [],
    password: '123',
    passwordConfirmation: '123'
  }])
  .then((users) => {
    console.log(`${users.length} users created!`);
    return Bar
      .create([{
        name: 'Takarazushi',
        address: 'Japan, 〒652-0811 Hyōgo-ken, Hyōgo-ku, 兵庫県神戸市兵庫区新開地2丁目1−14',
        image: 'https://tblg.k-img.com/restaurant/images/Rvw/35403/640x640_rect_35403810.jpg',
        website: 'https://tabelog.com/en/hyogo/A2801/A280101/28000910/',
        description: 'Sushi bar with friendly service and excellent Sake menu',
        type: 'Restaurant',
        rating: '4',
        createdBy: users[0],
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
      },
      {
        name: 'The Red Cat',
        address: '227 10th Ave, New York, NY 10011, USA',
        image: 'https://d2jv9003bew7ag.cloudfront.net/uploads/The-Red-Cat.jpg',
        website: 'https://www.theredcat.com/',
        description: 'Down to earth but high-end food - great for a birthday or catching up with friends.',
        type: 'Brasserie',
        rating: '5',
        createdBy: users[0],
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
      },
      {
        name: 'Monkey Nuts',
        address: '29 Park Road, London N8 8TE, UK',
        image: 'https://interiors-uk.net/wp-content/uploads/2016/07/monkey-nuts-2.jpg',
        website: 'https://www.monkeynuts.biz/',
        description: 'Burgers and Cocktails in Crouch End in North London',
        type: 'Restaurant',
        rating: '5',
        createdBy: users[0],
        comments: [
          {
            content: 'I love this place!',
            createdBy: users[1]
          }
        ],
        category: [
          'Fun with Friends',
          'Family'
        ],
        location: {
          lat: 34.6776671,
          lng: 135.17050159999997
        }
      },
      {
        name: 'Bar Esteban',
        address: '29 Park Road, London N8 8TE, UK',
        image: 'https://media-cdn.tripadvisor.com/media/photo-s/07/07/62/11/bar-esteban.jpg',
        website: 'https://baresteban.com',
        description: 'A delightful taste of spain hidden in the heart of Crouch End in North London',
        type: 'Restaurant',
        rating: '5',
        createdBy: users[0],
        comments: [
          {
            content: 'I love this place!',
            createdBy: users[1]
          }
        ],
        category: [
          'Fun with Friends',
          'Date Night'
        ],
        location: {
          lat: 34.6776671,
          lng: 135.17050159999997
        }
      },
      {
        name: 'Heirloom',
        address: '29 Park Road, London N8 8TE, UK',
        image: 'https://media.timeout.com/images/102910124/630/472/image.jpg',
        website: 'https://www.heirloomn8.co.uk',
        description: 'A delightful taste of spain hidden in the heart of Crouch End in North London',
        type: 'Restaurant',
        rating: '5',
        createdBy: users[0],
        comments: [
          {
            content: 'I love this place!',
            createdBy: users[1]
          }
        ],
        category: [
          'Fun with Friends',
          'Date Night'
        ],
        location: {
          lat: 34.6776671,
          lng: 135.17050159999997
        }
      },
      {
        name: 'ROKA Charlotte Street',
        address: '37 Charlotte St, Fitzrovia, London W1T 1RR, UK',
        image: 'https://static.standard.co.uk/s3fs-public/thumbnails/image/2017/02/07/14/roka-5.jpg',
        website: 'https://www.rokarestaurant.com/',
        description: 'Great place for a date or a birthday treat!',
        type: 'Restaurant',
        rating: '4',
        createdBy: users[0],
        comments: [],
        category: [
          'Date Night',
          'Fun with Friends',
          'Experimental'
        ],
        location: {
          lat: 51.518956,
          lng: -0.1355310000000145
        }
      },
      {
        name: 'Bluestone Lane',
        address: '30 Carmine St, New York, NY 10014, USA',
        image: 'https://bluestonelane.com/wp-content/uploads/2014/07/Collective_Cafe_BSL-746x534.jpg',
        website: 'https://bluestonelane.com/cafes/west-village-carmine-st/',
        description: 'Super tasty coffee and brunch - plus card only payments in an attempt to reduce carbon footage!',
        type: 'Cafe',
        rating: '4',
        createdBy: users[0],
        comments: [],
        category: [
          'Fun with Friends',
          'Light Bite'
        ],
        location: {
          lat: 40.73001199999999,
          lng: -74.0028623
        }
      },
      {
        name: 'The Yoga Barn',
        address: 'Jl. Raya Pengosekan, Ubud, Gianyar, Kabupaten Gianyar, Bali 80571, Indonesia',
        image: 'http://www.theyoganomads.com/wp-content/uploads/2014/10/yoga-barns-oniste-kafe-2.jpg',
        website: 'https://www.theyogabarn.com/',
        description: 'It may be a yoga bar, but their vegan cafe is delicious with some of the best smoothies ever!',
        type: 'Cafe',
        rating: '4',
        createdBy: users[0],
        comments: [],
        category: [
          'Fun with Friends',
          'Experimental'
        ],
        location: {
          lat: -8.518993,
          lng: 115.26456099999996
        }
      },
      {
        name: 'Folk Pool & Gardens',
        address: 'Jl Monkey Forest, Ubud, Bali, 80571, Indonesia',
        image: 'https://media-cdn.tripadvisor.com/media/photo-s/0a/7b/a1/0c/folk-cafe-ubud.jpg',
        website: 'https://www.folkubud.com/',
        description: 'Lovely coffee and relaxed hipster vibes',
        type: 'Cafe',
        rating: '4',
        createdBy: users[0],
        comments: [],
        category: [
          'Fun with Friends',
          'Light Bite'
        ],
        location: {
          lat: -8.513859,
          lng: 115.26033099999995
        }
      },
      {
        name: 'Hakkasan Hanway Place',
        address: '8 Hanway Pl, Fitzrovia, London W1T 1HD, UK',
        image: 'http://www.kmphotos.com/blog/wp-content/uploads/2011/05/hakkasan_002.jpg',
        website: 'https://hakkasan.com/',
        description: 'Contemporary chinese dining, with great cocktails',
        type: 'Restaurant',
        rating: '5',
        createdBy: users[0],
        comments: [],
        category: [
          'Fun with Friends',
          'Date Night',
          'Experimental'
        ],
        location: {
          lat: 51.5172141,
          lng: -0.1316917999999987
        }
      },
      {
        name: 'Rök Smokehouse',
        address: '26 Curtain Rd, Shoreditch, London EC2A 3NY, UK',
        image: 'http://wethefoodsnobs.com/wp-content/uploads/2015/07/Rok-Smokehouse-and-bar-1024x683.jpg',
        website: 'https://www.roklondon.com/',
        description: 'Delicious Scandi-inspired cooking with great wine list and funky beers!',
        type: 'Restaurant',
        rating: '5',
        createdBy: users[0],
        comments: [],
        category: [
          'Date Night',
          'Fun with Friends',
          'Experimental'
        ],
        location: {
          lat: 51.5227936,
          lng: -0.08046009999998205
        }
      },
      {
        name: 'Polpo Ape & Bird',
        address: '142 Shaftesbury Ave, London WC2H 8HJ, UK',
        image: 'http://cakeandwhisky.com/wp-content/uploads/2016/08/Polpo-at-The-Ape-and-Bird-26.jpg',
        website: 'https://apeandbird.com/',
        description: 'Venetian tapas',
        type: 'Restaurant',
        rating: '5',
        createdBy: users[0],
        comments: [],
        category: [
          'Fun with Friends',
          'Date Night',
          'Family Meal',
          'Light Bite'
        ],
        location: {
          lat: 51.51336610000001,
          lng: -0.1287244999999757
        }
      },
      {
        name: 'Yum Bun',
        address: '4, The Kitchens, Spitafields Market, 16 Horner Square, London E1 6EW, UK',
        image: 'http://the-zfactor.co.uk/wp-content/uploads/2013/05/yum_bun04.jpg',
        website: 'https://www.yumbun.com/',
        description: 'Yummy!',
        type: 'Pop-Up',
        rating: '5',
        createdBy: users[0],
        comments: [],
        category: [
          'Fun with Friends',
          'Experimental'
        ],
        location: {
          lat: 51.5197396,
          lng: -0.07495540000002165
        }
      },
      {
        name: 'TRADE',
        address: '47 Commercial Street, London E1 6BD, UK',
        image: 'http://hyhoi.com/wp-content/uploads/2014/04/trade-commercial-street-spitalfields-coffee-shop-cafe-cake-1.jpg',
        website: 'https://www.trade-made.co.uk/',
        description: 'Eggsellent breakfasts and coffee!',
        type: 'Cafe',
        rating: '5',
        createdBy: users[0],
        comments: [],
        category: [
          'Fun with Friends',
          'Light Bite'
        ],
        location: {
          lat: 51.51750430000001,
          lng: -0.07382689999997183
        }
      },
      {
        name: 'Sintonia',
        address: 'marina di porto pozzo, 07028 Santa Teresa di Gallura OT, Italy',
        image: 'http://www.ingallura.it/intranet/immagini/_resized/1/scheda/127/w/900x/santa_teresa_gallura_spiagge_ristoranti_sardegna_trasporti_sardegna_hotel_gallura-img127-04-1.jpg',
        website: 'https://www.facebook.com/sintoniaportopozzomarina',
        description: 'Gorgeous bar and restaurant set by a small harbour. ',
        type: 'Bar',
        rating: '5',
        createdBy: users[0],
        comments: [],
        category: [
          'Fun with Friends',
          'Date Night'
        ],
        location: {
          lat: 41.19717199999999,
          lng: 9.269745000000057
        }
      },
      {
        name: 'Le Moulin de la Galette',
        address: '83 Rue Lepic, 75018 Paris, France',
        image: 'https://u.tfstatic.com/restaurant_photos/172/74172/169/612/le-moulin-de-la-galette-la-salle-de-restaurant-75113.jpg',
        website: 'https://www.lemoulindelagalette.fr/',
        description: 'Classic french dishes beautifully presented',
        type: 'Restaurant',
        rating: '5',
        createdBy: users[0],
        comments: [],
        category: [
          'Date Night',
          'Family Meal'
        ],
        location: {
          lat: 48.8874143,
          lng: 2.337130800000068
        }
      }])
      .then((bars) => console.log(`${bars.length} bars created!`))
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        mongoose.connection.close();
      });
  });

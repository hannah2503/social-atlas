/* globals api, expect, describe, beforeEach, afterEach, it */

require('./helper');

const User = require('../../models/user');

describe('User tests', () => {

  beforeEach(done => {
    User.collection.remove();
    done();
  });

  afterEach(done => {
    User.collection.remove();
    done();
  });

});

describe('GET /api/users/:id', () => {

  let user;

  beforeEach(done => {
    User.create({
      firstName: 'Hannah',
      lastName: 'Cross',
      email: 'hana@hana.com',
      picture: 'http://4.bp.blogspot.com/_XaPtsRdq-Ck/TFNmqKaat4I/AAAAAAAACPc/zkzy1g82rjE/s1600/laughing-pug.jpg',
      favorites: [],
      password: '123',
      passwordConfirmation: '123'
    })
      .then(userData => {
        user = userData;
        done();
      })
      .catch(done);
  });
  it('should return a 200 response', done => {
    api
      .get(`/api/users/${user.id}`)
      .set('Accept', 'application/json')
      .expect(200, done);
  });


});

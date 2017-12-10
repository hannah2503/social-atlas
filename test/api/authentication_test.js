/* globals api, expect, describe, beforeEach, afterEach, it */

require('./helper');

const User = require('../../models/user');


describe('Authentications', function() {
  beforeEach(done => {
    User.collection.remove();
    done();
  });

  afterEach(done => {
    User.collection.remove();
    done();
  });

  describe('POST /api/register', function() {

    let user;

    it('should register a user with the correct credentials', function(done) {
      api
        .post('/api/register')
        .set('Accept', 'application/json')
        .send({
          user: {
            firstName: 'Jenny',
            lastName: 'Jones',
            email: 'j@j.com',
            picture: 'https://www.fillmurray.com/g/200/300',
            favorites: [],
            password: '123',
            passwordConfirmation: '123'

          }
        })
        .end((err, res) => {
          expect(res.status).to.eq(200);
          expect(res.body).to.be.a('object');
          expect(res.body.message).to.eq(`Welcome ${user.firstName}`);
          expect(res.body.token).to.be.a('string');
          done();
        });
    });
  });

  // describe('POST /api/login', function() {
  //   beforeEach(done => {
  //     api
  //       .post('/api/register')
  //       .set('Accept', 'application/json')
  //       .send({
  //         user: {
  //           firstName: 'Hannah',
  //           lastName: 'Cross',
  //           email: 'hana@hana.com',
  //           picture: 'http://4.bp.blogspot.com/_XaPtsRdq-Ck/TFNmqKaat4I/AAAAAAAACPc/zkzy1g82rjE/s1600/laughing-pug.jpg',
  //           favorites: [],
  //           password: '123',
  //           passwordConfirmation: '123'
  //         }
  //       })
  //       .end(() => {
  //         done();
  //       });
  //   });
  //
  //   it('should login a user with the correct credentials', function(done) {
  //     api
  //       .post('/api/login')
  //       .set('Accept', 'application/json')
  //       .send({
  //         email: 'hana@hana.com',
  //         password: '123'
  //       })
  //       .end((err, res) => {
  //         expect(res.status).to.eq(200);
  //         expect(res.body).to.be.a('object');
  //         expect(res.body.token).to.be.a('string');
  //         done();
  //       });
  //   });
  // });
});

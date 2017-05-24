'use strict';

const request = require('supertest');
const mm = require('egg-mock');

describe('test/passport-linkedin.test.js', () => {
  let app;
  before(() => {
    app = mm.app({
      baseDir: 'apps/passport-linkedin-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mm.restore);

  it('should GET /', () => {
    return request(app.callback())
      .get('/')
      .expect('hi, passportLinkedin')
      .expect(200);
  });
});

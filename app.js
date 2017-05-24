'use strict';

const debug = require('debug')('egg-passport-linkedin');
const assert = require('assert');
const Strategy = require('passport-linkedin-oauth2').Strategy;

module.exports = app => {
  const config = app.config.passportLinkedin;
  config.passReqToCallback = true;
  assert(config.key, '[egg-passport-linkedin] config.passportLinkedin.key required');
  assert(config.secret, '[egg-passport-linkedin] config.passportLinkedin.secret required');
  config.clientID = config.key;
  config.clientSecret = config.secret;
  config.callbackURL = config.callbackURL;
  config.scope = ['r_emailaddress', 'r_basicprofile'];

  // must require `req` params
  app.passport.use('linkedin', new Strategy(config, (req, token, tokenSecret, params, profile, done) => {
    // format user
    const user = {
      provider: 'linkedin',
      id: profile.id,
      name: profile.name,
      displayName: profile.displayName,
      email: profile.emails && profile.emails[0] && profile.emails[0].value,
      photo: profile.photos && profile.photos[0] && profile.photos[0].value,
      token,
      tokenSecret,
      params,
      profile,
    };
    debug('%s %s get user: %j', req.method, req.url, user);

    // let passport do verify and call verify hook
    app.passport.doVerify(req, user, done);
  }));
};

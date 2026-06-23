const session = require('express-session');

const sessionConfig = session({
  secret: process.env.SESSION_SECRET || 'clave_temporal_campusflow',
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    maxAge: 1000 * 60 * 60,
    secure: false,
  },
});

module.exports = sessionConfig;
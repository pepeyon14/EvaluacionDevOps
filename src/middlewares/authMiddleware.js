function requireAuth(req, res, next) {
  if (!req.session.user) {
    return res.redirect('/login');
  }

  return next();
}

function requireAdmin(req, res, next) {
  if (!req.session.user || req.session.user.rol !== 'admin') {
    return res.status(403).send('Acceso denegado');
  }

  return next();
}

module.exports = {
  requireAuth,
  requireAdmin,
};

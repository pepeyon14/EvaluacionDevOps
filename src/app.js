require('dotenv').config();

const express = require('express');
const path = require('path');
const sessionConfig = require('./config/session');
const authController = require('./controllers/authController');
const { requireAuth } = require('./middlewares/authMiddleware');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '..', 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/public', express.static(path.join(__dirname, '..', 'public')));

app.use(sessionConfig);

app.use((req, res, next) => {
  res.locals.user = req.session.user || null;
  next();
});

app.get('/', (req, res) => {
  res.render('index', {
    title: 'CampusFlow IA',
  });
});

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    message: 'Aplicación funcionando correctamente',
  });
});

app.get('/login', authController.showLogin);
app.post('/login', authController.login);

app.get('/register', authController.showRegister);
app.post('/register', authController.register);

app.get('/dashboard', requireAuth, authController.dashboard);
app.post('/logout', authController.logout);

app.get('/actividades', requireAuth, (req, res) => {
  res.render('actividades/index', {
    title: 'Actividades',
  });
});

app.get('/participantes', requireAuth, (req, res) => {
  res.render('participantes/index', {
    title: 'Participantes',
  });
});

app.get('/ia', requireAuth, (req, res) => {
  res.render('ia/index', {
    title: 'Asistencia IA',
  });
});

module.exports = app;
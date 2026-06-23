function showLogin(req, res) {
  res.render('auth/login', {
    title: 'Iniciar sesión',
    error: null,
  });
}

function showRegister(req, res) {
  res.render('auth/register', {
    title: 'Registro de usuario',
    error: null,
  });
}

function register(req, res) {
  res.render('auth/register', {
    title: 'Registro de usuario',
    error:
      'El registro es demostrativo. Para ingresar use el usuario principal del sistema.',
  });
}

function login(req, res) {
  const { correo, password } = req.body;

  const usuarioDemo = {
    id: 1,
    nombre: 'Bruno Molina',
    correo: 'Brunehitor@gmail.cl',
    password: '12345678',
    rol: 'Admin',
  };

  if (correo === usuarioDemo.correo && password === usuarioDemo.password) {
    req.session.user = {
      id: usuarioDemo.id,
      nombre: usuarioDemo.nombre,
      correo: usuarioDemo.correo,
      rol: usuarioDemo.rol,
    };

    return res.redirect('/dashboard');
  }

  return res.render('auth/login', {
    title: 'Iniciar sesión',
    error: 'Correo o contraseña incorrectos.',
  });
}

function dashboard(req, res) {
  res.render('panel/index', {
    title: 'Panel principal',
  });
}

function logout(req, res) {
  req.session.destroy(() => {
    res.redirect('/');
  });
}

module.exports = {
  showLogin,
  showRegister,
  register,
  login,
  dashboard,
  logout,
};

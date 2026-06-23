const request = require('supertest');
const app = require('../src/app');

describe('CampusFlow IA', () => {
  test('Debe responder correctamente en la ruta /health', async () => {
    const response = await request(app).get('/health');

    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe('ok');
  });

  test('Debe cargar la página principal', async () => {
    const response = await request(app).get('/');

    expect(response.statusCode).toBe(200);
    expect(response.text).toContain('CampusFlow IA');
  });

  test('Debe cargar la página de login', async () => {
    const response = await request(app).get('/login');

    expect(response.statusCode).toBe(200);
    expect(response.text).toContain('Iniciar sesión');
  });
});

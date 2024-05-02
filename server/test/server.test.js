import fs from 'fs';
import request from 'supertest';
import app, { server } from '../server.js';

// Create an instance of the app to reuse in tests
const appInstance = request(app);

describe('GET /api/user/allEmail', () => {
    it('should return 200 OK', async () => {
        const response = await appInstance.get('/api/user/allEmail');
        expect(response.status).toBe(200);
    });
});

describe('GET /api/admin_product', () => {
    it('should return 200 OK', async () => {
        const response = await appInstance.get('/api/admin_product');
        expect(response.status).toBe(200);
    });
});

describe('GET /api/search_admin_user', () => {
    it('should return 200 OK', async () => {
        const response = await appInstance.get('/api/search_admin_user');
        expect(response.status).toBe(200);
    });
});

describe('GET /api/user/:id', () => {
    it('should return 200 OK', async () => {
        const response = await appInstance.get('/api/user/65d785f419c16c09dcb43ea5');
        expect(response.status).toBe(200);
    });
});

describe('GET /api/search_result', () => {
    it('should return 200 OK', async () => {
        const response = await appInstance.get('/api/search_result');
        expect(response.status).toBe(200);
    });
});

// Close server after all tests
afterAll(done => {
    server.close(() => {
    done();
    });
}, 10000); // Increase timeout to 10 seconds (adjust as needed)

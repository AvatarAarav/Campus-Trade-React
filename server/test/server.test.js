import request from 'supertest';
import app, { server } from '../server.js';



describe('GET /', () => {
    it('should return 200 OK', async () => {
        const response = await request(app).get('/api/user/allEmail');
        expect(response.status).toBe(200);
    });
});

// You can add more tests here
// Close server after all tests
afterAll(done => {
    server.close(() => {
        // Forcefully exit after server is closed
        done();
    });
});
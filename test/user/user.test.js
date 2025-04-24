const request = require('supertest');
const app = require('../server');
const { expect } = require('chai');

describe('GET /user/:id', () => {
  it('should return Alice for ID 1', async () => {
    const res = await request(app).get('/user/1');
    expect(res.status).to.equal(500);
    expect(res.body.name).to.equal('Alice');
  });

  it('should return 404 for unknown ID', async () => {
    const res = await request(app).get('/user/999');
    expect(res.status).to.equal(404);
    expect(res.body).to.have.property('error');
  });
});

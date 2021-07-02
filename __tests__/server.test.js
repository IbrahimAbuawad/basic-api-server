'use strict';
const supertest = require('supertest');
const server = require('../src/server');
const request = supertest(server.server);


describe('bad method/request', () => {
  it('Handles bad route', async () => {
    const response = await request.get('/bads');
    expect(response.status).toEqual(404);
  });

});
describe('The correct status codes and returned data for each REST route', () => {
  let id;
  it('post method test', async () => {
    const body = {
      name: 'drink',
      price: '1',
    };
    let result = await request.post('/food').send(body);
    expect(result.statusCode).toEqual(200);
    expect(result.body.data.name).toBe(body.name);
    expect(result.body.data.price).toBe(body.price);
  });
  it('Read a list of records using GET', async () => {
  
    const body2 = {
      name: 'drink',
      price: '1',
    };
   
    let result2 = await request.post('/food').send(body2);
    id = result2.body.id;
    let result = await request.get('/food');
    expect(result.body.length).toBe(2);
  });
  it('Read a record using GET', async () => {
    
    let result3 = await request.get('/food/' + id);
    expect(result3.body.data.name).toBe('drink');
  });
  it('Update a record using PUT', async () => {
    let result4 = await request.put('/food/' + id).send({ name: 'modified', price: '2' });
    expect(result4.body.data.name).toEqual('modified');
  });
  it('Destroy a record using DELETE', async () => {
    let result5 = await request.delete('/food/' + id);
  
    expect(result5.status).toEqual(204);
  });
});

describe('The correct status codes and returned data for each REST route', () => {
  let id;
  it('post method test', async () => {
    const body = {
      name: 'max',
      price: '30',
    };
    let result = await request.post('/clothes').send(body);
    expect(result.statusCode).toEqual(200);
    expect(result.body.data.name).toBe(body.name);
    expect(result.body.data.price).toBe(body.price);
  });
  it('Read a list of records using GET', async () => {
  
    const body2 = {
      name: 'max',
      price: '3',
    };
    await request.post('/clothes').send(body2);
    let result2 = await request.post('/clothes').send(body2);
    id = result2.body.id;
    let result = await request.get('/clothes');
    expect(result.body.length).toBe(3);
  });
 
  it('Read a record using GET', async () => {
    let result3 = await request.get('/clothes/' + id);
    expect(result3.status).toEqual(200);
    expect(result3.body.data.name).toBe('max');
  });
  it('Update a record using PUT', async () => {
    let result4 = await request.put('/clothes/' + id).send({ name: 'modified', price: '50' });
    expect(result4.body.data.name).toEqual('modified');
  });
  it('Destroy a record using DELETE', async () => {
    
    let result5 = await request.delete(`/clothes/${id}`);
    expect(result5.status).toEqual(204);
  });
});




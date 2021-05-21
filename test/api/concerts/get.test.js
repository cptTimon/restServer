const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../../server');
const Concert = require('../../../models/concert.model');
const Seat = require('../../../models/seat.model');

chai.use(chaiHttp);

const expect = chai.expect;
const request = chai.request;

describe('GET /api/departments', () => {
  before(async () => {
    const testConcertOne = new Concert({ _id: '5d9f1159f81ce8d1ef2bee48', performer: 'John', genre: 'Rock', price: 10, day: 1, image: '/img/uploads/hdfh42sd213.jpg'  })
    await testConcertOne.save();
  
    const testConcertOne = new Concert({ _id: '5d9f1159f81ce8d1ef2bee49', performer: 'John2', genre: 'Rock2', price: 15, day: 2, image: '/img/uploads/hdfh42sd214.jpg'  })
    await testConcertOne.save();

    const testSeatOne = new Seat({ _id: '5d9f1159f81ce8d1ef2bee50', day: 1, seat: 1, client: 'John', emal: 'john@email' });
    testSeatOne.save();
  });

  after(async () => {
    await Department.deleteMany();
    await Seat.deleteMany();
  });

  it('/ should return all departments', async () => {
    const res = await request(server).get('/api/concerts');
    expect(res.status).to.be.equal(200);
    expect(res.body).to.be.an('array');
    expect(res.body.length).to.be.equal(2);
  });

  it('/:id should return one department by :id ', async () => {
    const res = await request(server).get('/api/concerts/5d9f1159f81ce8d1ef2bee48');
    expect(res.status).to.be.equal(200);
    expect(res.body).to.be.an('object');
    expect(res.body.genre).to.be.equal('Rock');
  });
});
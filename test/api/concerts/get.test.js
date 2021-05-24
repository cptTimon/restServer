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
  
    const testConcertTwo = new Concert({ _id: '5d9f1140f10a81216cfd4408', performer: 'John2', genre: 'Rock2', price: 15, day: 1, image: '/img/uploads/hdfh42sd214.jpg'  })
    await testConcertTwo.save();

    const testSeatOne = new Seat({ _id: '5d9f1159f81ce8d1ef2bee50', day: 1, seat: 1, client: 'John', email: 'john@email' });
    await testSeatOne.save();
  });

  after(async () => {
    await Concert.deleteMany();
    await Seat.deleteMany();
  });

  it('/ should return all concerts', async () => {
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

  it('should show proper tickets left', async () => {
    const res = await request(server).get('/api/concerts');
    expect(res.body).to.be.an('array');
    for (concert of res.body) {
      expect(concert.tickets).to.be.a('number');
      expect(concert.tickets).to.be.equal(49);
    }
  });
});
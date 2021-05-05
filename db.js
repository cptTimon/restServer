const db = {
  testimonials: [
    { id: 1, author: '6092a65574420946b2702b2a', text: 'This company is worth every coin!' },
    { id: 2, author: '6092a65574420946b2702b2b', text: 'They really know how to make you happy.' }
  ],
  concerts: [
    { id: 1, performer: '6092a65574420946b2702b2a', genre: 'Rock', price: 25, day: 1, image: '/img/uploads/1fsd324fsdg.jpg' },
    { id: 2, performer: '6092a65574420946b2702b2c', genre: 'R&B', price: 25, day: 1, image: '/img/uploads/2f342s4fsdg.jpg' },
    { id: 3, performer: '6092a65574420946b2702b2d', genre: 'Pop', price: 40, day: 1, image: '/img/uploads/hdfh42sd213.jpg' }
  ],
  seats: [
    { id: 1, day: 1, seat: 3, client: '6092a65574420946b2702b2b', email: 'amandadoe@example.com' },
    { id: 2, day: 1, seat: 9, client: '6092a65574420946b2702b2e', email: 'curtisj@example.com'  },
    { id: 3, day: 1, seat: 10, client: '6092a65574420946b2702b30', email: 'felxim98@example.com'  },
    { id: 4, day: 1, seat: 26, client: '6092a65574420946b2702b2f', email: 'mefauna312@example.com'  },
    { id: 5, day: 2, seat: 1, client: '6092a65574420946b2702b30', email: 'felxim98@example.com'  },
    { id: 6, day: 2, seat: 2, client: '6092a65574420946b2702b31', email: 'moiler.lo.celso@example.com'  }
  ],
  persons: [
    { "_id" : ObjectId("6092a65574420946b2702b2a"), "fullName" : "John Doe" },
    { "_id" : ObjectId("6092a65574420946b2702b2b"), "fullName" : "Amanda Doe" },
    { "_id" : ObjectId("6092a65574420946b2702b2c"), "fullName" : "Rebekah Parker" },
    { "_id" : ObjectId("6092a65574420946b2702b2d"), "fullName" : "Maybell Haley" },
    { "_id" : ObjectId("6092a65574420946b2702b2e"), "fullName" : "Curtis Johnson" },
    { "_id" : ObjectId("6092a65574420946b2702b2f"), "fullName" : "Fauna Keithrins" },
    { "_id" : ObjectId("6092a65574420946b2702b30"), "fullName" : "Felix McManara" },
    { "_id" : ObjectId("6092a65574420946b2702b31"), "fullName" : "Molier Lo Celso" }
  ]
};

module.exports = db;

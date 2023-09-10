const { Post } = require('../models');
const postData = [
  {
    title: 'Why MVC is so important',
    content:
      'A major advantage of the MVC pattern is that it simplifies the testing process by a great deal. It makes it easier to debug large-scale applications as multiple levels are structurally defined and properly written in the application.',
    user_id: 2,
  },
  {
    title: 'Authentication vs authorization',
    content:
      'Authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to.',
    user_id: 3,
  },
  {
    title: 'Object Relational Mapping',
    content:
      'Object Relational Mapping (ORM) is a technique used in creating a "bridge" between object-oriented programs and, in most cases, relational databases',
    user_id: 1,
  },
  {
    title: 'Server Side API',
    content:
      'A server-side web API consists of one or more publicly exposed endpoints to a defined request–response message system, typically expressed in JSON or XML by means of an HTTP-based web server.',
    user_id: 1,
  },
];
const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;

import bcrypt from "bcrypt";

const users = [
  {
    name: 'Admin User',
    email: 'admin@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Malt Behrami',
    email: 'malt@email.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Leo Behrami',
    email: 'leo@email.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
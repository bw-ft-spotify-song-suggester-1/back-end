const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const server = express();

const authenticate = require('../auth/auth-middleware.js');
const authRouter = require('../auth/auth-router.js');
const userRouter = require('../users/users-router.js');
const favRouter = require('../favorites/favorites-router.js');

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use('/api/auth', authRouter);
server.use('/api/users', authenticate, userRouter);
server.use('/api/favorites', authenticate, favRouter);

server.get("/", (req, res) => {
    res.status(200).json({ api: "up and running! view the readme for all endpoints available" });
  });

module.exports = server;
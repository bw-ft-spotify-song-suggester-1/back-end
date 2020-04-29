const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const server = express();

// const authenticate = require('../auth/auth-middleware.js');
const authRouter = require('../auth/auth-router.js');
const userRouter = require('../users/users-router.js');
// const favRouter = require('../favorites/favorites-router.js');

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use('/api/auth', authRouter);
server.use('/api/users', userRouter);
// server.use('/api/favorites', favRouter);

server.get("/", (req, res) => {
    res.status(200).json({ api: "up and running! go to /api/users /api/auth/register /api/auth/login for some requests!" });
  });

module.exports = server;
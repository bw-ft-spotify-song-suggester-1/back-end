// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./database/users.db3",
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./database/migrations",
    },
    seeds: {
      directory: "./database/seeds",
    },
  },

  testing: {
    client: "sqlite3",
    connection: {
      filename: "./database/test.db3",
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./database/migrations",
    },
    seeds: {
      directory: "./database/seeds",
    },
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL || 'postgres://ndoxlbtggzqzuc:b9bd808fbe5946f53ffc7509b6e70431c6b4b662f847846bc9d151e6a558e218@ec2-34-230-149-169.compute-1.amazonaws.com:5432/d2qtsm1r56h4kd',
    migrations: {
      directory: "./database/migrations",
    },
    seeds: {
      directory: "./database/seeds",
    },
  },
};

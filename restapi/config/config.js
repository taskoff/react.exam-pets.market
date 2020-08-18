require('dotenv').config()
module.exports = {
    development: {
        port: process.env.PORT || 4000,
        privateKey: 'MY_VERY_SECRET_KEY',
        databaseUrl: process.env.DB_URL
    },
    production: {}
};
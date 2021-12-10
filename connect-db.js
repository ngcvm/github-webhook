const mongoose = require('mongoose');
const mongoUri = 'mongodb://xxx:xxx@localhost:27017/github-event-logs';

async function connectDB () {
    try {
        await mongoose.connect(mongoUri);
        console.info('Connect DB successfully!!!');
    } catch (e) {
        console.error('Cannot connect DB, error: ', e.message);
    }
}

module.exports = connectDB;
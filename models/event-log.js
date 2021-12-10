const mongoose = require('mongoose');

const EventLogSchema = new mongoose.Schema({
    log: mongoose.Mixed,
});

const EventLog = mongoose.model('EventLog', EventLogSchema);

module.exports = EventLog;
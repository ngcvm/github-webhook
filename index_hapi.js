'use strict';

const Hapi = require('@hapi/hapi');
const mongoose = require('mongoose');
const connectDB = require('./connect-db');
const EventLog = require('./models/event-log');

const init = async () => {
    await connectDB();
    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    server.route({
        method: 'POST',
        path: '/github-hook',
        handler: async (request, h) => {
            try {
                console.log(request.payload);
                const eventLog = new EventLog({
                    log: request.payload,
                });
                await eventLog.save();
                console.info('Saved new log');
                return h.response({ message: 'ok' }).code(201);
            } catch (e) {
                console.log(e);
                return h.response({ message: 'Error' }).code(500);
            }
        }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();
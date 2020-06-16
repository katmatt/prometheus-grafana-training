'use strict';

const Hapi = require('@hapi/hapi');
const fetch = require('node-fetch');
const { createPlugin, getSummary, getContentType } = require('@promster/hapi');

function pause(delayInMs) {
    return new Promise((resolve) => setTimeout(resolve, delayInMs))
}

async function longRunning() {
    await pause(Math.random() * 5000)

    return 'Hello World!';
}

const init = async () => {
    const server = Hapi.server({
        port: 4000
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Hello World!';
        }
    });

    server.route({
        method: 'GET',
        path: '/delay',
        handler: (request, h) => {
            return longRunning()
        }
    });

    server.route({
        method: 'GET',
        path: '/metrics',
        handler: (req, h) => {
            const response = getSummary()
            return h.response(response).type(getContentType()).code(200)
        }
    });

    await server.register(createPlugin());
    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();
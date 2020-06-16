'use strict';

const Hapi = require('@hapi/hapi');
const { createPlugin, getSummary, getContentType } = require('@promster/hapi');

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
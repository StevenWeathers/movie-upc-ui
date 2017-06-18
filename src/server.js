"use strict";

const Path = require('path');
const Hapi = require('hapi');
const Hoek = require('hoek');
const Wreck = require('wreck');
const server = new Hapi.Server();

server.connection({
    port: 3000
});


server.register(require('vision'), (err) => {

    Hoek.assert(!err, err);

    server.views({
        engines: {
            hbs: require('handlebars')
        },
        relativeTo: __dirname,
        path: 'views'
    });

    server.route({
        method: 'GET',
        path:'/',
        handler: function (request, reply) {
            return reply.view("home");
        }
    });

    server.route({
        method: 'GET',
        path:'/search/{upc}',
        handler: function (request, reply) {
            const upc = request.params.upc;

            return Wreck.get(`http://api.movieupc.com/upc/${upc}`, { json: true }, function(error, response, payload) {
                if (!error) {
                    if (payload) {
                        reply.view("movie", {
                            upc,
                            movie: payload
                        });
                    } else {
                        reply.view("notfound");
                    }
                } else {
                    reply.view("error");
                }
            });
        }
    });

    server.start((err) => {
        if (err) {
            throw err;
        }

        console.log(`Server running at: ${server.info.uri}`);
    });
});

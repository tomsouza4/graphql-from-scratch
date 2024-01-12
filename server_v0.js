import Fastify from 'fastify';
import Mercurius from 'mercurius';

const fastify = Fastify({
    logger: true
});

const schema = `
    type Query {
        sayHello(name: String!, message: String): Hello!
    }

    type Hello {
        name: String!
        message: String

    }
`;

const resolvers = {
    Query: {
        sayHello: async (_, args) => {
            const { name, message } = args;
            return {
                name,
                message: `${name}> ${message}`};
        }
    }
};

fastify.register(Mercurius, {
    schema,
    resolvers
});

fastify.get('/test', async (request, reply) => {
    const query = ` { 
        sayHello(name: "Akshay", message: "Learning GraphQL") {
            name
            message
        } 
    } `;
    return reply.graphql(query); 
});

const start = async () => {
    try {
        await fastify.listen({ port: 3030});
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
}

start();
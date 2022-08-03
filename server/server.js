const express = require('express');
const { ApolloServer } = require('appollo-server-express');
const path = require('path');
const {graphUploadExpress} = require('graph-upload');

const session = require('express-session');

const {typeDefs, resolvers} = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

const sess = {
    secret: 'Secret',
    coockie: {
        maxAge: 900000,
    },

    resave: false,
    saveUninutialized: true,
    rolling: true,
    };

    const server = new AppolloServer({
        uploads: false,
        typeDefs,
        resolvers,
    });

    app.use(graphUploadExpress());

    server.applyMiddleware({ app });

    app.use(session(sess));

    app.use(expres.json());
    app.use(express.urlencoded({extended: true}));

    if (process.env.NODE_ENV === 'production') {
        app.use(express.static(path.join(__dirname, '../client/public')))
    }

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, ' ../client/public/index.html'));
    });


    db.once('open', () => {
        app.listen(PORT, () => {
            console.log(`API server is running on port ${PORT}`);
            console.log(`Use GraphQL att http://localhost:${PORT}${server.graphqlPath}`);
        });
    });
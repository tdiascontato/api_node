// api_node/jest-mongodb-config.js
module.exports = {
    mongodbMemoryServerOptions: {
        binary: {
            skipMD5: true,
        },
        autoStart: false,
        instance: {},
    },

    useSharedDBForAllJestWorkers: false,
};
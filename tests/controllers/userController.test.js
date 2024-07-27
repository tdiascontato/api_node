// api_node/tests/controllers/userController.test.js
const {MongoClient} = require('mongodb');
const { describe, beforeAll, afterAll, it, expect } = require('@jest/globals');

describe('userController', () => {
    let connection;
    let db;

    beforeAll(async () => {
        connection = await MongoClient.connect(globalThis.__MONGO_URI__);
        db = await connection.db(globalThis.__MONGO_DB_NAME__);
    });

    afterAll(async () => { await connection.close() });

    it('Create User - Status 200', async () => {
        const user = db.collection('User');

        const mockUser = {_id: '88887777', name: 'Usuário'};
        await user.insertOne(mockUser);

        const insertedUser = await user.findOne({_id: '88887777'});
        expect(insertedUser).toEqual(mockUser);
    });
});
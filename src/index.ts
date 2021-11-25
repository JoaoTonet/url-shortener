import 'dotenv/config';

import express from 'express';

import { MongoConnection } from './database/MongoConnection';
import { URLController } from './controller/URLController';

const api = express();
api.use(express.json());

const database = new MongoConnection();
database.connect();

const urlController = new URLController();
api.post('/shorten', urlController.shorten);
api.get('/:hash', urlController.redirect);

api.listen(process.env.PORT, () => console.log('🎄 Server is up on port', process.env.PORT));
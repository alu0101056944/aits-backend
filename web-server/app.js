
'use strict';

import express from 'express';
import {fileURLToPath} from 'url';
import cors from 'cors';
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/maindatabase',
    { useNewUrlParser: true, useUnifiedTopology: true });

const goodsModel =
    mongoose.model('goods', new mongoose.Schema({ bienes: String }));

// Create and serve http server
function main() {
  const app = express();
  const PORT = 8080;
  app.set('port', PORT);
  app.use(cors());

  app.listen(PORT, '127.0.0.1', () => {
        console.log('Server listening at 0.0.0.0:' + PORT);
      });

  app.get('/', async (request, response) => {
        try {
          const RESPONSE_CONTENT = await goodsModel.find();
          response.json(RESPONSE_CONTENT);
        } catch (error) {
          console.error('Could not fetch information from mongo database: ' + error);
          console.error('Did not start express web server.');
          response.status(500).send('Internal Server Error');
        }
      });
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main();
}

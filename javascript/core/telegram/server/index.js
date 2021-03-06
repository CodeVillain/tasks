import Express from 'express';
import http from 'http';
import mongoose, { Types } from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import Chat from './models/chat';
import User from './models/user';

import { createFixtures } from './config';

const app = Express();
const httpServer = http.Server(app);
mongoose.connect('mongodb://127.0.0.1:27017/telegram');

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/setup', createFixtures);

app.get('/chats', (req, res) => {
  Chat.find().select({ users: 1 }).then(data => res.send(data));
});

app.get('/chats/:id', (req, res) => {
  Chat
    .findById(req.params.id)
    .then(chat => (
      Promise
        .all(chat.users.map(userId => User.findById(userId)))
        .then((users) => {
          chat.users = users;
          return res.send(chat);
        })
        .catch(err => console.log('Err', err))
    ));
});

app.put('/chats/:id', (req, res) => {
  Chat
    .findByIdAndUpdate(
      req.params.id,
      { $push: { messages: { message: req.body.message, user: Types.ObjectId(req.body.user) } } },
      { new: true }
    )
    .then(chat => res.send(chat))
    .catch(err => res.send(500, err));
});

httpServer.listen(3000, () => console.log('Server listening on port 3000'));

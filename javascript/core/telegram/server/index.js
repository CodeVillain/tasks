import Express from 'express';
import http from 'http';
import socketio from 'socket.io';
import mongoose from 'mongoose';
import cors from 'cors';
import Chat from './models/chat';
import User from './models/user';
import bodyParser from 'body-parser';

import { createFixtures } from './config';

const app = Express();
const httpServer = http.Server(app);
const io = socketio(httpServer);
mongoose.connect('mongodb://127.0.0.1:27017/telegram');

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// io.on('connection', socket => {
//   console.log('a user connected');
// });

app.get('/setup', createFixtures);

app.get('/chats', (req, res) => {
  Chat.find().select({ users: 1 }).then(data => res.send(data));
});

app.get('/chats/:id', (req, res) => {
  Chat
    .findById(req.params.id)
    .then(data => (
      Promise
        .all(data.users.map(userId => User.findById(userId)))
        .then((users) => {
          data.users = users;
          return res.send(data);
        })
        .catch(err => console.log('Err', err))
    ));
});

app.post('/chats/:id', (req, res) => {
  console.log('Post');
});

app.put('/chats/:id', (req, res) => {
  console.log(req.body);
});

httpServer.listen(3000, () => console.log('Server listening on port 3000'));

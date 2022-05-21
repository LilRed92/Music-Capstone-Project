const express = require('express')
const app = express()
const port = 4500
const {MongoClient} = require('mongodb')
const url = "mongodb+srv://kldearman:gQzAUYiB3LAb@musicwebsite.0ifll.mongodb.net/musicwebsite?retryWrites=true&w=majority"
const client = new MongoClient(url)

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

app.post('/users', (req, res) => {

	const docObj = {
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		dateOfBirth: req.body.dateOfBirth,
		email: req.body.email,
		username: req.body.username,
		password: req.body.password
	}

  async function insert() {
	await client.connect()
	const collection = client.db('test_db').collection('users')
	await collection.insertOne(docObj)
	await client.close()
  }
  insert()
  res.redirect('/')
})


app.listen(port)


const PORT = process.env.PORT || 3000;
const INDEX = '/public/collaborate.html';
//const __dirname = '/togetherjs/hub/'
const server = express()
  .use((req, res) => res.sendFile(INDEX, { root: __dirname }))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

  console.log(server)

const { Server } = require('ws');

const wss = new Server({ server });

wss.on('connection', (ws) => {
  console.log('Client connected');
  ws.on('close', () => console.log('Client disconnected'));
});

console.log(server({server}))
// const io = socketIO(server);
//
//
// io.on('connection', (socket) => {
//   console.log('Client connected');
//   socket.on('disconnect', () => console.log('Client disconnected'));
// });
//
// setInterval(() => io.emit('time', new Date().toTimeString()), 1000);



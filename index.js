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


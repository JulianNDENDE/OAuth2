const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const port = 3001
const https = require('node:https')
const querystring = require('querystring');

app.use(express.json())
app.use(
  express.urlencoded({
    extended: true
  })
)
app.use(bodyParser.json())
app.use(cors({
  origin: '*'
}))

const SPOTIFY_ENDPOINT = 'accounts.spotify.com'
const SPOTIFY_CLIENT_ID = '' // Client ID trouvable sur le dashboard Spotify
const SPOTIFY_CLIENT_SECRET = '' // Client Secret trouvable sur le dashboard spotify

app.get('/spotify/login', (req, res) => {

  const options = {
    hostname: 'accounts.spotify.com',
    port: 443,
    path: '/api/token',
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      authorization: 'Basic ' + (new Buffer(SPOTIFY_CLIENT_ID + ':' + SPOTIFY_CLIENT_SECRET).toString('base64'))
    }
  }

  const query = https.request(options, (res) => {
    res.on('data', (d) => {
      process.stdout.write(d);
    })
  })
  query.on('error', (e) => {
    console.error(e);
  })

  query.write(querystring.stringify({
    code: req.query.code,
    redirect_uri: "http://localhost:5173",
    grant_type: "authorization_code"
  }))

  query.end()
  res.send("Spotify Login !")
})

app.get('/', (req, res) => {
  res.send('Hello World !')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

const express = require('express')
const app = express()
const port = 3000

app.post('/github-hook', (req, res) => {
  console.log(req.headers);
  console.log(req.body);
  res.status(200);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const port = 3000

// app.use(passport.initialize());
// app.use(passport.session());

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

// o



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
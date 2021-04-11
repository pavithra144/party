const express = require("express");
const app = express();
const connectDb = require("./config/db");
const router = require('./routes/register');
const auth = require('./routes/auth');
const guests = require("./routes/guests")

//connecting to DB
connectDb();

app.use(express.json({ extended: true }));

app.use('/register', router)
app.use('/auth', auth)
app.use('/guests', guests)

app.listen(5000, () => {
  console.log("server connected to 5000");
});

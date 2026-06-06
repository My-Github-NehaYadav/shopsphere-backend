const express = require('express');
const { request } = require('node:http');
const app = express()
const dotenv = require("dotenv").config();
const port = process.env.PORT;
const connectDB = require("./config/db");
connectDB();
const cors = require("cors");
app.use(cors());

app.use(express.json());
const authRoutes = require("./routes/user.routes");
app.use("/api", authRoutes);

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
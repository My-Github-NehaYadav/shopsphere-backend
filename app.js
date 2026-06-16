const express = require('express');
const app = express()
const dotenv = require("dotenv").config();
const port = process.env.PORT;

const cors = require("cors");
app.use(cors());

/* works when I add this */
const dns = require("dns").promises;
dns.setServers(["8.8.8.8", "8.8.4.4"]);

/* db connection done */
const connectDB = require("./config/db");
connectDB();

app.use(express.json());
const authRoutes = require("./routes/user.routes");
app.use("/api", authRoutes);

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
const express = require("express");
const cors = require("cors");
const { readdirSync } = require("fs");

require("dotenv").config();

const app = express();
const connectDB = require("./config/db");

connectDB();

//middleware
app.use(cors());
app.use(express.json());

//routes
readdirSync("./routes").map((r) => app.use("/api", require(`./routes/${r}`)));

app.listen(process.env.PORT, () => {
   console.log("Server is running on http://127.0.0.1:5000");
});

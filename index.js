const connectToDb = require("./db/index.js");
const express = require("express");
const route = require("./routes/index.js");
const dotenv = require("dotenv");
const cors = require("cors");

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors({
    origin: "*"
}));
app.use(route);

const PORT = 4000;
connectToDb();

app.listen(PORT, () => {
    console.log(`App is listening on http://localhost:${PORT}`);
});

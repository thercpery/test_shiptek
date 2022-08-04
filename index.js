const express = require("express")
const cors = require("cors")

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("Test for Shiptek."));

app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
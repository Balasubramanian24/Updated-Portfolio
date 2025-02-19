const express = require("express");
const contactRouter = require("./routes/contactform");
const app = express();
const cors = require("cors");

require("dotenv").config();
app.use(cors());
app.use(express.json());
app.use("/send-email", contactRouter);

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
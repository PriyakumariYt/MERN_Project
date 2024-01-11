require("dotenv").config();
const express = require('express');
const cors = require("cors");
const connectDb = require("./utils/db")
const port = process.env.PORT || 5000;
const authRoute = require("./Router/auth-router")
// const contactRoute = require("./Router/contact-router")
const contactRoute = require("./Router/contact-router");
const serviceRoute = require("./Router/service-router")

// const conn = require("./utils/db")
// Middleware
// connectDb()
const app = express();
const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/auth",authRoute)
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute)

connectDb().then(()=>{
    app.listen(port, () => {
        console.log(`Listening on port ${port}`);
    });
})


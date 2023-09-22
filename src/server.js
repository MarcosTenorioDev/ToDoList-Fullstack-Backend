const express = require("express");
const todoRoutes = require("./todos.routes")

const cors = require("cors")

const app = express();

app.use(express.json());

app.use(cors())

app.use(todoRoutes)

app.get("/health", (req, res) => {
    return res.json("its ok")
})

app.listen(process.env.PORT, () => console.log("server is running"))


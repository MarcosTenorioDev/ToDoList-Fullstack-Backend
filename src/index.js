const express = require("express");
const todoRoutes = require("./todos.routes")
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const port = process.env.PORT


const cors = require("cors")

const app = express();

app.use(express.json());
app.use(cors())

app.use((req, res, next) => {
  req.prisma = prisma;
  next();
});

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(todoRoutes)

app.get("/health", (req, res) => {
    return res.json("its ok")
})

app.listen(port, () => console.log(`server is running on port ${port}`))


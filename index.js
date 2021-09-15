if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const cors = require("cors");
const express = require("express");
const Conn = require("./models/conn/tarefa.conn");

const app = express();

const corsOptions = {
  origin: "https://app-front-and-patrick.herokuapp.com/",
  optionsSuccessStatus: 200,
};

app.use(express.json());
app.use(cors());

const db_url = process.env.DB_URL;
const db_user = process.env.DB_USER;
const db_pass = process.env.DB_PASS;
const db_data = process.env.DB_DATA;
Conn(db_url, db_user, db_pass, db_data);

const porta = 3001;

const tarefa = require("./routers/tarefa.routes");
app.use("/tarefa", tarefa);

app.listen(process.env.PORT || porta, () => {
  console.info(`app rodando em : http://localhost:${porta}/`);
});

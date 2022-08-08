const express = require("express");
const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

// Routes and Endpoints
app.get("/", (req, res) => {
  res.json({ message: "Primeira Rota Criada com Sucesso!" });
});

app.listen(3000);

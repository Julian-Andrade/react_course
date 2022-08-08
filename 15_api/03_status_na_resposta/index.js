const express = require("express");
const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

// Routes and Endpoints
app.post("/createproduct", (req, res) => {
  const name = req.body.name;
  const price = req.body.price;

  if (!name || !price) {
    res.status(422).json({ message: `O campo solicitado é obrigatório!` });
    return; // Para a execução quando retorna o erro, caso não exista, continua a aplicação.
  }

  console.log(name);
  console.log(price);

  res
    .status(201)
    .json({ message: `O produto ${name} foi criado com sucesso!` });
});

app.get("/", (req, res) => {
  res.status(200).json({ message: "Primeira rota criada com sucesso!" });
});

app.listen(3000);

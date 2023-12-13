const express = require("express");
const bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");
const app = express();
const port = 3000;

const url = "mongodb://localhost:27017";
const dbName = "mydb";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/api/products/add", async (req, res) => {
    const productName = req.body.productName;
    const productDescription = req.body.productDescription;
    const productImage = req.body.productImage;
    const productTags = req.body.productTags;

    const client = new MongoClient(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    try {
        await client.connect();

        const db = client.db(dbName);
        const collection = db.collection("products");

        // Insere o novo produto no banco de dados
        await collection.insertOne({
            name: productName,
            description: productDescription,
            image: productImage,
            tags: productTags,
        });

        res.json({ message: "Produto adicionado com sucesso!" });
    } finally {
        await client.close();
    }
});

// ... (seu código anterior)

app.get("/api/products", async (req, res) => {
    const client = new MongoClient(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    try {
        await client.connect();

        const db = client.db(dbName);
        const collection = db.collection("products");

        // Obtém a lista de produtos do banco de dados
        const products = await collection.find({}).toArray();

        res.json(products);
    } finally {
        await client.close();
    }
});

app.get("/", (req, res) => {
    res.send("Bem-vindo à loja!");
});

// ...

// Adicione a rota para servir o arquivo HTML
app.get("/", (req, res) => {
    const pathToHtml = path.join(__dirname, "lojaADM.html");
    res.sendFile(pathToHtml);
});

// ...

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

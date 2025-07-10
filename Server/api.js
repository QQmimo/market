const express = require("express");
const fs = require("fs");
const path = require(path);

const app = express();
const PORT = 10800;

app.use(express.json());

const products = JSON.parse(fs.readFileSync(`${__dirname}/data/products.json`, { encoding: "utf8" }));

app.get("/api/products", (req, res) => {
    try {
        res.json(products);
    }
    catch (er) {
        console.log(er);
        res.status(500);
    }
});

app.get("/api/products/:id", (req, res) => {
    try {
        res.json(products.find(x => x.id === Number(req.params.id)));
    }
    catch (er) {
        console.log(er);
        res.status(500);
    }
});

app.get("/api/products/category/:categoryId", (req, res) => {
    try {
        res.json(products.filter(x => x.category.id === Number(req.params.categoryId)));
    }
    catch (er) {
        console.log(er);
        res.status(500);
    }
});

app.get("/api/products/search/:query", (req, res) => {
    try {
        res.json(products.filter(x => x.name.toLowerCase().indexOf(req.params.query.toLowerCase()) !== -1));
    }
    catch (er) {
        console.log(er);
        res.status(500);
    }
});

app.get("/api/categories", (req, res) => {
    try {
        res.json(products.map(x => x.category).filter((x, i, a) => a.findIndex(o => o.id === x.id) === i));
    }
    catch (er) {
        console.log(er);
        res.status(500);
    }
})



app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
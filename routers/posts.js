const express = require("express");
const { request } = require("http");
const router = express.Router();

//import 
const posts = require("../data/posts.js");
// routing

// Index
router.get("/", (req, res) => {
    // res.send("Lista dei post");
    res.json(posts)
});

// Show
router.get("/:id", (req, res) => {
    // res.send(`Visione del post ${req.params.id}`);
    res.json(posts[req.params.id])
});

// Create
router.post("/", (req, res) => {
    res.send("Creazione nuovo post")
});

// Update 
router.put("/:id", (req, res) => {
    res.send(`Modifica del post ${req.params.id}`)
});

// Delete
router.delete("/:id", (req, res) => {
    res.send(`Eliminazione del post ${req.params.id}`)
});

//export 
module.exports = router
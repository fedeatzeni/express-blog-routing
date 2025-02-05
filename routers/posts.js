const express = require("express");
const router = express.Router();

// routing

// Index
router.get("/", (req, res) => {
    res.send("Lista dei post");
});

// Show
router.get("/:id", (req, res) => {
    res.send(`Visione del post ${req.params.id}`);
});

// Create
router.post("/", (req, res)=> {
    res.send("Creazione nuovo post")
});

// Update 
router.put("/:id", (req, res)=> {
    res.send(`Modifica del post ${req.params.id}`)
});

// Delete
router.delete("/:id", (req, res)=> {
    res.send(`Eliminazione del post ${req.params.id}`)
});

//export 
module.exports = router
/* Creare un file di routing (routers/posts.js) che conterrà le rotte necessario per l’entità post.
All’interno creare le rotte per le operazioni CRUD (Index, Show, Create, Update e Delete)
Tutte le risposte saranno dei testi che confermeranno l’operazione che il server deve eseguire, secondo le convenzioni REST.
Ad esempio:
Se viene chiamata /posts col verbo GET ci aspettiamo “Lista dei post”;
Se viene chiamato /posts/1 col verbo DELETE ci aspettiamo “Cancellazione del post 1"
e via dicendo…
Registrare il router dentro app.js con il prefisso posts/.
*/

const express = require("express");
const app = express();
const port = 3000;

// general route
app.get('/', (req, res) => {
	res.send('Server del mio blog')
})

// static 
app.use(express.static("public"));

//routing
const postRouter = require("./routers/posts.js")
// new route
app.use("/posts", postRouter)

// server
app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})
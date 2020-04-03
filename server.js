const fetch = require("node-fetch");
const app = require("express")();

const port = 3001;

//node running an express server which makes a GET request to the IMDB API and sends it
app.get("/api/:movie", async (req, res) => {
  let movieRes = await fetch(
    `http://www.omdbapi.com/?apikey=f62c1ff9&s=${req.params.movie}`
  );
  movieRes = await movieRes.json();
  res.send(movieRes).end();
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
)
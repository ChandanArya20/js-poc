const express = require("express");

const app = express();
// Middleware to parse JSON request bodies
app.use(express.json());

// Middleware to parse URL-encoded request bodies
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next)=>{
    console.log(req.url);
    next()
    
})

app.get("/api/user", (req, res) => {
  res.json({
    name: "Chandan",
    age: 21,
    marks: 90,
    class: "BCA",
  });
});

app.get("/api/user/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`User ID is: ${userId}`);
});

app.post("/api/user/q", (req, res) => {
  const limit = req.query?.limit;
  res.send(`Limit is: ${limit}`);
});

app.post("/api/user", (req, res) => {
  console.log(req.body);
  res.send("OK USER");
});

app.post("/api/admin", (req, res) => {
  console.log(req.body);
  res.send("OK ADMIN");
});

app.listen(8080, () => console.log("Application started at port 8080"));

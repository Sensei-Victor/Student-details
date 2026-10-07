import express from "express";
const port = 3000;
const app = express();
app.get("/", (req, res) => {
  res.end("We are adding students data");
});
app.post("/", (req, res) => {
  res.end("We are adding students data");
});
app.put("/student/:id", (req, res) => {
  res.end("We are updating students data");
});
app.delete("/student/:id", (req, res) => {
  res.end("We are deleting students data");
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

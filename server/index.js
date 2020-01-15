const express = require("express");
const path = require("path");
const port = process.env.PORT || 4000;
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

mongoose.connect("mongodb://localhost:27017/data", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true
});

const profile = require("./model/profile");
app.use(express.static("dist"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/registration", async (req, res) => {
  const reg = new profile(req.body);
  try {
    await reg.save(reg);
    console.log("Registration successful");
    res.status(201).send("Registration successful");
  } catch (e) {
    console.log(e);
    res.status(404).send();
  }
});

app.get("/registration", async (req, res) => {
  try {
    const register = await profile.find({});
    res.status(200).send(register);
  } catch (e) {
    res.status(500).send();
  }
});

app.get("/registration/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const info = await profile.findById(_id);
    res.status(200).send(info);
  } catch (error) {
    res.status(204).send();
  }
});

app.put("/registered/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const update = await profile.findByIdAndUpdate(id, req.body, { new: true });
    res.status(201).json(update);
  } catch (e) {
    console.log(e);
    res.status(400).json(e);
  }
});

app.delete("/registration/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const rem = await profile.findByIdAndDelete(id);
    res.status(200).send(rem);
  } catch (e) {
    res.status(404).send();
  }
});
// creating aserver  coupled with mongo connection
app.listen(process.env.PORT || 4000, () =>
  console.log(`Listening on port ${port}!`)
);

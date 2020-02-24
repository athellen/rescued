const express = require("express");
const path = require("path");
const port = process.env.PORT || 4000;
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true
});

const profile = require("./model/profile");
app.use(express.static("build"));

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

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

app.post("/registration", async (req, res) => {
  try {
    const register = await profile.find({});
    res.status(200).send(register);
  } catch (e) {
    res.status(500).send();
  }
});

app.post("/registrations", async (req, res) => {
  try {
    const registered = await profile.find({});
    res.status(200).json(registered);
  } catch (e) {
    console.log(e);
    res.status(501).send(e);
  }
});

app.post("/registration/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const info = await profile.findById(_id);
    res.status(200).send(info);
  } catch (error) {
    res.status(400).send(error);
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
app.use("/ussd", require("./trial"));

// creating aserver  coupled with mongo connection
app.listen(port, () => console.log(`Listening on port ${port}!`));

const express = require("express");
const router = express.Router();
const userModel = require("../models/UserModel");

router.get("/user", async (req, res) => {
  const userData = await userModel.find({ _id: req.body.id }).lean().exec();
  return res.json(userData);
});

router.get("/users", async (req, res) => {
  const userData = await userModel.find({}).lean().exec();
  return res.json(userData);
});

router.delete("/user", async (req, res) => {
  const deleteUser = await userModel
    .deleteOne({ _id: req.body.id })
    .lean()
    .exec();
  return res.json(deleteUser);
});

router.post("/user", (req, res) => {
  const createUser = new userModel(req.body);
  createUser
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;

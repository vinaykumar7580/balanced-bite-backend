const express = require("express");
const { adminModel } = require("../model/admin.modal");
const { ProductModel } = require("../model/product.model");
const { OrderModel } = require("../model/order.model");
const { UserModel } = require("../model/users.model");

const adminRouter = express.Router();

adminRouter.get("/", async (req, res) => {
  try {
    let admin = await adminModel.find();
    res.status(200).send(admin);
  } catch (err) {
    res.status(500).send(err);
  }
});

adminRouter.post("/login", async (req, res) => {
  const { name, email, pass } = req.body;

  let admin = await adminModel.findOne({ email });
  try {
    if (admin && admin.pass == pass) {
      res.status(200).json({ msg: "Login Successfull!!", user: admin.name });
    }
  } catch (err) {
    res.status(500).send(err);
  }
});



adminRouter.get("/adminproducts", async (req, res) => {
  try {
    let product = await ProductModel.find();

    res.status(200).send(product);
  } catch (err) {
    res.status(500).send(err);
  }
});

adminRouter.get("/allorders", async (req, res) => {
  try {
    let order = await OrderModel.find();

    res.status(200).send(order);
  } catch (err) {
    res.status(500).send(err);
  }
});

adminRouter.get("/allusers", async (req, res) => {
  try {
    let users = await UserModel.find();

    res.status(200).send(users);
  } catch (err) {
    res.status(500).send(err);
  }
});



module.exports = { adminRouter };

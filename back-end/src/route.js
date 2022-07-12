const express = require("express");

const router = express.Router();

router.get("/", (req, res) => res.render("index"));
router.get("/create-pass", (req, res) => res.render("create-pass"));
router.get("/room", (req, res) => res.render("room"));

router.get("/room/:room/:question/:actions", (req, res) =>
  res.render("exemplo", { req })
);

module.exports = router;

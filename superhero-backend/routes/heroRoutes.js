const express = require("express");
const router = express.Router();
const { getAllHeroes, createHero } = require("../controllers/heroController");

router.route("/").get(getAllHeroes).post(createHero);

module.exports = router;

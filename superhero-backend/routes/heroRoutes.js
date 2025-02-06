const express = require("express");
const router = express.Router();
const { getAllHeroes, createHero, updateHero, deleteHero } = require("../controllers/heroController");

router.route("/").get(getAllHeroes).post(createHero);
router.route("/:id").patch(updateHero).delete(deleteHero);

module.exports = router;

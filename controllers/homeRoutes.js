// to redirect to home page
const router = require("express").Router();
const { User, Constellation, Star, Facts } = require("../models");
const sequelize = require("../config/connection");

router.get("/", async (req, res) => {
  res.render("homepage");
});



//get login from homepage
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  //render handlebars login
  res.render("login");
});

router.get("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.redirect("/");
    });
  } else {
    res.redirect("/");
  }
});

//get signup from homepage
router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  //render handlebars signup
  res.render("signup");
});

router.get("/homepage", (req, res) => {
  res.render("homepage");
});

router.get("/NASA", (req, res) => {
  res.render("NASA");
});

router.get("/mythos", (req, res) => {
  res.render("mythos");
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/directory", async (req, res) => {
  console.log("directory route");
  try {
    const constellationData = await Constellation.findAll({
      include: [
        {
          model: Star,
          model: Facts,
        },
      ],
    });

    const dbConstellation = constellationData.map((constellation) =>
      constellation.get({ plain: true })
    );
    res.render("directory", {
      dbConstellation,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
module.exports = router;

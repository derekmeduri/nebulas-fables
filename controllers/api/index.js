const router = require("express").Router();
const userRoutes = require("./userRoutes");
const mythosRoutes = require("./mythos-routes");
const starRoutes = require("./star-routes");
const factRoutes = require('./facts-routes');
const constellationRoutes = require('./constellation-routes');

router.use("/users", userRoutes);
router.use("/mythos", mythosRoutes);
router.use("/star", starRoutes);
router.use('/facts', factRoutes);
router.use('/constellation', constellationRoutes);

module.exports = router;

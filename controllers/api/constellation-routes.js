const router = require('express').Router();
const { Constellation, Star, Facts } = require('../../models');

// router.get('/', (req, res) => {
//     Constellation.findAll()
//     .then((constellation) => res.json(constellation))
//     .catch((err) => res.status(500).json(err));
// });

// router.get('/', async (req, res) => {
//     try {
//       const constellationData = await Constellation.findAll({
//         include: [{ model: Star }, { model: Facts }],
//       });
//       res.status(200).json(constellationData);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });



// router.get('/:id', (req, res) => {
//     Constellation.findOne({
//         where: {
//             id: req.params.id,
//         },
//     })
//     .then((constellation) => { 
//         console.log(constellation);
//         res.status(200).json(constellation);
// })
// .catch((err) => {
//     console.log(err);
//     res.status(400).json(err);
//     });
// });

router.get('/:id', async (req, res) => {
    try {
      const constellationData = await Constellation.findByPk(req.params.id, {
        include: [{ model: Facts }, { model: Star }],
      });
  
      if (!constellationData) {
        res.status(404).json({ message: 'No Constellation with that ID!' });
        return;
      }

      res.status(200).json(constellationData);
    } catch (err) {
      res.status(500).json((err) => console.log(err));
    }
  });

//router.post()

//router.delete()

module.exports = router;
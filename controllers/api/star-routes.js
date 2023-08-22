const router = require('express').Router();
const { Star } = require('../../models');

router.get('/', (req, res) => {
    Star.findAll()
    .then((star) => res.json(star))
    .catch((err) => res.status(500).json(err));
});

router.get('/:id', (req, res) => {
    Star.findOne({
        where: {
            id: req.params.id,
        },
    })
    .then((star) => { 
        console.log(star);
        res.status(200).json(star);
})
.catch((err) => {
    console.log(err);
    res.status(400).json(err);
    });
});

//router.post()

//router.delete()

module.exports = router;
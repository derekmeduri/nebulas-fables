const router = require('express').Router();
const { Facts } = require('../../models');

router.get('/', (req, res) => {
    Facts.findAll()
    .then((facts) => res.json(facts))
    .catch((err) => res.status(500).json(err));
});

router.get('/:id', (req, res) => {
    Facts.findOne({
        where: {
            id: req.params.id,
        },
    })
    .then((facts) => { 
        console.log(facts);
        res.status(200).json(facts);
})
.catch((err) => {
    console.log(err);
    res.status(400).json(err);
    });
});

//router.post()

//router.delete()

module.exports = router;
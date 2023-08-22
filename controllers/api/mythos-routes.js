const router = require('express').Router();
const { Mythos } = require('../../models');

router.get('/', (req, res) => {
    Mythos.findAll()
    .then((mythos) => res.json(mythos))
    .catch((err) => res.status(500).json(err));
});

router.get('/:id', (req, res) => {
    Mythos.findOne({
        where: {
            id: req.params.id,
        },
    })
    .then((mythos) => { 
        console.log(mythos);
        res.status(200).json(mythos);
})
.catch((err) => {
    console.log(err);
    res.status(400).json(err);
    });
});

//router.post()


//router.delete()

module.exports = router;
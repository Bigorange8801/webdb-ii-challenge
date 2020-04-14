const router = require('express').Router();
const db = require("../data/dbConfig");

router.get('/', (req,res) => {
    return db('cars')
    .then(cars => {
        res.json(cars);
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({m: "No car to see"});
    })
});

router.post('/', (req,res) => {
    return db('cars').insert(req.body)
    .then(car => {
        res.status(201).json(car);
    })
})

module.exports = router;
const router = require('express').Router();
const Resource = require('./model');

router.get('/', (req, res, next) => {
    Resource.findResources()
        .then((resources) => {
            res.status(200).json(resources);
        })
        .catch(next);
});

router.post('/', (req, res, next) => {
    Resource.createResource(req.body)
        .then((resource) => {
            res.status(201).json(resource);
        })
        .catch(next);
});

router.use((err, req, res, next) => { //eslint-disable-line
    res.status(500).json({
        customMessage: 'something broken inside the resources router',
        message: err.message,
        stack: err.stack
    });
});

module.exports = router;
const router = require('express').Router();
const Project = require('./model');

router.get('/', (req, res, next) => {
    Project.findProjects()
        .then((projects) => {
            res.status(200).json(projects);
        })
        .catch(next);
});

router.post('/', (req, res, next) => {
    Project.createProject(req.body)
        .then((project) => {
            res.status(201).json(project);
        })
        .catch(next);
});

router.use((err, req, res, next) => { //eslint-disable-line
    res.status(500).json({
        customMessage: 'something broken inside the projects router',
        message: err.message,
        stack: err.stack
    })
})

module.exports = router;
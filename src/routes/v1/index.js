const express = require('express');

const { InfoController } = require('../../controllers');
const schoolRouter=require('./school-router');

const router = express.Router();

router.get('/info', InfoController.info);
router.use("/school",schoolRouter);

module.exports = router;
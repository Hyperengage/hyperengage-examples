const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');
router.get('/:eventName', async (req, res) => {
    const eventName = req.params.eventName;

    try {
        await eventController.trackEvent(eventName);
        res.send(`${eventName} tracked.`);
    } catch (error) {
        res.status(500).send('Error tracking event');
    }
});

module.exports = router;
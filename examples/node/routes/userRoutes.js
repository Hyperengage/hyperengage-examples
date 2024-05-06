const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/:userId', async (req, res) => {
    const userId = req.params.userId;

    try {
        await userController.identifyUser(userId);
        res.send(`User ${userId} identified.`);
    } catch (error) {
        res.status(500).send('Error identifying user.');
    }
});

module.exports = router;
const express = require('express');
const router = express.Router();
const accountController = require('../controllers/accountController');

router.get('/:accountId', async (req, res) => {
    const accountId = req.params.accountId;

    try {
        await accountController.identifyAccount(accountId);
        res.send(`Account ${accountId} identified.`);
    } catch (error) {
        res.status(500).send('Error identifying account.');
    }
});

module.exports = router;
const express = require('express');
const router = express.Router();

/* GET me */
router.get('/me', (req, res) => {
    const me = {name: 'George McCarron', age: 20};
     res.json(me);
});

module.exports = router;
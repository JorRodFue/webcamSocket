/* eslint-disable indent */
const { Router } = require('express');
const router = Router();

router.get('/', (request, response) => {
    response.redirect('index.html');
});

module.exports = router;

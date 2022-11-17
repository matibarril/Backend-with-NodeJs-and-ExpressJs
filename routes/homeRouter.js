const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hola A todos');
});

router.get('/Hola', (req, res) => {
  res.send('Hola Como estan?');
});

module.exports = router;

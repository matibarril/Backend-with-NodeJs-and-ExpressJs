const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hola putitos');
});

router.get('/Hola', (req, res) => {
  res.send('Hola Don Barrilen');
});

module.exports = router;

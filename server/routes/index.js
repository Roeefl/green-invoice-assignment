const express = require('express');
const router = express.Router();
const axios = require('axios');

const apiURL = 'https://jupiter.d.greeninvoice.co.il/api/v1';

router.get('/', (req, res) => {
  res.send('Server Homepage');
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  console.log("🚀 ~ file: index.js ~ line 13 ~ router.post ~ email", email)
  console.log("🚀 ~ file: index.js ~ line 13 ~ router.post ~ password", password)

  res.send(activities);
})

module.exports = router;

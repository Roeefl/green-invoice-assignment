const express = require('express');
const router = express.Router();
const axios = require('axios');

const apiURL = 'https://jupiter.d.greeninvoice.co.il/api/v1';

router.get('/', (req, res) => {
  res.send('Server Homepage');
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const endpoint = `${apiURL}/account/login`;

  try {
    const user = await axios
      .post(endpoint, {
        email,
        password,
      })
      .then(res => res.data);
  
    res.send({ user });
  } catch (err) {
    const { response = {} } = err;
    const { data = {} } = response;
    const { errorCode, errorMessage } = data;

    res.send({ isError: true, errorCode, errorMessage })
  }
});

module.exports = router;

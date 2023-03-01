const express = require('express');
const router = express.Router();

router.get('/', async (req, res, next) => {
  const spaceID = process.env.LINGO_SPACE;
  const apiToken = process.env.LINGO_API;
  const KIT_OUTLINE_URL = `https://api.lingoapp.com/1/kits/939B14AA-5A30-4294-8491-7E2B7CCF46D9/outline`;
  const SPACE_OUTLINE_URL = `https://api.lingoapp.com/1/sections/F5270B43-9341-4DA6-B5A1-D19E1FDA83F2`;

  async function Fetch(url) {
    const response = await fetch(url, {
      headers: {
        Authorization:
          'Basic ' + Buffer.from(spaceID + ':' + apiToken).toString('base64'),
      },
    });
    return response;
  }

  const promise = await Fetch(SPACE_OUTLINE_URL);
  const json = await promise.json();

  res.send(json);
});

router.get('/test', async (req, res, next) => {
  setTimeout(() => {
    res.send('this route is working');
  }, 5000);
});

module.exports = router;

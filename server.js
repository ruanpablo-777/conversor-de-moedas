const express = require('express');
const cors = require('cors')
const app = express();
app.use(express.json())
app.use(cors());

(async () => {
  const fetch = (await import('node-fetch')).default;

  app.get('/proxy/latest/EUR', async (req, res) => {
    const response = await fetch("https://v6.exchangerate-api.com/v6/23a3ebe869b290c1ed195f22/latest/USD/");
    const data = await response.json();
    res.json(data);
  });

  app.listen(3023, () => {
    console.log('Proxy server listening on port 3023');
  });
})();
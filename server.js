import express from 'express'
import fetch from 'node-fetch'
const app = express()

app.get('/proxy/latest/EUR', async (req, res) => {
    const response = await fetch("https://v6.exchangerate-api.com/v6/23a3ebe869b290c1ed195f22/latest/EUR/")
    const data = await response.json()
    res.json(data)
})

app.listen(3000, () => {'Proxy server listening on port 3000'})
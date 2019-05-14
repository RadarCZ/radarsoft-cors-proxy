import express from 'express'
import Axios from 'axios';

const app = express()

app.set('port', 8880)

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

app.get('/*', async (req, res, next) => {
    const getPath = req.path.substring(1)
    try {
        const response = await Axios.get(getPath)
        res.status(response.status).send(response.data)
    } catch (error) {
        console.log("AXIOS ERROR: ", error)
        res.send(error)
    }
})

export default app
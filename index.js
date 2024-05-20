import express from 'express'

const app = express()


const PORT = process.env.PORT || 5000
const HOST = process.env.HOST || 'localhost'


app.listen(PORT, HOST, () => console.log(`server listening on port ${PORT}`))
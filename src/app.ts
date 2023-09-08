

import express from 'express'
import cors from 'cors'
const app = express();

const PORT = process.env.PORT || 3001

app.use(cors())
app.use('/', () => {
    console.log('test server')
})

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});
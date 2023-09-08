

import express from 'express'
import cors from 'cors'
import { router } from "./routes/router"
const app = express();

const PORT = process.env.PORT || 3003

app.use(cors())
app.use('/', router)

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});
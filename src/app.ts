import express from 'express'
import cors from 'cors'
const app = express();
import { router } from "./routes/router"

const PORT = process.env.PORT || 3001

app.use(cors())
app.use('/', router);

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});
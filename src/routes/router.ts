import { Request, Response, Router } from 'express'
const router = Router()

router.get("/characters", (req: Request, res: Response) => {
    res.send({
        data: 'test data'
    })
})

export { router }
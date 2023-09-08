import { Router } from 'express'
import { getCharacters } from '../controller/characters'

const router = Router()

router.get("/characters", getCharacters)

export { router }
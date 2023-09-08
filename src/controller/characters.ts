import axios from "axios";
import { Request, Response } from "express";
import { RICK_AND_MORTY_API } from "../config/rickAndMortyApi";
import { charactersGraphqlQuery } from "../schema/schema";

export const getCharacters = async (_req: Request, res: Response) => {
    try {
        const response = await axios.post(RICK_AND_MORTY_API, {
            query: charactersGraphqlQuery,
        });

        const data = response.data.data.characters.results;
        res.json(data);
    } catch (error) {
        console.error('Error:', error);
    }
}
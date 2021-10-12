import { NextApiRequest, NextApiResponse } from "next" ;
import conectarDB from "../../../lib/conexionDB";
import Donador from "../../../models/Donador"; 
import { IDonador } from "../../../models/Donador";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        await conectarDB ();
        const Donadores: IDonador[] = await Donador.find(req.body);
        res.status(200).json(Donadores);
    } catch (error) {
        console.log(error); 
        res.status(400);
    }
}
export default handler
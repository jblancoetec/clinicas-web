import { NextApiRequest, NextApiResponse } from "next" ;
import conectarDB from "../../../lib/conexionDB";
import Administrador from "../../../models/Administrador";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    await conectarDB();
    try {
        const administrador= await Administrador.create(
            req.body
        )
        res.status(201).json({succsess: true, data: administrador})
    } catch (error) {
        res.status(400).json({success: false})
    }
}
export default handler
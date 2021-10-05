import { NextApiRequest, NextApiResponse } from "next" ;
import conectarDB from "../../../lib/conexionDB";
import Donador from "../../../models/Donador";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    await conectarDB ();
    try {
        const donador= await Donador.create(
            req.body
        )
        res.status(201).json({succsess: true, data: donador})
    } catch (error) {
        res.status(400).json({success: false})
    }
}
export default handler
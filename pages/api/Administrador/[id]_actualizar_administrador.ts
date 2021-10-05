import { NextApiRequest, NextApiResponse } from "next" ;
import conectarDB from "../../../lib/conexionDB";
import Administrador from "../../../models/Administrador";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    await conectarDB();
    const {
      query: { id },
    } = req;
  
    try {
      const administrador = await Administrador.findByIdAndUpdate(id, req.body, {
          new: true, 
          runValidators: true,
      })
      if (!administrador) {
          return res.status(400).json({success:false})
      }
      res.status(201).json({ succsess: true, data: administrador });
    } catch (error) {
      res.status(400).json({ success: false });
    } 
}
export default handler
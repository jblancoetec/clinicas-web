import { NextApiRequest, NextApiResponse } from "next";
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log("se pide contrasenias");

  console.log(req.body);
  res.send(req.body);
};

export default handler;

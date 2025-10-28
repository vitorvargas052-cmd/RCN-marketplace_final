import { NextApiRequest, NextApiResponse } from 'next'
export default function handler(req: NextApiRequest, res: NextApiResponse){ if(req.method==='POST'){ return res.json({ok:true}) } res.status(405).end() }

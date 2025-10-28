import { NextApiRequest, NextApiResponse } from 'next'
export default function handler(req: NextApiRequest, res: NextApiResponse){ if(req.method==='GET'){ return res.json([{id:'1', title:'Produto exemplo', price:10}]) } res.status(405).end() }

import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
    try {
        const list:{}[] = await fetch(`${process.env.SERVER_PROTOCOL}://${process.env.SERVER_ROOT}/generate/${_req.query.date}`)
            .then(r => r.json())
            .then(res => res)

        res.status(200).json(list)
    } catch (e) {
        console.error(e)
        res.status(200).json([])
    }
}
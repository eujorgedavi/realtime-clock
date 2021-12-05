import {NextApiRequest, NextApiResponse} from "next";
import { WorldClock } from "../../utils/Interfaces";

export default async function(req: NextApiRequest, res: NextApiResponse<WorldClock>) {

    const result = await fetch("http://worldclockapi.com/api/json/utc/now")
    const clock: WorldClock | any = result.body
    res.status(200).json(clock)

}
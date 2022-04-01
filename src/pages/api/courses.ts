// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const courses = [
    {id: 1, name: 'Next js com Typescript'},
    {id: 2, name: 'React js com Typescript'},
    {id: 3, name: 'Node js com Typescript'},
    {id: 4, name: 'Vue js com Typescript'},
  ]

  return res.json(courses)
};

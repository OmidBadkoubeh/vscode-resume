import { NextApiRequest, NextApiResponse } from 'next';
import data from './projects.json';

export const getProjects = (): Project[] => {
  return data;
};

const projects = (req: NextApiRequest, res: NextApiResponse) => {
  const projects = getProjects();
  res.json(projects);
};

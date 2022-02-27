/* eslint-disable import/prefer-default-export */
interface Job {
  title: string;
  company: string;
  range: string;
  url: string;
  descriptions: Description[];
}

type Description = string;

export const jobs: Job[] = [
  {
    title: 'Software Engineer',
    company: 'LogiCloud Technologies',
    url: 'https://www.logicloud.tech/',
    range: 'November 2021 - Present',
    descriptions: [
      'Developed and maintained code for clients application primarily using TypeScript, NodeJS, Sequelize, and Azure',
      'Helped shipped out ready-production code',
      'Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis'
    ]
  }
];

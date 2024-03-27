import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'landprodata',
		company: 'LandProData',
		description: 'Worked on automating various tasks with python and converting legacy PHP services to python.',
		contract: ContractType.Contract,
		type: 'Software Development',
		location: 'Boise',
		period: { from: new Date(2021, 0,1), to: new Date(2021, 2, 1)},
		skills: getSkills('python', 'postgresql'),
		name: 'Backend Developer',
		color: 'red',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Worked on automating various tasks with python and converting legacy PHP services to Python'
	},
	{
		slug: 'suku-infiniteworld',
		company: 'SUKU / InfiniteWorld',
		description: `Drove development and implementation of features for front-end applications in Typescript, Svelte with SvelteKit and React with Next.js. Collaborated with teams of developers, QA, product management, and stakeholders spanning America and Europe, communicating effectively while progressing through our development cycle. Researched and worked with my team to successfully integrate Web3 transactions with services for authentication, payments, and identity verification in a front-end application, pioneering solutions that resulted in a secure and smooth user experience. Crafted an award-winning marketplace platform from concept to production used by McLaren for their digital collectible release. Our team implemented designs that met the high-end standards of this renowned brand. The campaign generated $2.5M and sold out in 72 hours. Delivered consistent contributions while adapting and growing as a developer with the fast pace of a startup company environment tackling a wide range of programming, workflow and operation challenges in collaboration with experienced senior peers.`,
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date(2021, 2, 1), to: new Date(2022, 11, 31) },
		skills: getSkills('svelte', 'reactjs','ts', 'tailwind','vite', 'css', 'html', 'js', 'aws', 'jest'),
		name: 'Full Stack Developer',
		color: 'blue',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Worked on white label digital marketplaces for various clients. Built award winning product from start to finish and Specialized in integrating web3 functionality into application.'
	},
  {
		slug: 'martis-cleaning-service',
		company: 'Martis Cleaning Service',
		description: 'Managed payroll, invoices and was the main point of contact for issues related to micorsoft suite and windows systems.',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date(2023, 0, 1), to: new Date(2023, 11, 31) },
		skills: getSkills(''),
		name: 'Administrative Assistant',
		color: 'blue',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Managed payroll, invoices and was the main point of contact for issues related to micorsoft suite and windows systems.'
	},
  {
		slug: 'fpi',
		company: 'FPI Management',
		description: 'Manage low income apartment complex of 272 units, working on leasing, invoices and resident complaints and maintenance request. Daily use of Spanish on site',
		contract: ContractType.FullTime,
		type: 'ACD',
		location: 'San Diego',
		period: { from: new Date(2023, 0, 1), to: new Date(2023, 11, 31) },
		skills: getSkills(''),
		name: 'Assistant Community Director',
		color: 'blue',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Manage low income apartment complex of 272 units, working on leasing, invoices and resident complaints and maintenance request. Daily use of Spanish on site'
	},
];

export const title = 'Experience';

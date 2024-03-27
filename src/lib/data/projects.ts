import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: 'agentboost-frontend',
		color: '#5e95e3',
		description:
			'App for real estate agents to manage content for listings and marketing, integrated with various google apis, gemini AI and social medias.',
		shortDescription:
    'App for real estate agents to manage content for listings and marketing, integrated with various google apis, gemini AI and social medias.',
		links: [{ to: 'https://github.com/MattZ-2051/agentboost-frontend', label: 'GitHub' }, {to: 'https://agentboost-frontend-dev.vercel.app/', label: 'Live WIP'}],
		logo: Assets.Unknown,
		name: 'Agentboost Frontend (WIP)',
		skills: getSkills('svelte', 'ts', 'tailwind', 'vite', 'html', 'css'),
	},
	{
		slug: 'agentboost-backend',
		color: '#ff3e00',
		description:
			'App for real estate agents to manage content for listings and marketing, integrated with various google apis, gemini AI and social medias.',
		shortDescription:
			'App for real estate agents to manage content for listings and marketing, integrated with various google apis, gemini AI and social medias.',
		links: [{ to: 'https://github.com/MattZ-2051/agentboost-backend', label: 'GitHub' }],
		logo: Assets.NestJs,
		name: 'Agentboost Backend (WIP)',
		skills: getSkills('nestjs', 'ts', 'nodejs', 'postgresql'),
	},
  {
		slug: 'metana-bootcamp',
		color: 'green',
		description:
			'Collection of assignements from 4 month long blockchain development course. Includes contracts in solidity and use of web3 libraries like hardhat and foundry.',
		shortDescription:
			'Collection of assignements from 4 month long blockchain development course. Includes contracts in solidity and use of web3 libraries like hardhat and foundry.',
		links: [{ to: 'https://github.com/MattZ-2051/metana-bootcamp', label: 'GitHub' }],
		logo: Assets.Solidity,
		name: 'Blockchain Dev Projects',
		skills: getSkills('solidity', 'ts', 'nodejs'),
	},
  {
		slug: 'picstagram',
		color: 'blue',
		description:
			'Instagram clone built as one of my first resume projects as a developer. Built using ReactJS, Redux on the FE and Python Flask on the BE.',
		shortDescription:
			'Instagram clone built as one of my first resume projects as a developer. Built using ReactJS, Redux on the FE and Python Flask on the BE.',
		links: [{ to: 'https://github.com/MattZ-2051/Picstagram', label: 'GitHub' }],
		logo: Assets.ReactJs,
		name: 'Picstagram (Instagram Clone)',
		skills: getSkills('html','css', 'js', 'python'),
	},
  {
		slug: 'infinite-ui-v2',
		color: 'blue',
		description:
			'Former repo for white label digital marketplace used for various clients like McLaren, and Seva',
		shortDescription:
			'Former repo for white label digital marketplace used for various clients like McLaren, and Seva.',
		links: [{ to: 'https://github.com/MattZ-2051/infinite-ui-v2-legacy', label: 'GitHub' }],
		logo: Assets.Svelte,
		name: 'Infinite Digital White Label Marketplace',
		skills: getSkills('html','css', 'js', 'svelte'),
	},


];

export const title = 'Projects';

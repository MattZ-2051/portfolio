import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'suku-infiniteworld',
		company: 'SUKU / InfiniteWorld',
		description: `Drove development and implementation of features for front-end applications in Typescript, Svelte with SvelteKit and React with Next.js.
    Collaborated with teams of developers, QA, product management, and stakeholders spanning America and Europe, communicating effectively while progressing through our development cycle.
    Researched and worked with my team to successfully integrate Web3 transactions with services for authentication, payments, and identity verification in a front-end application, pioneering solutions that resulted in a secure and smooth user experience. Crafted an award-winning marketplace platform from concept to production used by McLaren for their digital collectible release. Our team implemented designs that met the high-end standards of this renowned brand. The campaign generated $2.5M and sold out in 72 hours.
    Delivered consistent contributions while adapting and growing as a developer with the fast pace of a startup company environment tackling a wide range of programming, workflow and operation challenges in collaboration with experienced senior peers.
    `,
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date(2021, 2, 1), to: new Date(2022, 11, 31) },
		skills: getSkills(
			'svelte',
			'reactjs',
			'ts',
			'tailwind',
			'vite',
			'css',
			'html',
			'js',
			'aws',
			'jest'
		),
		name: 'Full Stack Developer',
		color: 'blue',
		links: [],
		logo: Assets.Unknown,
		shortDescription:
			'Worked on white label digital marketplaces for various clients. Built award winning product from start to finish and Specialized in integrating web3 functionality into application.'
	}
];

export const title = 'Experience';

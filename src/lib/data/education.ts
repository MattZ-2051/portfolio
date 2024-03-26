import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Bachelor degree of Mechanical Engineering',
		description: '',
		location: 'Tunisia',
		logo: Assets.Unknown,
		name: '',
		organization: 'University of Idaho',
		period: { from: new Date(2018, 9, 1), to: new Date(2020, 2, 1) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ['C++', 'Calc 1 - 3', 'Diff EQ', 'Physics', 'Solidworks', 'MatLab']
	},
	{
		degree: 'Full Stack Development Certificate',
		description: '6 month log 50+ hr / week full time full stack development bootcamp',
		location: 'Remote',
		logo: Assets.Unknown,
		name: '',
		organization: 'App Academy',
		period: { from: new Date(2020, 5, 1), to: new Date(2020, 10, 1) },
		shortDescription: '6 month log 50+ hr / week full time full stack development bootcamp',
		slug: 'dummy-education-item-2',
		subjects: ['React', 'Python', 'Full Stack Development', 'Computer Science', 'Algorithms & Data Structures', 'HTML', 'CSS', 'JS', 'NodeJS', 'Redux', 'PostgreSQL']
	},
  {
		degree: 'Blockchain Development',
		description: '6 month log 50+ hr / week full time blockchain development bootcamp',
		location: 'Remote',
		logo: Assets.Unknown,
		name: '',
		organization: 'Metana',
		period: { from: new Date(2023, 0, 1), to: new Date(2023, 6, 1) },
		shortDescription: '6 month log 50+ hr / week full time blockchain development bootcamp',
		slug: 'dummy-education-item-3',
		subjects: ['Solidity', 'TS', 'Ethereum', 'React', 'EVM', 'Cryptography']
	}
];

export const title = 'Education';

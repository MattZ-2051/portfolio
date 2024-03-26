import { Platform } from '$lib/types';
import { getSkills } from './skills';


export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/MattZ-2051' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/matt-zamora-95b38316b/'
	},
	{
		platform: Platform.Email,
		link: 'mzamora2899@gmail.com'
	},
];

export const skills = getSkills('js', 'css', 'html', 'reactjs', 'sass', 'svelte', 'ts');

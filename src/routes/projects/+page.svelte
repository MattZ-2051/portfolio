<script lang="ts">
	import { items, title } from '@data/projects';

	import CommonPage from '$lib/components/CommonPage.svelte';
	import ProjectCard from '$lib/components/ProjectCard/ProjectCard.svelte';
</script>

<CommonPage {title}>
	<div class="projects-list mt-5">
		{#each items as project}
			<ProjectCard {project} />
		{/each}
	</div>
</CommonPage>

<style lang="scss">
	.projects-list {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 20px;

		@media (max-width: 1350px) {
			grid-template-columns: repeat(2, 1fr);
		}
		@media (max-width: 850px) {
			grid-template-columns: repeat(1, 1fr);
		}
	}
</style>

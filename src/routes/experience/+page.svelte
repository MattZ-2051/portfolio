<script lang="ts">
	import ExperienceCard from '$lib/components/ExperienceCard/ExperienceCard.svelte';
	import UIcon from '$lib/components/Icon/UIcon.svelte';
	import CommonPage from '$lib/components/CommonPage.svelte';
	import { items, title } from '@data/experience';
</script>

<CommonPage {title}>
	<div class="col items-center relative mt-10 flex-1">
		<div
			class="w-[0.5px] hidden lg:flex top-0 bottom-0 py-50px bg-[var(--border)] absolute rounded"
		/>
		{#each items as job, index (job.slug)}
			<div
				class={`flex ${
					index % 2 !== 0 ? 'flex-row' : 'flex-row-reverse'
				} relative items-center w-full my-[10px]`}
			>
				<div class="flex-1 hidden lg:flex" />
				<div class="hidden lg:inline p-15px bg-[var(--main)] rounded">
					<UIcon icon="i-carbon-condition-point" classes="" />
				</div>
				<div class="flex-1 col items-stretch">
					<ExperienceCard experience={job} />
				</div>
			</div>
		{/each}
	</div>
</CommonPage>

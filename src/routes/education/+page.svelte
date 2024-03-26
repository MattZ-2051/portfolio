<script lang="ts">
	import Card from '$lib/components/Card/Card.svelte';
	import Chip from '$lib/components/Chip/Chip.svelte';
	import UIcon from '$lib/components/Icon/UIcon.svelte';
	import { getAssetURL } from '$lib/data/assets';

	import { title, items } from '@data/education';
	import CommonPage from '$lib/components/CommonPage.svelte';
	import { getMonthName } from '$lib/utils';
</script>

<CommonPage {title}>
	<div class="col items-center relative mt-10 flex-1">
		<div
			class="w-[0.5px] hidden lg:flex top-0 bottom-0 py-50px bg-[var(--border)] absolute rounded"
		/>
		{#each items as education, index (education.slug)}
			<div
				class={`flex ${
					index % 2 !== 0 ? 'flex-row' : 'flex-row-reverse'
				} relative items-center w-full my-[10px]`}
			>
				<div class="flex-1 hidden lg:flex" />
				<div class="hidden lg:inline p-15px bg-[var(--main)] rounded">
					<UIcon icon="i-carbon-condition-point" />
				</div>
				<div class="col flex-1 items-stretch">
					<Card>
						<div class="flex-1 col gap-2 items-stretch">
							<img
								src={getAssetURL(education.logo)}
								alt={education.organization}
								height="50"
								width="50"
								class="mb-5"
							/>
							<div class="text-[1.3em]">{education.degree}</div>
							<div>{education.organization}</div>
							<div class="text-[var(--accent-text)] text-[0.9em] font-200 mb-2">
								{education.location} · {getMonthName(education.period.from.getMonth())}
								{education.period.from.getFullYear()} to
								{education.period.to && getMonthName(education.period.to.getMonth())}
								{education.period.to && education.period.to.getFullYear()}
							</div>
							<div class="row flex-wrap gap-1">
								{#each education.subjects as subject}
									<Chip>{subject}</Chip>
								{/each}
							</div>
						</div>
					</Card>
				</div>
			</div>
		{/each}
	</div>
</CommonPage>

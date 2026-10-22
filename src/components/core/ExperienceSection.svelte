<script>
	import { EXPERIENCES } from '../../api/constants';
	import Section from '../common/Section.svelte';
	import SectionHeading from '../common/SectionHeading.svelte';
	import Wave from '../common/Wave.svelte';
	import ButtonAnimation from '../common/ButtonAnimation.svelte';
	import Button from '../common/Button.svelte';
	import Row from '../common/Row.svelte';
	import Col from '../common/Col.svelte';
</script>

<Section id="experience">
	<div class="container">
		<SectionHeading>Experience</SectionHeading>
		{#each EXPERIENCES as experience, i}
			<div class="container py-1">
				<Row class="flex-col-reverse items-center {i % 2 ? 'sm:flex-row-reverse' : 'sm:flex-row'}">
					<Col sm={6} class="px-3!">
						<h5 class="text-[1.5rem] font-normal tracking-[1px] text-text">
							<span>{experience.company}</span>
						</h5>
						<h2 class="my-1 font-bold">
							<span>{experience.name}</span>
						</h2>
						<h5 class="text-[1.5rem] font-normal tracking-[1px] text-text">
							<span>{experience.fromDate} - {experience.toDate}</span>
						</h5>
						<p class="mt-2 mb-3">
							{experience.description}
						</p>
						<div class="*:mr-1 *:mb-1">
							{#each experience.actions as action}
								<Button href={action.href} target="_blank" rel="noopener noreferrer" kind="outline">
									<ButtonAnimation direction="ttb">
										<span class="ml-auto material-symbols-outlined">arrow_forward</span>
									</ButtonAnimation>

									<span>{action.text}</span>
								</Button>
							{/each}
						</div>
					</Col>

					<Col sm={6}>
						<img
							class="size-full {experience.invertInLightMode ? 'not-dark:invert' : ''}"
							alt={experience.company}
							src={experience.image}
						/>
					</Col>
				</Row>
			</div>
		{/each}
	</div>

	<Wave color="neutral-light" />
</Section>

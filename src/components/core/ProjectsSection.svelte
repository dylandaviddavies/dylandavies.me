<script>
	import { PROJECTS } from '../../api/constants';
	import ButtonAnimation from '../common/ButtonAnimation.svelte';
	import Section from '../common/Section.svelte';
	import Button from '../common/Button.svelte';
	import SectionHeading from '../common/SectionHeading.svelte';
	import Wave from '../common/Wave.svelte';
	import Row from '../common/Row.svelte';
	import Col from '../common/Col.svelte';
</script>

<Section id="projects" class="bg-neutral-light">
	<div class="container">
		<SectionHeading>Projects</SectionHeading>
		{#each PROJECTS as project, i}
			<div class="container py-12">
				<Row class="flex-col-reverse items-center {i % 2 ? 'sm:flex-row-reverse' : 'sm:flex-row'}">
					<Col sm={6} class="px-3!">
						<h5 class="text-[1.5rem] font-normal tracking-[1px] text-text">
							<span>{project.nature}</span>
						</h5>
						<h2 class="my-1 font-bold">
							<span>{project.name}</span>
						</h2>
						{#if project.role && project.company}
							<div>
								<span>{project.role} · {project.company}</span>
							</div>
						{/if}
						<p class="mt-2 mb-3">
							{project.description}
						</p>
						<div class="*:mr-1 *:mb-1">
							{#each project.actions as action}
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
						<img class="size-full" alt={project.name} src={project.image} />
					</Col>
				</Row>
			</div>
		{/each}
	</div>

	<Wave color="light" />
</Section>

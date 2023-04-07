<script lang="ts">
	import '../stylesheets/index.scss';
	import 'material-icons/iconfont/material-icons.css';
	import Section from '../components/Section.svelte';
	import Button from '../components/Button.svelte';
	import ButtonAnimation from '../components/ButtonAnimation.svelte';
	import SectionHeading from '../components/SectionHeading.svelte';
	import SectionSubheading from '../components/SectionSubheading.svelte';
	import { PROJECTS } from '../api/constants';
</script>

<Section id="home">
	<h1 class="text-center mb-6">Hi, I'm Dylan Davies <br /> I'm a full stack developer.</h1>

	<Button href="#about" variation="outline">
		<ButtonAnimation direction="ttb">
			<span class="ml-auto material-icons-round">arrow_downward</span>
		</ButtonAnimation>
		<span>Let's make something great!</span>
	</Button>

	<div class="dd-wave dd-wave--neutral" />
</Section>

<Section id="about" class="bg-neutral-light">
	<SectionHeading>About</SectionHeading>

	<Button href="#projects" variation="outline">
		<ButtonAnimation direction="ttb">
			<span class="ml-auto material-icons-round">arrow_downward</span>
		</ButtonAnimation>
		<span>Check out some of my work!</span>
	</Button>

	<div class="dd-wave dd-wave--light" />
</Section>

<Section id="projects">
	<SectionHeading>Projects</SectionHeading>
	<SectionSubheading>A collection of projects I've worked on.</SectionSubheading>

	{#each PROJECTS as project, i}
		<div class="dd-exhibit {i % 2 ? 'dd-exhibit--rtl' : ''}">
			<div>
				<h5 class="dd-exhibit__header">
					<span>{project.nature}</span>
				</h5>
				<h3 class="dd-exhibit__heading">
					<span>{project.name}</span>
				</h3>
				{#if project.role && project.company}
					<div class="dd-exhibit__subheading">
						<span>{project.role} · {project.company}</span>
					</div>
				{/if}
				<p class="dd-exhibit__text">
					{project.description}
				</p>
				<div class="dd-exhibit__actions">
					{#each project.actions as action}
						<Button
							href={action.href}
							target="_blank"
							rel="noopener noreferrer"
							variation="outline"
						>
							<ButtonAnimation direction="ttb">
								<span class="ml-auto material-icons-round">arrow_forward</span>
							</ButtonAnimation>
							<span>{action.text}</span>
						</Button>
					{/each}
				</div>
			</div>

			<img class="dd-exhibit__image" alt={project.name} src={project.image} />
		</div>
	{/each}

	<div class="dd-wave dd-wave--dark" />
</Section>

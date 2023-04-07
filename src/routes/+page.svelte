<script lang="ts">
	import '../stylesheets/index.scss';
	import 'material-icons/iconfont/material-icons.css';
	import Section from '../components/Section.svelte';
	import Button from '../components/Button.svelte';
	import ButtonAnimation from '../components/ButtonAnimation.svelte';
	import SectionHeading from '../components/SectionHeading.svelte';
	import SectionSubheading from '../components/SectionSubheading.svelte';
	import type { Project } from '../models/Project';
	import occ from '../assets/images/occ.png';
	import outcome from '../assets/images/outcome.png';
	import theorbiscommunityofpractice from '../assets/images/theorbiscommunityofpractice.png';
	import vstock from '../assets/images/vstock.png';
	import dylandavies from '../assets/images/dylandavies.png';
	import tamsin from '../assets/images/tamsinio.png';
	import zuri from '../assets/images/zuricom.png';
	import design3 from '../assets/images/design3.png';

	const PROJECTS: Project[] = [
		{
			nature: 'Professional',
			name: 'Outcome Campus Connect',
			role: 'Full Stack Developer',
			company: 'Orbis Communications',
			description:
				'The free experiential learning and recruitment solution available to all post-secondary institutions, post-secondary students, and employers in Canada.',
			image: occ,
			actions: [{ text: 'Visit Outcome Campus Connect', href: 'https://outcomecampusconnect.ca' }]
		},
		{
			nature: 'Professional',
			name: 'Outcome',
			role: 'Full Stack Developer',
			company: 'Orbis Communications',
			description:
				'The experiential learning solution most trusted by 100+ North American post-secondary institutions.',
			image: outcome,
			actions: [
				{ text: 'Learn more about Outcome', href: 'https://orbiscommunications.com/outcome' }
			]
		},
		{
			nature: 'Professional',
			name: 'The Orbis Community of Practice',
			role: 'Front-End Developer',
			company: 'Orbis Communications',
			description:
				'A venue to discuss and share best practices, find out about the latest product developments, and communicate ideas related to Orbis products.',
			image: theorbiscommunityofpractice,
			actions: [{ text: 'Learn more', href: 'https://orbiscommunications.com/outcome' }]
		},
		{
			nature: 'Personal',
			name: 'vstock',
			description:
				'A stock analysis platform with a Vue, Sass, and TypeScript front-end connecting to a Java API.',
			image: vstock,
			actions: [
				{
					text: 'Visit website',
					href: 'https://dylandaviddavies.github.io/vstock'
				},
				{
					text: 'View code',
					href: 'https://github.com/dylandaviddavies/vstock'
				}
			]
		},
		{
			nature: 'Personal',
			name: 'dylandavies.me',
			description: 'My personal website.',
			image: dylandavies,
			actions: [
				{
					text: 'Visit website',
					href: 'https://dylandaviddavies.github.io/vstock'
				},
				{
					text: 'View code',
					href: 'https://github.com/dylandaviddavies/vstock'
				}
			]
		},
		{
			nature: 'Personal',
			name: 'tamsin.io',
			description:
				'A vector-heavy website mockup for a music streaming platform using Vue and Sass.',
			image: tamsin,
			actions: [
				{
					text: 'Visit website',
					href: 'https://dylandaviddavies.github.io/tamsin.io'
				},
				{
					text: 'View code',
					href: 'https://github.com/dylandaviddavies/tamsin.io'
				}
			]
		},
		{
			nature: 'Personal',
			name: 'zuri.com',
			description: 'A job posting board mockup using React and Sass.',
			image: zuri,
			actions: [
				{
					text: 'Visit website',
					href: 'https://dylandaviddavies.github.io/zuri.com'
				},
				{
					text: 'View code',
					href: 'https://github.com/dylandaviddavies/zuri.com'
				}
			]
		},
		{
			nature: 'Personal',
			name: 'design3',
			description: 'An illustration-heavy website mockup for a software company.',
			image: design3,
			actions: [
				{
					text: 'Visit website',
					href: 'https://dylandaviddavies.github.io/design3'
				},
				{
					text: 'View code',
					href: 'https://github.com/dylandaviddavies/design3'
				}
			]
		}
	];
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

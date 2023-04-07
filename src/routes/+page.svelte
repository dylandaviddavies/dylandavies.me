<script lang="ts">
	import '../stylesheets/index.scss';
	import 'material-icons/iconfont/material-icons.css';
	import Section from '../components/Section.svelte';
	import Button from '../components/Button.svelte';
	import ButtonAnimation from '../components/ButtonAnimation.svelte';
	import SectionHeading from '../components/SectionHeading.svelte';
	import { PROJECTS } from '../api/constants';
	import logoWhite from '../assets/images/logo-white.svg';
</script>

<Section id="home" class="py-0 justify-content-center">
	<div class="container">
		<h1 class="mb-5">Hi, I'm Dylan Davies. <br /> I'm a full stack developer.</h1>

		<Button href="#about" variation="outline">
			<ButtonAnimation direction="ttb">
				<span class="ml-auto material-icons-round">arrow_downward</span>
			</ButtonAnimation>
			<span>Let's make something great!</span>
		</Button>
	</div>

	<div class="dd-wave dd-wave--neutral" />
</Section>

<Section id="about" class="bg-neutral-light justify-content-center">
	<div class="container">
		<SectionHeading>About</SectionHeading>

		<div class="row">
			<div class="col-sm-5 col-12 mb-5 mt-1">
				<p>
					Heyo! I'm Dylan and I love creating things for the internet!
					<br />
					<br />
					My career started back in 2013 and since then I've accumulated a large catalogue of projects
					and experience.
					<br />
					<br />
					Whether it be Twitter bots with thousands of followers, experiential education software for
					a startup, or a complex data analytics platform for a large organization, I've sure built and
					shipped a lot of cool stuff!
				</p>
			</div>

			<div class="col-12">
				<Button href="#projects" variation="outline">
					<ButtonAnimation direction="ttb">
						<span class="ml-auto material-icons-round">arrow_downward</span>
					</ButtonAnimation>

					<span>Check out some of my work!</span>
				</Button>
			</div>
		</div>
	</div>

	<div class="dd-wave dd-wave--light" />
</Section>

<Section id="projects">
	<div class="container">
		<SectionHeading>Projects</SectionHeading>
		{#each PROJECTS as project, i}
			<div class="dd-exhibit container">
				<div class="row align-items-center" class:flex-row-reverse={i % 2}>
					<div class="col-sm-6 px-3">
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

					<div class="col-sm-6 col-12">
						<img class="dd-exhibit__image" alt={project.name} src={project.image} />
					</div>
				</div>
			</div>
		{/each}
	</div>

	<div class="dd-wave dd-wave--neutral" />
</Section>

<Section id="contact" class="bg-neutral-light">
	<div class="container text-center" style="max-width: 600px">
		<div class="mb-10">
			<SectionHeading>Let's Get In Touch</SectionHeading>

			<p class="text-center mt-4 mb-7">
				Although I’m not currently looking for any new opportunities, my inbox is always open.
				Whether you have a question or just want to say hi, I’ll try my best to get back to you!
			</p>

			<Button variation="outline" href="mailto:dylandaviddavies@gmail.com">
				<ButtonAnimation direction="rtl"><span class="ml-auto">👋</span></ButtonAnimation>

				<span class="d-inline-flex align-items-center"> Say Hello </span>
			</Button>
		</div>

		<div>
			<h3 class="mb-2">Follow Me</h3>
			<div class="my-1">
				<a
					class="dd-social-link mr-4"
					href="https://www.linkedin.com/in/dylandaviddavies/"
					title="LinkedIn"
					aria-label="LinkedIn"
					target="_blank"
					rel="noopener"
				>
					<i class="fab fa-linkedin" aria-hidden="true" />
				</a>
				<a
					class="dd-social-link mr-4"
					href="https://github.com/dylandaviddavies"
					title="GitHub"
					aria-label="GitHub"
					target="_blank"
					rel="noopener"
				>
					<i class="fab fa-github" aria-hidden="true" />
				</a>
				<a
					class="dd-social-link"
					href="https://codepen.io/DylanDavidDavies/"
					title="CodePen"
					aria-label="CodePen"
					target="_blank"
					rel="noopener"
				>
					<i class="fab fa-codepen" aria-hidden="true" />
				</a>
			</div>
		</div>
	</div>

	<div class="dd-wave dd-wave--dark" />
</Section>

<footer class="dd-footer">
	<img src={logoWhite} alt="Dylan Davies" class="dd-footer__logo" />
	<div class="d-flex justify-content-center">
		<div class="mr-5">
			<span class="dd-footer__heading">Navigation</span>
			<ul class="dd-footer__list">
				<li>
					<a href="#home" class="dd-footer__link">Home</a>
				</li>
				<li>
					<a href="#about" class="dd-footer__link">About</a>
				</li>
				<li>
					<a href="#projects" class="dd-footer__link">Projects</a>
				</li>
				<li>
					<a href="#contact" class="dd-footer__link">Contact</a>
				</li>
			</ul>
		</div>
		<div>
			<span class="dd-footer__heading">Follow Me</span>
			<ul class="dd-footer__list d-flex">
				<li class="mr-2">
					<a
						class="dd-footer__link"
						href="https://www.linkedin.com/in/dylandaviddavies/"
						title="LinkedIn"
						aria-label="LinkedIn"
						target="_blank"
						rel="noopener"
					>
						<i class="fab fa-linkedin" aria-hidden="true" />
					</a>
				</li>
				<li class="mr-2">
					<a
						class="dd-footer__link"
						href="https://github.com/dylandaviddavies"
						title="GitHub"
						aria-label="GitHub"
						target="_blank"
						rel="noopener"
					>
						<i class="fab fa-github" aria-hidden="true" />
					</a>
				</li>
				<li>
					<a
						class="dd-footer__link"
						href="https://codepen.io/DylanDavidDavies/"
						title="CodePen"
						aria-label="CodePen"
						target="_blank"
						rel="noopener"
					>
						<i class="fab fa-codepen" aria-hidden="true" />
					</a>
				</li>
			</ul>
		</div>
	</div>
	<span class="py-3">Designed & Built by Dylan Davies</span>
</footer>

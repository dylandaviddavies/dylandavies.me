<script>
	import ButtonAnimation from '../common/ButtonAnimation.svelte';
	import Section from '../common/Section.svelte';
	import Button from '../common/Button.svelte';
	import SectionHeading from '../common/SectionHeading.svelte';
	import Wave from '../common/Wave.svelte';
</script>

<Section id="contact" class="bg-neutral-light justify-content-center">
	<div class="container text-center" style="max-width: 600px">
		<div class="mb-10">
			<SectionHeading>Let's Get In Touch</SectionHeading>

			<p class="text-center mt-4 mb-7">
				Although I’m not currently looking for any new opportunities, my inbox is always open.
				Whether you have a question or just want to say hi, I’ll try my best to get back to you!
			</p>

			<Button kind="outline" href="mailto:dylandaviddavies@gmail.com">
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

	<Wave color="dark" />
</Section>

<script>
	import ButtonAnimation from '../common/ButtonAnimation.svelte';
	import Section from '../common/Section.svelte';
	import Button from '../common/Button.svelte';
	import SectionHeading from '../common/SectionHeading.svelte';
</script>

<Section id="about" class="bg-neutral-light justify-content-center">
	<div class="container">
		<SectionHeading>About</SectionHeading>

		<div class="row">
			<div class="col-sm-5 col-12 mb-5 mt-1">
				<p>
					Heyo! I'm Dylan and I create things for the internet as a full stack developer!
					<br />
					<br />
					My career started back in 2013 and since then I've accumulated a large catalogue of projects
					and experience.
					<br />
					<br />
					Whether it be Twitter bots with thousands of followers, experiential education software for
					a startup, or a complex data analytics platform for a large organization, I've built and shipped
					a lot of cool stuff!
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

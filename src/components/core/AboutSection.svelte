<script>
	import ButtonAnimation from '../common/ButtonAnimation.svelte';
	import Section from '../common/Section.svelte';
	import Button from '../common/Button.svelte';
	import SectionHeading from '../common/SectionHeading.svelte';
	import Wave from '../common/Wave.svelte';
	import Row from '../common/Row.svelte';
	import Col from '../common/Col.svelte';
</script>

<Section id="about" class="justify-center bg-neutral-light">
	<div class="container">
		<SectionHeading>About</SectionHeading>

		<Row>
			<Col sm={5} class="mt-1 mb-5">
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
			</Col>

			<Col>
				<Button href="#experience" kind="outline">
					<ButtonAnimation direction="ttb">
						<span class="ml-auto material-symbols-outlined">arrow_downward</span>
					</ButtonAnimation>

					<span>Check out my experience!</span>
				</Button>
			</Col>
		</Row>
	</div>

	<Wave color="light" />
</Section>

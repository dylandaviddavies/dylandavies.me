<script>
	import ButtonAnimation from '../common/ButtonAnimation.svelte';
	import Section from '../common/Section.svelte';
	import Button from '../common/Button.svelte';
	import Wave from '../common/Wave.svelte';
</script>

<Section id="home" class="py-0 justify-content-center text-sm-left text-center">
	<div class="container">
		<h1 class="mb-5">
			Hi, I'm Dylan Davies. <br /> I'm a full stack developer.
		</h1>

		<Button href="#about" kind="outline">
			<ButtonAnimation direction="ttb">
				<span class="ml-auto material-symbols-outlined">arrow_downward</span>
			</ButtonAnimation>
			<span>Let's make something great!</span>
		</Button>
	</div>

	<Wave color="neutral-light" />
</Section>

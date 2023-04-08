<script>
	import ButtonAnimation from '../common/ButtonAnimation.svelte';
	import Section from '../common/Section.svelte';
	import Button from '../common/Button.svelte';
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

<script>
	import '../stylesheets/index.scss';
	import 'material-icons/iconfont/material-icons.css';
	import Section from '../components/Section.svelte';
	import Button from '../components/Button.svelte';
	import ButtonAnimation from '../components/ButtonAnimation.svelte';
</script>

<Section>
	<h1 class="text-center mb-6">Hi, I'm Dylan Davies <br /> I'm a full stack developer.</h1>

	<Button href="#about" variation="outline">
		<ButtonAnimation direction="ttb">
			<span class="ml-auto material-icons-round">arrow_downward</span>
		</ButtonAnimation>
		<span>Let's make something great!</span>
	</Button>
</Section>

<script>
	import { Meta, Story } from '@storybook/addon-svelte-csf';
</script>

<Meta title="Components/Color" />

<Story name="Theme">
	<div class="theme-light bg-background mb-2 p-2">
		<h2>theme-light</h2>
		<p>Lorem ipsum</p>
	</div>

	<div class="theme-dark bg-background mb-2 p-2">
		<h2>theme-dark</h2>
		<p>Lorem ipsum</p>
	</div>
</Story>

<Story name="Text">
	<h1 class="text-primary">text-primary</h1>
	<h1 class="text-disabled">text-disabled</h1>
	<h1 class="text-neutral-dark">text-neutral-dark</h1>
</Story>

<Story name="Backgrounds">
	<p class="bg-primary mb-1 p-2">bg-primary</p>
	<p class="bg-disabled mb-1 p-2">bg-disabled</p>
	<p class="bg-neutral-dark mb-1 p-2">bg-neutral-dark</p>
</Story>

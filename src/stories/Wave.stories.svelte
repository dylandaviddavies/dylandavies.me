<script>
	import { Meta, Story } from '@storybook/addon-svelte-csf';
	import Wave from '../components/common/Wave.svelte';
</script>

<Meta title="Components/Wave" component={Wave} />

<Story name="SvelteBasic">
	<div style="height: 300px">
		<Wave color="primary" />
	</div>
</Story>

<Story name="CssBasic">
	<div style="height: 300px">
		<div class="dd-wave text-neutral" />
	</div>
</Story>

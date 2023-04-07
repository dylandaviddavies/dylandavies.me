<script lang="ts">
	export let href: string | undefined = undefined;
	export let tag = href == null ? 'button' : 'a';
	export let color: string = 'primary';
	export let variation: 'text' | 'flat' | 'outline' | undefined = 'text';
	export let type: string = 'button';
</script>

<svelte:element
	this={tag}
	class="dd-button dd-button--{color} dd-button--{variation}"
	{href}
	{type}
>
	<slot />
</svelte:element>

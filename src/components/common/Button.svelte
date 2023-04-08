<script lang="ts">
	export let href: string | undefined = undefined;
	export let tag = href == null ? 'button' : 'a';
	export let color: string = 'primary';
	export let kind: 'text' | 'flat' | 'outline' | undefined = 'text';
	export let type: string = 'button';
	export let target: string | undefined = undefined;
	export let rel: string | undefined = undefined;
	export let disabled: boolean = false;
</script>

<svelte:element
	this={tag}
	class="dd-button dd-button--{color} dd-button--{kind}"
	{disabled}
	{href}
	{type}
	{target}
	{rel}
>
	<slot />
</svelte:element>

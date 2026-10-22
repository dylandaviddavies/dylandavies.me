<script lang="ts">
	export let href: string | undefined = undefined;
	export let tag = href == null ? 'button' : 'a';
	export let color: string = 'primary';
	export let kind: 'text' | 'flat' | 'outline' | undefined = 'text';
	export let type: string = 'button';
	export let target: string | undefined = undefined;
	export let rel: string | undefined = undefined;
	export let disabled: boolean = false;

	const kinds = {
		text: 'border-none bg-transparent text-(--btn)',
		flat: 'border-2 border-(--btn) bg-(--btn) text-(--btn-text) disabled:border-disabled disabled:bg-disabled',
		outline: 'border-2 border-(--btn) bg-transparent text-(--btn) disabled:border-disabled'
	};
</script>

<svelte:element
	this={tag}
	class="group relative inline-flex h-7 items-center justify-center overflow-hidden px-6 text-[2rem] font-semibold no-underline transition-[border-color,background,color] duration-500 ease-button disabled:cursor-default disabled:text-disabled-text *:relative *:z-1 *:transition-colors *:duration-500 *:ease-button hocus:[&>.dd-button-animation~*]:text-(--btn-text) {kind
		? kinds[kind]
		: ''}"
	style="--btn: var(--color-{color}); --btn-text: var(--color-{color}-text)"
	{disabled}
	{href}
	{type}
	{target}
	{rel}
>
	<slot />
</svelte:element>

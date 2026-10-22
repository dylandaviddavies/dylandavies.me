<script lang="ts">
	export let visible = false;
	export let id = '';
	let className = '';
	export { className as class };
</script>

<div
	{id}
	class="fixed top-0 left-0 z-20 size-full {visible
		? 'pointer-events-auto'
		: 'pointer-events-none'} {className}"
	aria-hidden={!visible}
	aria-label="Sidebar menu"
>
	<aside
		class="absolute top-0 left-0 z-21 size-full bg-dark shadow-[0_0_20px_rgba(0,0,0,0.3)] {visible
			? 'translate-x-0 opacity-100 [transition:translate_0.4s]'
			: '-translate-x-full opacity-0 [transition:translate_0.4s,opacity_0s_linear_0.4s]'}"
		tabindex="-1"
	>
		<slot />
	</aside>
</div>

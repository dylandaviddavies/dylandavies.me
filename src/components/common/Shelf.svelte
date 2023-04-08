<script lang="ts">
	export let visible: boolean = false;
	export let id: string = '';
	let className: string = '';
	export { className as class };
</script>

<div
	{id}
	class="dd-shelf {className}"
	class:dd-shelf--visible={visible}
	aria-hidden={!visible}
	aria-label="Sidebar menu"
>
	<aside class="dd-shelf__drawer" tabindex="-1">
		<slot />
	</aside>
</div>

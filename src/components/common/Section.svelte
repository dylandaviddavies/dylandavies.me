<script lang="ts">
	export let id: string = '';

	let className: string = '';
	export { className as class };
</script>

<section {id} class="dd-section {className}">
	<slot />
</section>

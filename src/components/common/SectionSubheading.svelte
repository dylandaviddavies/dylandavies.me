<script lang="ts">
	let className = '';
	export { className as class };
</script>

<p class="text-neutral mt-12 h4 text-center {className}">
	<slot />
</p>

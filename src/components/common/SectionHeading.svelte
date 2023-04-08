<script lang="ts">
	let className: string = '';
	export { className as class };
</script>

<div class="d-flex flex-column {className}">
	<h2 class="h1 mb-1">
		<slot />
	</h2>
</div>

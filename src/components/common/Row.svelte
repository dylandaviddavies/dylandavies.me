<script lang="ts">
	let className: string = '';
	export { className as class };
</script>

<div class="-mx-0.75 flex flex-wrap {className}">
	<slot />
</div>

<script lang="ts">
	export let id: string = '';

	let className: string = '';
	export { className as class };
</script>

<section
	{id}
	class="relative flex min-h-screen flex-col items-start overflow-hidden pt-10 pb-30 {className}"
>
	<slot />
</section>

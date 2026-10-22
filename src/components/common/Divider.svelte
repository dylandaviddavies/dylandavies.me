<script lang="ts">
	export let size: 'sm' | 'md' = 'md';

	const sizes = {
		sm: 'w-5 h-[0.3rem]',
		md: 'w-9 h-[0.4rem]'
	};
</script>

<div class="block bg-dark {sizes[size]}" />

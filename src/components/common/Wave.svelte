<script lang="ts">
	export let color: string = '';
</script>

<div
	class="pointer-events-none absolute right-0 -bottom-[2px] left-0 h-[20vh] min-h-[200px] w-full animate-wave bg-current mask-[url(/assets/images/wave.svg)] mask-bottom mask-repeat-x"
	style:color={color ? `var(--color-${color})` : undefined}
/>

<script lang="ts">
	export let direction: 'ltr' | 'ttb' | 'btt' | 'rtl' = 'rtl';
	export let color: string = 'primary';

	const directions = {
		ltr: 'scale-x-0 origin-right group-hocus:origin-left group-hocus:scale-x-100',
		rtl: 'scale-x-0 origin-left group-hocus:origin-right group-hocus:scale-x-100',
		ttb: 'scale-y-0 origin-bottom group-hocus:origin-top group-hocus:scale-y-100',
		btt: 'scale-y-0 origin-top group-hocus:origin-bottom group-hocus:scale-y-100'
	};
</script>

<!-- `dd-button-animation` is a marker Button uses to recolour the content after it on hover -->
<div
	class="dd-button-animation pointer-events-none absolute! -inset-[5px] z-0! flex flex-col items-center justify-center px-2 transition-transform! duration-500 ease-button {directions[
		direction
	]}"
	style:background-color="var(--color-{color})"
	style:color="var(--color-{color}-text)"
>
	<slot />
</div>

<script lang="ts">
	type Span = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

	// Columns out of 12 from each breakpoint up; full width below the smallest one set
	export let sm: Span | undefined = undefined;
	export let md: Span | undefined = undefined;
	export let lg: Span | undefined = undefined;

	let className: string = '';
	export { className as class };

	const width = (span: Span | undefined) => (span ? `${(span / 12) * 100}%` : undefined);
</script>

<div
	class="w-full shrink-0 px-0.75 {sm ? 'sm:w-(--col-sm)' : ''} {md ? 'md:w-(--col-md)' : ''} {lg
		? 'lg:w-(--col-lg)'
		: ''} {className}"
	style:--col-sm={width(sm)}
	style:--col-md={width(md)}
	style:--col-lg={width(lg)}
>
	<slot />
</div>

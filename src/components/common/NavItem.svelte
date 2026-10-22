<script lang="ts">
	export let href: string = '';
</script>

<li>
	<a
		class="mx-3 text-xs font-medium tracking-[1px] text-neutral uppercase transition-colors duration-200 hocus:text-neutral-dark"
		{href}
	>
		<slot />
	</a>
</li>

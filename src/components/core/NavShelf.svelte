<script lang="ts">
	import Shelf from '../common/Shelf.svelte';

	let visible = false;

	const id = 'navShelf';

	const links = [
		{ href: '#home', text: 'Home' },
		{ href: '#about', text: 'About' },
		{ href: '#experience', text: 'Experience' },
		{ href: '#projects', text: 'Projects' },
		{ href: '#contact', text: 'Contact' }
	];
</script>

<button
	class="pointer-events-auto fixed top-[16px] left-[16px] z-99 inline-flex border-none bg-transparent text-dark transition-colors duration-200 aria-expanded:text-light md:aria-[expanded=false]:hidden"
	aria-expanded={visible}
	aria-controls={id}
	type="button"
	on:click={() => (visible = !visible)}
>
	<i class="material-symbols-outlined">menu</i>
</button>

<Shelf {id} {visible}>
	<ul class="flex h-full list-none flex-col items-center justify-center px-3 py-7">
		{#each links as link}
			<li>
				<a
					class="block p-2 text-center text-[3rem] font-medium tracking-[4px] text-light uppercase transition-colors duration-200 hocus:bg-dark hocus:text-light"
					href={link.href}
					aria-expanded={visible}
					aria-controls={id}
					on:click={() => (visible = false)}
				>
					{link.text}
				</a>
			</li>
		{/each}
	</ul>
</Shelf>

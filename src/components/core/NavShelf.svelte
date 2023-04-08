<script lang="ts">
	import Shelf from '../common/Shelf.svelte';

	let visible: boolean = false;

	const id: string = 'navShelf';
</script>

<button
	class="dd-nav-shelf__toggle-button"
	aria-expanded={visible}
	aria-controls={id}
	type="button"
	on:click={() => (visible = !visible)}
>
	<i class="material-icons material-icons-round">menu</i>
</button>

<Shelf {id} {visible} class="dd-nav-shelf">
	<ul>
		<li>
			<a href="#home" aria-expanded={visible} aria-controls={id} on:click={() => (visible = false)}>
				Home
			</a>
		</li>
		<li>
			<a
				href="#about"
				aria-expanded={visible}
				aria-controls={id}
				on:click={() => (visible = false)}
			>
				About
			</a>
		</li>
		<li>
			<a
				href="#projects"
				aria-expanded={visible}
				aria-controls={id}
				on:click={() => (visible = false)}
			>
				Projects
			</a>
		</li>
		<li>
			<a
				href="#contact"
				aria-expanded={visible}
				aria-controls="navShelf"
				on:click={() => (visible = false)}
			>
				Contact
			</a>
		</li>
	</ul>
</Shelf>

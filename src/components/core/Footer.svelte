<script>
	const headingClass = 'mb-1 block text-[1.5rem] font-bold uppercase';
	const listClass = 'list-none p-0';
	const linkClass =
		'mb-1 block text-sm font-medium text-neutral transition-colors duration-200 hocus:text-neutral-dark';
</script>

<footer
	class="relative flex w-full flex-col items-center overflow-x-hidden bg-dark px-4 pb-4 text-sm font-medium text-neutral"
>
	<div
		class="mb-5 h-7 w-[300px] bg-light mask-[url(/assets/images/logo.svg)] mask-center mask-no-repeat"
	/>
	<div class="flex justify-center">
		<div class="mr-5">
			<span class={headingClass}>Navigation</span>
			<ul class={listClass}>
				<li>
					<a href="#home" class={linkClass}>Home</a>
				</li>
				<li>
					<a href="#about" class={linkClass}>About</a>
				</li>
				<li>
					<a href="#experience" class={linkClass}>Experience</a>
				</li>
				<li>
					<a href="#projects" class={linkClass}>Projects</a>
				</li>
				<li>
					<a href="#contact" class={linkClass}>Contact</a>
				</li>
			</ul>
		</div>
		<div>
			<span class={headingClass}>Follow Me</span>
			<ul class="flex {listClass}">
				<li class="mr-2">
					<a
						class={linkClass}
						href="https://www.linkedin.com/in/dylandaviddavies/"
						title="LinkedIn"
						aria-label="LinkedIn"
						target="_blank"
						rel="noopener"
					>
						<i class="text-xl fab fa-linkedin" aria-hidden="true" />
					</a>
				</li>
				<li class="mr-2">
					<a
						class={linkClass}
						href="https://github.com/dylandaviddavies"
						title="GitHub"
						aria-label="GitHub"
						target="_blank"
						rel="noopener"
					>
						<i class="text-xl fab fa-github" aria-hidden="true" />
					</a>
				</li>
				<li>
					<a
						class={linkClass}
						href="https://codepen.io/DylanDavidDavies/"
						title="CodePen"
						aria-label="CodePen"
						target="_blank"
						rel="noopener"
					>
						<i class="text-xl fab fa-codepen" aria-hidden="true" />
					</a>
				</li>
			</ul>
		</div>
	</div>
	<span class="py-3">Designed & Built by Dylan Davies</span>
</footer>

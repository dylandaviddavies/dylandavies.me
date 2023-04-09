<script lang="ts">
	import '../stylesheets/index.scss';
	import Nav from '../components/common/Nav.svelte';
	import NavItem from '../components/common/NavItem.svelte';
	import NavShelf from '../components/core/NavShelf.svelte';
	import AboutSection from '../components/core/AboutSection.svelte';
	import HomeSection from '../components/core/HomeSection.svelte';
	import ProjectsSection from '../components/core/ProjectsSection.svelte';
	import Footer from '../components/core/Footer.svelte';
	import ContactSection from '../components/core/ContactSection.svelte';

	(() => document.body.classList.remove('no-transition'))();
</script>

<NavShelf />

<Nav>
	<NavItem href="#home">Home</NavItem>
	<NavItem href="#about">About</NavItem>
	<NavItem href="#project">Projects</NavItem>
	<NavItem href="#contact">Contact</NavItem>
</Nav>

<HomeSection />

<AboutSection />

<ProjectsSection />

<ContactSection />

<Footer />

<script lang="ts">
	import Nav from '../components/common/Nav.svelte';
	import NavItem from '../components/common/NavItem.svelte';
	import NavShelf from '../components/core/NavShelf.svelte';
	import AboutSection from '../components/core/AboutSection.svelte';
	import HomeSection from '../components/core/HomeSection.svelte';
	import ProjectsSection from '../components/core/ProjectsSection.svelte';
	import Footer from '../components/core/Footer.svelte';
	import ContactSection from '../components/core/ContactSection.svelte';
	import Header from '../components/common/Header.svelte';
</script>

<NavShelf />

<Header>
	<Nav>
		<NavItem href="#home">Home</NavItem>
		<NavItem href="#about">About</NavItem>
		<NavItem href="#projects">Projects</NavItem>
		<NavItem href="#contact">Contact</NavItem>
	</Nav>
</Header>

<HomeSection />

<AboutSection />

<ProjectsSection />

<ContactSection />

<Footer />

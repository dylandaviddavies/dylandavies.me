<script>
	import { PROJECTS } from "../../api/constants";
	import ButtonAnimation from "../common/ButtonAnimation.svelte";
	import Section from "../common/Section.svelte";
	import Button from "../common/Button.svelte";
	import SectionHeading from "../common/SectionHeading.svelte";
	import Wave from "../common/Wave.svelte";
</script>

<Section id="projects" class="bg-neutral-light">
  <div class="container">
    <SectionHeading>Projects</SectionHeading>
    {#each PROJECTS as project, i}
      <div class="dd-exhibit container">
        <div
          class="row align-items-center flex-sm-row flex-column-reverse"
          class:flex-sm-row-reverse={i % 2}
        >
          <div class="col-sm-6 px-3">
            <h5 class="dd-exhibit__header">
              <span>{project.nature}</span>
            </h5>
            <h2 class="dd-exhibit__heading">
              <span>{project.name}</span>
            </h2>
            {#if project.role && project.company}
              <div class="dd-exhibit__subheading">
                <span>{project.role} · {project.company}</span>
              </div>
            {/if}
            <p class="dd-exhibit__text">
              {project.description}
            </p>
            <div class="dd-exhibit__actions">
              {#each project.actions as action}
                <Button href={action.href} target="_blank" rel="noopener noreferrer" kind="outline">
                  <ButtonAnimation direction="ttb">
                    <span class="ml-auto material-symbols-outlined">arrow_forward</span>
                  </ButtonAnimation>

                  <span>{action.text}</span>
                </Button>
              {/each}
            </div>
          </div>

          <div class="col-sm-6 col-12">
            <img class="dd-exhibit__image" alt={project.name} src={project.image} />
          </div>
        </div>
      </div>
    {/each}
  </div>

  <Wave color="light" />
</Section>

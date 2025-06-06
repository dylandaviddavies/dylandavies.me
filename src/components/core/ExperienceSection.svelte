<script>
  import { EXPERIENCES } from "../../api/constants";
  import Section from "../common/Section.svelte";
  import SectionHeading from "../common/SectionHeading.svelte";
  import Wave from "../common/Wave.svelte";
</script>

<Section id="experience">
  <div class="container">
    <SectionHeading>Experience</SectionHeading>
    {#each EXPERIENCES as experience, i}
      <div class="dd-exhibit container py-1">
        <div
          class="row align-items-center flex-sm-row flex-column-reverse"
          class:flex-sm-row-reverse={i % 2}
        >
          <div class="col-sm-6 px-3">
            <h5 class="dd-exhibit__header">
              <span>{experience.company}</span>
            </h5>
            <h2 class="dd-exhibit__heading">
              <span>{experience.name}</span>
            </h2>
            <h5 class="dd-exhibit__header">
              <span>{experience.fromDate} - {experience.toDate}</span>
            </h5>
            <p class="dd-exhibit__text">
              {experience.description}
            </p>
          </div>

          <div class="col-sm-6 col-12">
            <img class="dd-exhibit__image" alt={experience.company} src={experience.image} />
          </div>
        </div>
      </div>
    {/each}
  </div>

  <Wave color="neutral-light" />
</Section>

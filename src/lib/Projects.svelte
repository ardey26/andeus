<script lang="ts">
  import ProjectCard from "./ProjectCard.svelte";

  import iksi from "./images/iksi.png";
  import kardban from "./images/kardban.png";
  import portfolio from "./images/portfolio.png";

  const projects = [
    {
      image: iksi,
      title: "Iksi",
      description:
        "A URL shortener made using Sveltekit as a fullstack framework, Prisma with a PostgreSQL connector for managing the relational database, and TailwindCSS for styling.",
      website: "https://www.iksi.app",
      github: "https://github.com/ardey26/iksi",
    },
    {
      image: kardban,
      title: "kardban",
      description:
        "A social media web application built with: MongoDB for the Database; Express and Node for the backend; React for the frontend. Everything is Dockerized and uses Nginx for load balancing and reverse proxying. Styling was done using Bootstrap 5. Authentication/Authorization was accomplished through JWT",

      github: "https://github.com/ardey26/kardban",
    },
    {
      image: portfolio,
      title: "Portfolio",
      description:
        "My personal portfolio website built using Sveltekit and TailwindCSS with Flowbite library",
      website: "https://www.iksi.app",
      github: "https://github.com/ardey26/iksi",
    },
  ];
</script>

<div class="section p-5" id="projects">
  <div class="grid grid-flow-row-dense grid-cols-3 h-[70%]">
    {#each projects as project}
      <ProjectCard
        image={project.image}
        title={project.title}
        description={project.description}
        website={project.website}
        github={project.github}
      />
    {/each}
  </div>
</div>

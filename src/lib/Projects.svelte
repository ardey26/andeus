<script lang="ts">
  import ProjectCard from "./ProjectCard.svelte";

  import iksi from "./images/iksi.png";
  import kardban from "./images/kardban.png";
  import portfolio from "./images/portfolio.png";

  interface Projects {
    image: string;
    title: string;
    description: string;
    website?: string;
    github: string;
    technologies: Array<string>;
  }
  const projects: Projects[] = [
    {
      image: iksi,
      title: "Iksi",
      description:
        "A URL shortener made using SvelteKit as a fullstack framework, Prisma with a PostgreSQL connector for managing the relational database, and TailwindCSS for styling.",
      website: "https://www.iksi.app",
      github: "https://github.com/ardey26/iksi",
      technologies: [
        "SvelteKit",
        "Prisma",
        "PostgreSQL",
        "Supabase",
        "TailwindCSS",
        "DaisyUI",
      ],
    },
    {
      image: kardban,
      title: "kardban",
      description:
        "A kanban-style social media web application built for productivity using: MongoDB for the Database; Express and Node for the backend; React for the frontend. Everything is Dockerized and uses Nginx for load balancing and reverse proxying. Styling was done using Bootstrap 5. Authentication/Authorization was accomplished through JWT.",
      website: "https://client-g4elocovaq-as.a.run.app/",
      github: "https://github.com/ardey26/kardban",
      technologies: [
        "MongoDB",
        "Express",
        "React",
        "Node",
        "Bootstrap 5",
        "Docker",
        "Nginx",
        "JWT",
      ],
    },
    {
      image: portfolio,
      title: "Portfolio",
      description:
        "My personal portfolio website built using Sveltekit, TailwindCSS with Flowbite library, Prisma and PostgreSQL (Supabase) for the messages.",
      website: "https://www.iksi.app",
      github: "https://github.com/ardey26/iksi",
      technologies: [
        "SvelteKit",
        "TailwindCSS",
        "Flowbite",
        "Prisma",
        "PostgreSQL",
        "Supabase",
      ],
    },
  ];
</script>

<div class="min-h-screen py-10" id="projects">
  <div class="container m-auto">
    <h1 class="text-center text-4xl mb-5">Projects</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each projects as project}
        <ProjectCard
          image={project.image}
          title={project.title}
          description={project.description}
          website={project.website || ""}
          github={project.github}
          technologies={project.technologies}
        />
      {/each}
    </div>
  </div>
</div>

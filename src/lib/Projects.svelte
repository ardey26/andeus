<script lang="ts">
  import ProjectCard from "./ProjectCard.svelte";
  import { onMount } from 'svelte';

  import iksi from "./images/iksi.png";
  import kardban from "./images/kardban.png";
  import portfolio from "./images/portfolio.png";

  let scrollY = 0;
  let sectionElement;
  let titleElement;
  let cardsContainer;

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
        "A sophisticated URL shortener built with SvelteKit, featuring real-time analytics, custom domains, and enterprise-grade performance. Utilizes Prisma with PostgreSQL for robust data management.",
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
        "A next-generation kanban-style productivity platform with social features. Built with a microservices architecture using Docker, featuring real-time collaboration and intelligent task management.",
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
        "A modern, Apple-inspired portfolio showcasing cutting-edge web technologies. Features smooth animations, parallax effects, and responsive design principles.",
      website: "https://andeus.vercel.app/",
      github: "https://github.com/ardey26/andeus",
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

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleElement) observer.observe(titleElement);
    if (cardsContainer) {
      cardsContainer.querySelectorAll('.project-card').forEach((card, index) => {
        setTimeout(() => {
          card.classList.add('text-reveal');
          observer.observe(card);
        }, index * 100);
      });
    }

    return () => observer.disconnect();
  });

  $: parallaxOffset = scrollY * 0.2;
</script>

<svelte:window bind:scrollY />

<section 
  bind:this={sectionElement}
  class="section relative bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20"
  id="projects"
>
  <!-- Background elements -->
  <div 
    class="absolute inset-0 overflow-hidden"
    style="transform: translateY({parallaxOffset}px)"
  >
    <div class="absolute top-1/4 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
    <div class="absolute bottom-1/4 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
  </div>

  <div class="relative z-10 max-w-7xl mx-auto px-6">
    <!-- Section Header -->
    <div class="text-center mb-20">
      <h2 
        bind:this={titleElement}
        class="text-reveal text-5xl md:text-7xl font-bold text-white mb-6"
      >
        Featured <span class="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
      </h2>
      <p class="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
        Explore my latest work showcasing innovative solutions and cutting-edge technologies
      </p>
    </div>

    <!-- Projects Grid -->
    <div 
      bind:this={cardsContainer}
      class="grid grid-cols-1 lg:grid-cols-3 gap-8"
    >
      {#each projects as project, index}
        <div class="project-card text-reveal">
          <ProjectCard
            image={project.image}
            title={project.title}
            description={project.description}
            website={project.website || ""}
            github={project.github}
            technologies={project.technologies}
          />
        </div>
      {/each}
    </div>

    <!-- Call to Action -->
    <div class="text-center mt-20">
      <a 
        href="https://github.com/ardey26"
        target="_blank"
        rel="noreferrer"
        class="apple-button inline-flex items-center space-x-3"
      >
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
        <span>View More on GitHub</span>
      </a>
    </div>
  </div>
</section>

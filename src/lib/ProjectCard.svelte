<script lang="ts">
  export let image: string,
    title: string,
    description: string,
    website: string,
    github: string,
    technologies: Array<string>;
</script>

<div class="flex border-2 border-gray-300 rounded-xl">
  <div class="rounded-lg">
    <a href={website || github} target="_blank" rel="noreferrer">
      <img class="rounded-t-lg" src={image} alt="" />
    </a>
    <div class="border-t">
      <div class="mx-4 ">
        <span>
          <a href="/">
            <h5
              class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              {title}
            </h5>
          </a>
          <a
            href={github}
            class="bg-blue-100 hover:bg-blue-200 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400"
            target="_blank"
            >GitHub</a
          >
          {#if website}
            <a
              href={website}
              class="bg-blue-100 hover:bg-blue-200 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400"
              target="_blank"
              >Website</a
            >
          {/if}
        </span>
        <p class="my-3 font-normal text-white">
          {description}
        </p>
        <p class="border-t mb-3 text-gray-400">
          {#each technologies as technology}
            {#if technology === technologies[technologies.length - 1]}
              and {technology}.
            {:else}
              {technology}, {" "}
            {/if}
          {/each}
        </p>
      </div>
    </div>
  </div>
</div>

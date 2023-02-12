<script>
  export let image, title, description, website, github;
</script>

<div class="max-w-sm border border-gray-200 rounded-lg shadow relative">
  <a href={website || github} target="_blank" rel="noreferrer">
    <img class="rounded-t-lg" src={image} alt="" />
  </a>
  <div class="p-5 border-t">
    <a href="/">
      <h5
        class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
      >
        {title}
      </h5>
    </a>
    <p class="mb-3 font-normal text-gray-400">
      {description}
    </p>
    <div class="absolute bottom-0">
      <button
        type="button"
        class="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2 border"
      >
        View on GitHub
      </button>
      {#if website}
        <button
          type="button"
          class="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2 border"
        >
          Visit website
        </button>
      {/if}
    </div>
  </div>
</div>

<script>
  import FaGithub from "svelte-icons/fa/FaGithub.svelte";
  import FaLinkedinIn from "svelte-icons/fa/FaLinkedinIn.svelte";
</script>

<footer
  class="p-4 flex rounded-lg shadow md:flex md:items-center md:justify-between md:p-6"
>
  <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400 mr-3"
    >© {new Date().getFullYear()} All Rights Reserved.
  </span>

  <div class="w-7 ml-auto">
    <a href="https://www.github.com/ardey26" target="_blank" rel="noreferrer">
      <FaGithub />
    </a>
  </div>
  <div class="w-7 ml-5">
    <a
      href="https://www.linkedin.com/in/andre-de-jesus-0226/"
      target="_blank"
      rel="noreferrer"
    >
      <FaLinkedinIn />
    </a>
  </div>
</footer>

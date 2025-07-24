<script>
  import MdCloudDownload from "svelte-icons/md/MdCloudDownload.svelte";
</script>

<div class="section border border-2 grid content-center px-5" id="about">
  <div
    class="text-7xl font-graphik-semi-bold text-gray-900 lg:text-9xl dark:text-white"
  >
    Hello.
  </div>
  <div class="text-6xl lg:text-8xl">I am Andre de Jesus.</div>
  <div class="text-5xl lg:text-7xl text-gray-500 mt-3">Software Engineer</div>

  <a
    href="https://drive.google.com/file/d/17iEP0MJWR8-uK3aqVbYqZvFXft0JYlS5/view?usp=sharing"
    target="_blank"
    rel="noreferrer"
  >
    <button
      class="border mt-10 hover:bg-white text-white hover:text-black py-3 rounded-lg font-bold w-[220px]"
    >
      <div class="flex justify-center items-center relative">
        <div class="w-5">
          <MdCloudDownload />
        </div>
        <div class="button-copy leading-non pl-3">Download my resume</div>
      </div>
    </button>
  </a>
</div>

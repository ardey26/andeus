<script>
  import { onMount } from 'svelte';

  let scrollY = 0;
  let innerHeight = 0;
  let heroElement;
  let textElements = [];

  onMount(() => {
    // Animate text elements on load
    textElements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('revealed');
      }, index * 200 + 500);
    });
  });

  $: parallaxOffset = scrollY * 0.5;
</script>

<svelte:window bind:scrollY bind:innerHeight />

<section 
  bind:this={heroElement}
  class="section relative overflow-hidden bg-black flex items-center justify-center"
  id="about"
>
  <!-- Animated background gradient -->
  <div 
    class="absolute inset-0 opacity-30"
    style="background: linear-gradient(45deg, #667eea, #764ba2, #f093fb, #f5576c); 
           background-size: 400% 400%;
           animation: gradientShift 15s ease infinite;
           transform: translateY({parallaxOffset}px);"
  ></div>

  <!-- Floating geometric shapes -->
  <div class="absolute inset-0 overflow-hidden">
    <div class="floating absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
    <div class="floating absolute top-40 right-20 w-32 h-32 bg-blue-500/20 rounded-full blur-xl" style="animation-delay: 2s;"></div>
    <div class="floating absolute bottom-20 left-1/4 w-16 h-16 bg-purple-500/20 rounded-full blur-xl" style="animation-delay: 4s;"></div>
  </div>

  <div class="relative z-10 max-w-6xl mx-auto px-6 text-center">
    <div class="space-y-8">
      <!-- Main headline -->
      <h1 
        class="text-reveal text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight"
        bind:this={textElements[0]}
      >
        <span class="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
          Hello.
        </span>
      </h1>

      <!-- Subheading -->
      <h2 
        class="text-reveal text-4xl md:text-6xl lg:text-7xl font-light text-white/90"
        bind:this={textElements[1]}
      >
        I am <span class="font-semibold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Andre de Jesus</span>
      </h2>

      <!-- Role -->
      <p 
        class="text-reveal text-2xl md:text-4xl lg:text-5xl text-white/70 font-light"
        bind:this={textElements[2]}
      >
        Software Engineer
      </p>

      <!-- Description -->
      <p 
        class="text-reveal text-lg md:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed"
        bind:this={textElements[3]}
      >
        Crafting exceptional digital experiences with modern technologies. <br />
        Specializing in full-stack development.
      </p>

      <!-- CTA Button -->
      <div class="text-reveal pt-8" bind:this={textElements[4]}>
        <a
          href="https://drive.google.com/file/d/17iEP0MJWR8-uK3aqVbYqZvFXft0JYlS5/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          class="apple-button inline-flex items-center space-x-3 text-lg px-8 py-4"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"></path>
          </svg>
          <span>Download Resume</span>
        </a>
      </div>
    </div>
        
  </div>
</section>

<style>
  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
</style>

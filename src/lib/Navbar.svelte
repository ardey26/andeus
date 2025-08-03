<script>
  import logo from "./images/logo.png";
  import { onMount } from 'svelte';

  let scrollY = 0;
  let isScrolled = false;

  onMount(() => {
    const handleScroll = () => {
      scrollY = window.scrollY;
      isScrolled = scrollY > 50;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<svelte:window bind:scrollY />

<nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-500 {isScrolled ? 'glass backdrop-blur-lg' : 'bg-transparent'} px-6 py-4">
  <div class="max-w-7xl mx-auto flex items-center justify-between">
    <a href="/" class="flex items-center space-x-3 text-white hover:opacity-80 transition-opacity">
      <img src={logo} class="h-8 w-8" alt="andeus logo" />
      <span class="text-xl font-semibold tracking-tight">ANDEUS</span>
    </a>
    
    <div class="hidden md:flex items-center space-x-8">
      <a href="#about" class="text-white/80 hover:text-white transition-colors text-sm font-medium tracking-wide">About</a>
      <a href="#projects" class="text-white/80 hover:text-white transition-colors text-sm font-medium tracking-wide">Projects</a>
      <a href="#contact" class="text-white/80 hover:text-white transition-colors text-sm font-medium tracking-wide">Contact</a>
      <a 
        href="https://drive.google.com/file/d/17iEP0MJWR8-uK3aqVbYqZvFXft0JYlS5/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
        class="apple-button text-sm px-6 py-2"
      >
        Resume
      </a>
    </div>

    <!-- Mobile menu button -->
    <button 
      class="md:hidden text-white p-2"
      aria-label="Menu"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </button>
  </div>
</nav>

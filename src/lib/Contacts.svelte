<script lang="ts">
  import { onMount } from 'svelte';

  let email: string = "",
    message: string = "";

  let success: string;
  let scrollY = 0;
  let sectionElement;
  let formElement;

  const handleSubmit = async () => {
    const response = await fetch("/send", {
      method: "POST",
      body: JSON.stringify({ email, message }),
      headers: {
        "content-type": "application/json",
      },
    });

    const data = await response.json();
    success = data.message;
    email = "";
    message = "";
  };

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

    if (formElement) observer.observe(formElement);

    return () => observer.disconnect();
  });

  $: parallaxOffset = scrollY * 0.1;
</script>

<svelte:window bind:scrollY />

<section 
  bind:this={sectionElement}
  class="section relative bg-gradient-to-br from-black via-gray-900 to-black py-20 overflow-hidden"
  id="contact"
>
  <!-- Background elements -->
  <div 
    class="absolute inset-0"
    style="transform: translateY({parallaxOffset}px)"
  >
    <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
    <div class="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
  </div>

  <div class="relative z-10 max-w-4xl mx-auto px-6">
    <!-- Header -->
    <div class="text-center mb-16">
      <h2 class="text-5xl md:text-6xl font-bold text-white mb-6">
        Let's <span class="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Connect</span>
      </h2>
      <p class="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
        Have a project in mind? Let's discuss how we can bring your ideas to life.
      </p>
    </div>

    <!-- Contact Form -->
    <div 
      bind:this={formElement}
      class="text-reveal glass p-8 md:p-12 max-w-2xl mx-auto"
    >
      <form on:submit|preventDefault={handleSubmit} class="space-y-8">
        <div class="space-y-6">
          <!-- Email Input -->
          <div class="space-y-2">
            <label for="email" class="block text-sm font-medium text-white/80">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              bind:value={email}
              placeholder="your@email.com"
              required
              class="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all duration-300"
            />
          </div>

          <!-- Message Input -->
          <div class="space-y-2">
            <label for="message" class="block text-sm font-medium text-white/80">
              Message
            </label>
            <textarea
              id="message"
              rows="6"
              bind:value={message}
              placeholder="Tell me about your project..."
              required
              class="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all duration-300 resize-none"
            />
          </div>
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          class="w-full apple-button py-4 text-lg font-medium relative overflow-hidden group"
        >
          <span class="relative z-10">
            {#if success}
              ✓ Message Sent Successfully!
            {:else}
              Send Message
            {/if}
          </span>
        </button>
      </form>

      <!-- Alternative Contact Methods -->
      <div class="mt-12 pt-8 border-t border-white/10">
        <div class="text-center space-y-4">
          <p class="text-white/60 mb-6">Or reach out directly:</p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:dejesusandre0226@gmail.com"
              class="flex items-center justify-center space-x-3 px-6 py-3 bg-white/5 hover:bg-white/10 rounded-lg transition-all duration-300 group"
            >
              <svg class="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <span class="text-white/80 group-hover:text-white transition-colors">Email</span>
            </a>

            <a
              href="tel:+639471959691"
              class="flex items-center justify-center space-x-3 px-6 py-3 bg-white/5 hover:bg-white/10 rounded-lg transition-all duration-300 group"
            >
              <svg class="w-5 h-5 text-green-400 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              <span class="text-white/80 group-hover:text-white transition-colors">+63 947 195 9691</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

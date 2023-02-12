<script lang="ts">
  let email: string = " ",
    message: string = " ";

  let success: string;
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
</script>

<section class="section border grid place-items-center" id="contact">
  <div class="py-8 lg:py-16 px-4 max-w-screen-md">
    <h2
      class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white"
    >
      Contact me
    </h2>
    <p
      class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl"
    >
      Need help? shoot me an email!
    </p>
    <form on:submit|preventDefault={handleSubmit} class="space-y-8">
      <div>
        <label
          for="email"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >Your email</label
        >
        <input
          type="email"
          id="email"
          class="border border-white text-white text-sm rounded-lg block w-full p-2.5 bg-[#252525]"
          bind:value={email}
          placeholder="name@email.com"
          required
        />
      </div>

      <div class="sm:col-span-2">
        <label for="message" class="block mb-2 text-sm font-medium text-white"
          >Your message</label
        >
        <textarea
          id="message"
          rows="6"
          class="block p-2.5 w-full text-sm text-white bg-[#252525] rounded-lg shadow-sm border border-white"
          bind:value={message}
          placeholder="Leave a message..."
        />
      </div>
      <button
        type="submit"
        class="py-3 border px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 ml-[35%]"
      >
        {#if success}
          Message sent!
        {:else}
          Send message
        {/if}
      </button>
    </form>
    <p class="mt-2 text-gray-400 text-center">
      Want to send me an email directly? click<a
        href="mailto: dejesusandre0226@gmail.com"
        class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
      >
        &nbsp;here</a
      >
    </p>
    <p class="mt-2 text-gray-400">
      You can also reach me through my contact number: +63 947 195 9691
    </p>
  </div>
</section>

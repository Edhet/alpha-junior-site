<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: 'scroll-smooth bg-black text-white flex flex-col min-h-screen'
  },
  title: "Alpha Junior",
  link: [{ rel: 'icon', type: 'image/png', href: "/img/logo_alpha.png" }]
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
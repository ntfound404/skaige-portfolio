<script setup>
import Navbar from './components/Navbar.vue'
</script>

<template>
  <div class="page-shell min-h-screen bg-ink text-slate-100">
    <div class="page-grid pointer-events-none absolute inset-0"></div>
    <Navbar />
    <main class="relative z-10">
      <RouterView />
    </main>
  </div>
</template>

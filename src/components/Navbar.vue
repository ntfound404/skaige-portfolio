<script setup>
import { ref } from 'vue'
import profile from '../data/profile'

const isOpen = ref(false)

const navItems = [
  { label: '首页', to: '/' },
  { label: '关于我', to: '/about' },
  { label: '项目作品', to: '/projects' },
  { label: '联系我', to: '/contact' },
]

const closeMenu = () => {
  isOpen.value = false
}
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-white/10 bg-ink/75 backdrop-blur-xl">
    <nav class="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-8" aria-label="主导航">
      <RouterLink to="/" class="group flex items-center gap-3" @click="closeMenu">
        <span class="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-teal-400 text-sm font-bold text-white shadow-glow transition-transform duration-300 group-hover:-translate-y-0.5">
          {{ profile.initials }}
        </span>
        <span class="text-sm font-semibold tracking-wide text-white transition group-hover:text-blue-100">{{ profile.name }}</span>
      </RouterLink>

      <button
        class="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-200 transition hover:border-primary/70 hover:text-white md:hidden"
        type="button"
        :aria-expanded="isOpen"
        aria-controls="mobile-navigation"
        aria-label="切换导航菜单"
        @click="isOpen = !isOpen"
      >
        <span class="relative h-4 w-5">
          <span class="absolute left-0 top-0 h-0.5 w-5 rounded bg-current transition" :class="{ 'translate-y-2 rotate-45': isOpen }"></span>
          <span class="absolute left-0 top-2 h-0.5 w-5 rounded bg-current transition" :class="{ 'opacity-0': isOpen }"></span>
          <span class="absolute left-0 top-4 h-0.5 w-5 rounded bg-current transition" :class="{ '-translate-y-2 -rotate-45': isOpen }"></span>
        </span>
      </button>

      <div class="hidden items-center gap-2 md:flex">
        <RouterLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="rounded-lg px-4 py-2 text-sm font-medium text-slate-300 transition duration-300 hover:-translate-y-0.5 hover:bg-white/5 hover:text-white"
          active-class="bg-primary/15 text-white ring-1 ring-primary/30 shadow-glow"
        >
          {{ item.label }}
        </RouterLink>
      </div>
    </nav>

    <div
      id="mobile-navigation"
      class="border-t border-white/10 px-5 py-4 md:hidden"
      :class="isOpen ? 'block' : 'hidden'"
    >
      <div class="mx-auto grid max-w-6xl gap-2">
        <RouterLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="rounded-lg px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
          active-class="bg-primary/15 text-white ring-1 ring-primary/30"
          @click="closeMenu"
        >
          {{ item.label }}
        </RouterLink>
      </div>
    </div>
  </header>
</template>

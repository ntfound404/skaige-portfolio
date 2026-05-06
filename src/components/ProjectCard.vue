<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
  },
})

defineEmits(['select'])
</script>

<template>
  <article class="h-full">
    <button
      type="button"
      class="surface-card group flex h-full w-full flex-col rounded-lg p-6 text-left transition duration-500 hover:-translate-y-2 hover:border-primary/50 hover:bg-white/[0.08] hover:shadow-lift focus:outline-none focus:ring-2 focus:ring-primary/70 focus:ring-offset-2 focus:ring-offset-ink"
      :aria-label="`查看${project.title}详情`"
      @click="$emit('select', project)"
    >
      <div class="flex-1">
        <div class="mb-5 h-1 w-12 rounded-full bg-gradient-to-r from-primary to-teal-300 transition-all duration-500 group-hover:w-20"></div>
        <h2 class="text-xl font-semibold text-white">{{ project.title }}</h2>
        <p class="mt-3 text-sm leading-6 text-slate-400">{{ project.description }}</p>

        <div class="mt-5 flex flex-wrap gap-2" aria-label="Technology stack">
          <span
            v-for="tech in project.techStack"
            :key="tech"
            class="rounded-md border border-primary/25 bg-primary/10 px-2.5 py-1 text-xs font-medium text-blue-100 transition duration-300 group-hover:border-primary/45 group-hover:bg-primary/15"
          >
            {{ tech }}
          </span>
        </div>
      </div>

      <ul class="mt-6 space-y-3 text-sm text-slate-300">
        <li v-for="highlight in project.highlights" :key="highlight" class="flex gap-3">
          <span class="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-primary"></span>
          <span>{{ highlight }}</span>
        </li>
      </ul>

      <span class="mt-6 inline-flex text-sm font-semibold text-blue-100 transition duration-300 group-hover:text-white">
        查看项目详情
      </span>
    </button>
  </article>
</template>

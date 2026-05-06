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
  <article
    class="surface-card group flex h-full flex-col rounded-lg transition duration-500 hover:-translate-y-2 hover:border-primary/50 hover:bg-white/[0.08] hover:shadow-lift"
    :class="
      project.featured
        ? 'border border-primary/45 ring-2 ring-primary/25 shadow-[0_0_40px_-12px_rgba(75,123,255,0.45)]'
        : 'border border-white/10'
    "
  >
    <div
      class="flex flex-1 cursor-pointer flex-col rounded-lg p-6 text-left outline-none transition focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
      role="button"
      tabindex="0"
      :aria-label="`查看${project.title}详情`"
      @click="$emit('select', project)"
      @keydown.enter.prevent="$emit('select', project)"
      @keydown.space.prevent="$emit('select', project)"
    >
      <div class="flex flex-wrap items-start justify-between gap-3">
        <div class="mb-5 h-1 w-12 rounded-full bg-gradient-to-r from-primary to-teal-300 transition-all duration-500 group-hover:w-20"></div>
        <span
          v-if="project.featured"
          class="shrink-0 rounded-md bg-primary/20 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-blue-100 ring-1 ring-primary/35"
        >
          精选项目
        </span>
      </div>

      <h2 class="text-xl font-semibold text-white">{{ project.title }}</h2>

      <p class="mt-3 text-xs font-medium text-teal-300/90">项目状态 · {{ project.status }}</p>

      <p class="mt-3 text-sm leading-6 text-slate-400">{{ project.description }}</p>

      <div class="mt-5 flex flex-wrap gap-2" aria-label="技术栈">
        <span
          v-for="tech in project.techStack"
          :key="tech"
          class="rounded-md border border-primary/25 bg-primary/10 px-2.5 py-1 text-xs font-medium text-blue-100 transition duration-300 group-hover:border-primary/45 group-hover:bg-primary/15"
        >
          {{ tech }}
        </span>
      </div>

      <ul class="mt-6 space-y-3 text-sm text-slate-300">
        <li v-for="highlight in project.highlights" :key="highlight" class="flex gap-3">
          <span class="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-primary"></span>
          <span>{{ highlight }}</span>
        </li>
      </ul>
    </div>

    <div class="flex flex-wrap items-center gap-3 border-t border-white/10 px-6 pb-6 pt-4">
      <a
        v-if="project.githubUrl"
        :href="project.githubUrl"
        target="_blank"
        rel="noreferrer"
        class="inline-flex items-center justify-center rounded-lg border border-primary/40 bg-primary/15 px-4 py-2 text-sm font-semibold text-blue-100 transition duration-300 hover:-translate-y-0.5 hover:border-primary/60 hover:bg-primary/25 hover:text-white"
        @click.stop
      >
        查看源码
      </a>
      <button
        type="button"
        class="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-blue-100 transition duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-white/[0.08] hover:text-white"
        @click="$emit('select', project)"
      >
        查看项目详情
      </button>
    </div>
  </article>
</template>

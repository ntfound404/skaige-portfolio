<script setup>
import profile from '../data/profile'
import skillCategories from '../data/skills'

const capabilityTags = ['全栈开发', '移动端应用', 'AI 辅助开发']

const featuredSkills = skillCategories
  .flatMap((category) => category.skills)
  .slice(0, 10)
</script>

<template>
  <section
    class="mx-auto grid min-h-[calc(100vh-73px)] max-w-6xl items-center gap-14 px-5 py-20 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-28"
  >
    <div class="fade-up">
      <p class="text-sm font-semibold uppercase tracking-[0.28em] text-primary">
        个人技术作品集
      </p>
      <h1
        class="mt-6 max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
      >
        {{ profile.name }}
      </h1>
      <h2 class="mt-5 text-2xl font-semibold text-blue-100 sm:text-3xl">
        {{ profile.title }}
      </h2>
      <p class="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
        {{ profile.summary }}
      </p>
      <p class="mt-5 max-w-2xl text-base font-medium leading-8 text-blue-100/95 sm:text-lg">
        我能够独立完成从需求分析、系统设计、前后端开发、接口联调到部署上线的完整流程。
      </p>

      <div class="mt-10 flex flex-col gap-3 sm:flex-row">
        <RouterLink
          to="/projects"
          class="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-primary to-teal-400 px-5 py-3 text-sm font-semibold text-white shadow-glow transition duration-300 hover:-translate-y-1 hover:shadow-lift"
        >
          查看项目作品
        </RouterLink>
        <RouterLink
          to="/contact"
          class="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-primary/70 hover:bg-white/[0.07]"
        >
          联系我
        </RouterLink>
        <a
          :href="profile.resumeUrl"
          :download="profile.resumeDownloadName"
          class="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-primary/70 hover:bg-white/[0.07]"
        >
          下载简历
        </a>
      </div>
    </div>

    <aside class="surface-card float-slow rounded-lg p-6">
      <div class="flex items-center justify-between border-b border-white/10 pb-5">
        <div>
          <p class="text-sm font-medium text-slate-400">当前定位</p>
          <h2 class="mt-1 text-2xl font-semibold text-white">全栈开发与 AI 应用工程化</h2>
        </div>
        <span
          class="rounded-md bg-primary/15 px-3 py-1 text-sm font-semibold text-blue-100 ring-1 ring-primary/25"
          >{{ profile.rank }}</span
        >
      </div>

      <div class="mt-6 flex flex-wrap gap-2">
        <span
          v-for="tag in capabilityTags"
          :key="tag"
          class="rounded-lg border border-primary/35 bg-primary/15 px-3 py-1.5 text-xs font-semibold tracking-wide text-blue-100 ring-1 ring-primary/20"
        >
          {{ tag }}
        </span>
      </div>

      <p class="mt-5 text-xs font-medium uppercase tracking-[0.2em] text-slate-500">常用技术</p>
      <div class="mt-3 grid grid-cols-2 gap-3">
        <div
          v-for="skill in featuredSkills"
          :key="skill"
          class="rounded-lg border border-white/10 bg-ink/70 px-4 py-3 text-sm font-medium text-slate-200 transition duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-primary/10 hover:text-white"
        >
          {{ skill }}
        </div>
      </div>
    </aside>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import ProjectCard from '../components/ProjectCard.vue'
import ProjectModal from '../components/ProjectModal.vue'
import projects from '../data/projects'

const displayProjects = computed(() =>
  [...projects].sort((a, b) => Number(!!b.featured) - Number(!!a.featured)),
)

const selectedProject = ref(null)

const openProject = (project) => {
  selectedProject.value = project
}

const closeProject = () => {
  selectedProject.value = null
}
</script>

<template>
  <section class="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
    <div class="fade-up max-w-3xl">
      <p class="text-sm font-semibold uppercase tracking-[0.28em] text-primary">项目作品</p>
      <h1 class="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl">围绕真实业务场景完成的全栈项目。</h1>
      <p class="mt-7 text-base leading-8 text-slate-300">
        覆盖习惯养成平台、宿舍管理系统、二手交易平台和听力学习小程序，体现需求分析、系统设计、前后端开发、数据库设计、接口联调和项目优化能力。
      </p>
    </div>

    <div class="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      <ProjectCard
        v-for="project in displayProjects"
        :key="project.title"
        class="min-w-0"
        :class="{ 'xl:col-span-3': project.featured }"
        :project="project"
        @select="openProject"
      />
    </div>

    <ProjectModal v-if="selectedProject" :project="selectedProject" @close="closeProject" />
  </section>
</template>

<script setup>
import profile from '../data/profile'
import skillCategories from '../data/skills'
import { advantages, awards, education, internship } from '../data/experience'
</script>

<template>
  <section class="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
    <div class="fade-up max-w-3xl">
      <p class="text-sm font-semibold uppercase tracking-[0.28em] text-primary">关于我</p>
      <h1 class="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl">具备完整项目经验的全栈开发工程师。</h1>
      <p class="mt-7 text-base leading-8 text-slate-300">
        {{ profile.positioning }}
      </p>
      <p class="mt-5 text-base leading-8 text-slate-300">
        目前就读于{{ profile.school }}{{ profile.major }}专业，专业成绩位于前 1%。我重视工程落地能力，能够围绕真实业务完成前端页面、后端接口、数据库设计、权限认证、接口联调和部署优化。
      </p>
    </div>

    <div class="mt-16 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
      <article class="surface-card rounded-lg p-6 transition duration-500 hover:-translate-y-1 hover:border-primary/40">
        <h2 class="text-xl font-semibold text-white">教育背景</h2>
        <dl class="mt-6 space-y-5">
          <div>
            <dt class="text-sm font-medium text-slate-400">学校</dt>
            <dd class="mt-1 text-slate-200">{{ education.school }}</dd>
          </div>
          <div>
            <dt class="text-sm font-medium text-slate-400">专业与时间</dt>
            <dd class="mt-1 text-slate-200">{{ education.major }} · {{ education.period }}</dd>
          </div>
          <div>
            <dt class="text-sm font-medium text-slate-400">成绩</dt>
            <dd class="mt-1 text-slate-200">{{ education.rank }}</dd>
          </div>
          <div>
            <dt class="text-sm font-medium text-slate-400">主修课程</dt>
            <dd class="mt-2 flex flex-wrap gap-2">
              <span
                v-for="course in education.courses"
                :key="course"
                class="rounded-md border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-slate-200"
              >
                {{ course }}
              </span>
            </dd>
          </div>
        </dl>
      </article>

      <article class="surface-card rounded-lg p-6 transition duration-500 hover:-translate-y-1 hover:border-primary/40">
        <h2 class="text-xl font-semibold text-white">实习经历</h2>
        <div class="mt-6">
          <p class="text-lg font-semibold text-white">{{ internship.company }}</p>
          <p class="mt-2 text-sm text-blue-100">{{ internship.role }} · {{ internship.period }}</p>
          <ul class="mt-5 space-y-3 text-sm leading-6 text-slate-300">
            <li v-for="item in internship.descriptions" :key="item" class="flex gap-3">
              <span class="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-primary"></span>
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
      </article>
    </div>

    <div class="mt-6 grid gap-6 lg:grid-cols-2">
      <article
        v-for="category in skillCategories"
        :key="category.title"
        class="surface-card rounded-lg p-6 transition duration-500 hover:-translate-y-1 hover:border-primary/40"
      >
        <h2 class="text-xl font-semibold text-white">{{ category.title }}</h2>
        <p class="mt-4 text-sm leading-7 text-slate-300">{{ category.description }}</p>
        <div class="mt-5 flex flex-wrap gap-2">
          <span
            v-for="skill in category.skills"
            :key="skill"
            class="rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-sm font-medium text-slate-200 transition duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-primary/10 hover:text-white"
          >
            {{ skill }}
          </span>
        </div>
      </article>
    </div>

    <div class="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <article class="surface-card rounded-lg p-6 transition duration-500 hover:-translate-y-1 hover:border-primary/40">
        <h2 class="text-xl font-semibold text-white">个人优势</h2>
        <ul class="mt-6 space-y-3 text-sm leading-6 text-slate-300">
          <li v-for="item in advantages" :key="item" class="flex gap-3">
            <span class="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-primary"></span>
            <span>{{ item }}</span>
          </li>
        </ul>
      </article>

      <article class="surface-card rounded-lg p-6 transition duration-500 hover:-translate-y-1 hover:border-primary/40">
        <h2 class="text-xl font-semibold text-white">奖项荣誉</h2>
        <ul class="mt-6 space-y-3 text-sm leading-6 text-slate-300">
          <li v-for="award in awards" :key="award" class="flex gap-3">
            <span class="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-teal-300"></span>
            <span>{{ award }}</span>
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>

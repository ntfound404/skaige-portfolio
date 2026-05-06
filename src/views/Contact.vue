<script setup>
import profile from '../data/profile'
</script>

<template>
  <section class="mx-auto grid min-h-[calc(100vh-73px)] max-w-6xl items-center px-5 py-20 lg:px-8 lg:py-28">
    <div class="fade-up max-w-3xl">
      <p class="text-sm font-semibold uppercase tracking-[0.28em] text-primary">联系方式</p>
      <h1 class="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl">期待与团队一起交付可靠、清晰、有价值的产品。</h1>
      <p class="mt-7 text-base leading-8 text-slate-300">
        如果你正在寻找具备完整项目经验、能独立推进功能落地的全栈开发工程师，可以通过以下方式联系我。
      </p>

      <div class="mt-10 grid gap-4 sm:grid-cols-2">
        <a
          :href="profile.qqMailUrl"
          target="_blank"
          rel="noreferrer"
          class="surface-card rounded-lg p-5 transition duration-500 hover:-translate-y-2 hover:border-primary/50 hover:bg-white/[0.07] hover:shadow-lift"
        >
          <span class="text-sm font-medium text-slate-400">邮箱</span>
          <span class="mt-2 block text-lg font-semibold text-white">{{ profile.email }}</span>
        </a>
        <a
          :href="profile.githubUrl"
          target="_blank"
          rel="noreferrer"
          class="surface-card rounded-lg p-5 transition duration-500 hover:-translate-y-2 hover:border-primary/50 hover:bg-white/[0.07] hover:shadow-lift"
        >
          <span class="text-sm font-medium text-slate-400">GitHub</span>
          <span class="mt-2 block text-lg font-semibold text-white">{{ profile.githubName }}</span>
        </a>
        <a
          :href="`tel:${profile.phone}`"
          class="surface-card rounded-lg p-5 transition duration-500 hover:-translate-y-2 hover:border-primary/50 hover:bg-white/[0.07] hover:shadow-lift"
        >
          <span class="text-sm font-medium text-slate-400">电话</span>
          <span class="mt-2 block text-lg font-semibold text-white">{{ profile.phone }}</span>
        </a>
        <div class="surface-card rounded-lg p-5 transition duration-500 hover:-translate-y-2 hover:border-primary/50 hover:bg-white/[0.07] hover:shadow-lift">
          <span class="text-sm font-medium text-slate-400">姓名</span>
          <span class="mt-2 block text-lg font-semibold text-white">{{ profile.name }}</span>
          <span class="mt-2 block text-sm text-slate-400">{{ profile.title }}</span>
        </div>
      </div>

      <div class="mt-8 flex flex-col gap-3 sm:flex-row">
        <a
          :href="profile.qqMailUrl"
          target="_blank"
          rel="noreferrer"
          class="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-primary to-teal-400 px-5 py-3 text-sm font-semibold text-white shadow-glow transition duration-300 hover:-translate-y-1 hover:shadow-lift"
        >
          发送邮件
        </a>
        <a
          :href="profile.githubUrl"
          target="_blank"
          rel="noreferrer"
          class="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-primary/70 hover:bg-white/[0.07]"
        >
          查看 GitHub
        </a>
      </div>
    </div>
  </section>
</template>

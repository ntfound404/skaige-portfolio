<script setup>
import { onBeforeUnmount, onMounted } from 'vue'

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['close'])

const handleKeydown = (event) => {
  if (event.key === 'Escape') {
    emit('close')
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div class="fixed inset-0 z-[80] overflow-y-auto bg-ink/80 px-5 py-8 backdrop-blur-md" @click.self="emit('close')">
        <div class="flex min-h-full items-center justify-center">
          <Transition
            appear
            enter-active-class="transition duration-300 ease-out"
            enter-from-class="translate-y-6 scale-95 opacity-0"
            enter-to-class="translate-y-0 scale-100 opacity-100"
            leave-active-class="transition duration-200 ease-in"
            leave-from-class="translate-y-0 scale-100 opacity-100"
            leave-to-class="translate-y-6 scale-95 opacity-0"
          >
            <section
              class="surface-card relative w-full max-w-3xl rounded-lg p-6 text-slate-100 shadow-lift sm:p-8"
              role="dialog"
              aria-modal="true"
              :aria-labelledby="`project-modal-${props.project.title.replaceAll(' ', '-').toLowerCase()}`"
            >
              <button
                type="button"
                class="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-xl leading-none text-slate-300 transition hover:border-primary/60 hover:bg-white/5 hover:text-white focus:outline-none focus:ring-2 focus:ring-primary/70"
                aria-label="关闭项目详情"
                @click="emit('close')"
              >
                &times;
              </button>

              <div class="pr-10">
                <p class="text-sm font-semibold uppercase tracking-[0.28em] text-primary">项目详情</p>
                <h2 :id="`project-modal-${props.project.title.replaceAll(' ', '-').toLowerCase()}`" class="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
                  {{ project.title }}
                </h2>
                <p class="mt-4 text-base leading-8 text-slate-300">{{ project.description }}</p>
              </div>

              <div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div class="rounded-lg border border-white/10 bg-white/[0.04] p-4">
                  <dt class="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">角色</dt>
                  <dd class="mt-2 text-sm font-semibold text-white">{{ project.role }}</dd>
                </div>
                <div class="rounded-lg border border-white/10 bg-white/[0.04] p-4">
                  <dt class="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">项目状态</dt>
                  <dd class="mt-2 text-sm font-semibold text-white">{{ project.status }}</dd>
                </div>
                <div class="rounded-lg border border-white/10 bg-white/[0.04] p-4">
                  <dt class="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">阶段</dt>
                  <dd class="mt-2 text-sm font-semibold text-white">{{ project.timeline }}</dd>
                </div>
                <div class="rounded-lg border border-white/10 bg-white/[0.04] p-4">
                  <dt class="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">技术栈</dt>
                  <dd class="mt-2 text-sm font-semibold text-white">{{ project.techStack.length }} 项技术</dd>
                </div>
              </div>

              <div class="mt-8">
                <h3 class="text-lg font-semibold text-white">项目成果</h3>
                <p class="mt-3 text-sm leading-7 text-slate-300">{{ project.outcome }}</p>
              </div>

              <div class="mt-8">
                <h3 class="text-lg font-semibold text-white">技术栈</h3>
                <div class="mt-4 flex flex-wrap gap-2">
                  <span
                    v-for="tech in project.techStack"
                    :key="tech"
                    class="rounded-md border border-primary/25 bg-primary/10 px-3 py-1.5 text-xs font-medium text-blue-100"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>

              <div class="mt-8 grid gap-8 md:grid-cols-2">
                <div>
                  <h3 class="text-lg font-semibold text-white">核心亮点</h3>
                  <ul class="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                    <li v-for="highlight in project.highlights" :key="highlight" class="flex gap-3">
                      <span class="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-primary"></span>
                      <span>{{ highlight }}</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 class="text-lg font-semibold text-white">工程说明</h3>
                  <ul class="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                    <li v-for="detail in project.details" :key="detail" class="flex gap-3">
                      <span class="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-teal-300"></span>
                      <span>{{ detail }}</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div v-if="project.links?.length" class="mt-8">
                <h3 class="text-lg font-semibold text-white">项目链接</h3>
                <div class="mt-4 flex flex-wrap gap-3">
                  <a
                    v-for="link in project.links"
                    :key="link.url"
                    :href="link.url"
                    target="_blank"
                    rel="noreferrer"
                    class="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-blue-100 transition hover:-translate-y-0.5 hover:border-primary/50 hover:bg-primary/10 hover:text-white"
                  >
                    {{ link.label }}
                  </a>
                </div>
              </div>
            </section>
          </Transition>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

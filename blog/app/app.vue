<template>
  <div class="min-h-screen">
    <!-- Header -->
    <header class="bg-card border-b" :style="{ borderColor: 'var(--border)' }">
      <div class="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 class="text-2xl font-bold text-primary">Nordic Blog</h1>
        <button @click="toggleTheme"
          class="px-4 py-2 rounded-md bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground transition-colors">
          {{ isDarkMode ? '☀️ Light' : '🌙 Dark' }}
        </button>
      </div>
    </header>

    <!-- Main Content -->
    <main class="max-w-4xl mx-auto px-4 py-8">
      <div class="bg-card rounded-lg p-6 border" :style="{ borderColor: 'var(--border)' }">
        <h2 class="text-xl font-semibold text-foreground mb-4">Welcome to the Nordic Theme</h2>
        <p class="text-muted-foreground mb-4">
          This blog uses a beautiful Nordic-inspired color palette with support for both light and dark modes.
        </p>
      </div>
    </main>
  </div>
</template>

<script setup>
import { useDarkMode } from './composables/useDarkMode'
const { isDarkMode, toggleTheme } = useDarkMode()
</script>